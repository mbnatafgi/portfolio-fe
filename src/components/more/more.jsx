import React, {Component} from 'react';
import './more.css';
import {context} from "../common/context";

const More = (props) => {
    return (
        <context.Consumer>
            {(context) => (
                <React.Fragment>
                    <div id="more" className={`more-main ${context.state.dark ? 'dark' : ''}`}>
                        <div className={`header ${context.state.dark ? 'light' : 'dark'} section`}>
                            <h2>Looking For More Details?</h2>
                        </div>
                        <br/>
                        <div className='resume'>
                            <a href={`${process.env.PUBLIC_URL}/media/CV${context.state.dark ? '-dark' : ''}.pdf`} target="_blank" rel="noopener noreferrer">View My Resume</a>
                            <br/>
                        </div>
                        <br/>
                        <div className={`header ${context.state.dark ? 'light' : 'dark'} section`}>
                            <h3>Or use my CLI !</h3>
                        </div>
                        <div className="terminal container">
                            <div className="row">
                                <div className="col">
                                    <MyTerminal dark={context.state.dark}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grad-line"></div>
                </React.Fragment>

            )}
        </context.Consumer>
     );
}

class MyTerminal extends Component{

    state = {    }

    constructor() {
        super();
        const commandHistory = [...this.getCommandHistory(), ''];
        this.ref = React.createRef();
        this.state = {
            commandHistory: commandHistory,
            commandHistoryIndex: commandHistory.length - 1,
            elements: [this.createNewOutput('Welcome to my CLI !!!\n\nThis by no means is a terminal emulator, but for the purpose of getting more details about me, it\'s cool and it gets the job done :D\n\nGet started by typing: <spand class="colorful">mbnatafgi --help</spand>\n\nEnjoy !')],
            isConnected: false,
        }
        this.userDidInteract = false;
    }

    componentDidMount() {
        this.connectWS();
        this.ref.current.addEventListener('mousedown', this.focusLastEelement);
    }

    render() {
        return (
            <div className={`myterminal-main ${this.props.dark ? 'dark' : ''} no-scrollbars`} ref={this.ref}>
                <div className='loader-wrapper'>
                    <div className={this.state.isConnected ? "" : "loader"} >
                    </div>
                </div>
                {
                    this.state.elements.map((elem, index) =>
                        <div key={elem.id} className={`row ${elem.type} no-gutters element`}>
                            <div className="col symbol">{elem.type === 'input' ? '$' : ''}</div>
                            <div className="col">
                                <div
                                    ref={elem.ref}
                                    className="textarea"
                                    onPaste={this.handlePaste.bind(null, elem)}
                                    onKeyDown={this.handleInput.bind(this, elem)}
                                    contentEditable={elem.type === 'input' && this.state.isConnected && index === this.state.elements.length - 1}
                                    suppressContentEditableWarning={true}
                                    dangerouslySetInnerHTML={{__html: elem.text}}>
                                </div>
                            </div>
                        </div> 
                    )
                }
            </div>
        )
    }

    connectWS = () => {
        this.timeOut = setTimeout(() => {
            this.ws = new WebSocket(`wss://${window.location.hostname}/core`);
            this.ws.addEventListener('open', this.handleWSOpen);
            this.ws.addEventListener('message', this.handleWSMessage);
            this.ws.addEventListener('error', this.handleWSError);
            this.ws.addEventListener('close', this.handleWSClose);
        },  2000);

    }

    handleWSClose = (event) => {
        this.setState({
            isConnected: false,
        }, this.connectWS);
    }

    handleWSError = (event) => {
    }

    handleWSOpen = (event) => {
        clearTimeout(this.timeOut);
        this.setState({
            isConnected: true
        }, this.renderNewInput);
    }

    handleWSMessage = (event) => {
        const elements = [...this.state.elements];
        let data = event.data;

        try{
            data = JSON.parse(data);
            data = this.transformMessageToHTML(data)
        }catch (e) {
        }

        elements.push(this.createNewOutput(data))
        this.setState({elements: elements, isConnected: this.ws.readyState === this.ws.OPEN}, this.renderNewInput);
    }

    transformMessageToHTML = (data, depth=0) => {

        if (Array.isArray(data)){
            return data.map(item =>
                `<div class="row no-gutters array"><div class="col hyphen">- </div><div class='col data'>${this.transformMessageToHTML(item, depth+1)}</div></div>`).reduce((x, y) => x+y, '')
        }
        else if (data === Object(data)){
            return Object.keys(data).map(key => `<div class='data object'>${key}: ${this.transformMessageToHTML(data[key], depth+1)}</div>`).reduce((x, y) => x+y, '')
        }
        return data
    }

    sendWSMessage = (command) => {
        try {
            this.ws.send(command);
        }catch (e) {

        }
    }

    createNewInput = () => {
        return {
            id: (this.state.elements || []).length, 
            ref: React.createRef(),
            text: '',
            type: 'input'
        }
    }

    createNewOutput = (text) => {
        return {
            id: (this.state.elements || []).length,
            ref: React.createRef(),
            text: text,
            type: 'output'
        }
    }

    renderNewInput = () => {
        const elements = [...this.state.elements];
        elements.push(this.createNewInput());
        this.setState({elements: elements}, this.focusLastEelement);
    }

    handlePaste = (elem, event) => {
        event.preventDefault();
        const data = (event.clipboardData || window.clipboardData).getData('text/plain').replace(/\s+/g, ' ').trim();
        document.execCommand('insertText', false, data);
    }

    handleInput = (elem, event) => {

        const keyMap = {
            13: this.handleEnterKey.bind(this, elem),
            38: this.handleArrowUpDownKey.bind(this, elem, true),
            40: this.handleArrowUpDownKey.bind(this, elem, false)
        }
        
        if(keyMap[event.keyCode]){
            event.preventDefault();
            keyMap[event.keyCode]()
        }
    }

    handleArrowUpDownKey = (elem, up) => {
        if((this.state.commandHistoryIndex > 0 && up) || (!up && this.state.commandHistoryIndex < this.state.commandHistory.length - 1)){
            const elements = [...this.state.elements];
            const elementIndex = this.state.elements.findIndex((x) => x.id === elem.id);
            const commandHistoryIndex  = this.state.commandHistoryIndex  + (up ? - 1 : 1);
            const commandHistory = [...this.state.commandHistory];

            commandHistory[this.state.commandHistoryIndex] = elem.ref.current.textContent;
            elements[elementIndex].text = commandHistory[commandHistoryIndex];

            this.setState({
                elements: elements,
                commandHistory: commandHistory,
                commandHistoryIndex: commandHistoryIndex,
            }, this.focusLastEelement)
        }
    }

    handleEnterKey = (elem) => {

        const command = elem.ref.current.textContent.trim();

        const [commandHistory, commandHistoryIndex] = this.saveCommandToHistory(command)

        const elements = [...this.state.elements];
        const elementIndex = this.state.elements.findIndex((x) => x.id === elem.id);
        elements[elementIndex].text = command;

        this.setState({
            elements: elements,
            commandHistory: commandHistory,
            commandHistoryIndex: commandHistoryIndex,
            isConnected: false
        }, () => {
            if(command === 'clear'){
                this.clearScreen();
            }
            else if(command){
                this.sendWSMessage(elements[elementIndex].text);
            }
        });
    }

    clearScreen = () => {
        this.setState({elements: [], isConnected: this.ws.readyState === this.ws.OPEN}, this.renderNewInput)
    }

    focusLastEelement = (event) => {
        if(event){
            this.userDidInteract = true;
        }
        if(!event || event.target === this.ref.current){
            if(event) {
                event.preventDefault();
            }
            const elem =  this.state.elements[this.state.elements.length - 1];
            if(elem && elem.type === 'input' && this.userDidInteract){
                elem.ref.current.contentEditable = this.ws.OPEN === this.ws.readyState;
                elem.ref.current.focus();
                const data = elem.ref.current.textContent;
                elem.ref.current.textContent = '';
                document.execCommand('insertText', false, data);
            }
        }
    }

    getCommandHistory = () => {
        return JSON.parse(localStorage.getItem('commandHistory')) || [];
    }

    saveCommandToHistory = (command) => {
        const commandHistory = [...this.getCommandHistory()];
        if(command.trim() !== "" && command !== commandHistory[commandHistory.length - 1]){
            commandHistory.push(command);
            localStorage.setItem('commandHistory', JSON.stringify(commandHistory));
            commandHistory.push("");
        }
        return [commandHistory, commandHistory.length - 1]
    }
}
 
export default More;