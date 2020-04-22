import React, {Component} from 'react';
import './more.css';

const More = (props) => {
    return ( 
        <React.Fragment>
            <div id="more" className="more-main">
                <div className="header dark section">
                    <h2>Looking For More Details?</h2>
                </div>
                <br/>
                <div className='resume'>
                    <a href={`${process.env.PUBLIC_URL}/media/CV.pdf`} target="_blank" rel="noopener noreferrer">View My Resume</a>
                </div>
                <br/>
                <div className="terminal container">
                    <div className="row">
                        <div className="col">
                            <MyTerminal/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grad-line"></div>
        </React.Fragment>
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
            elements: [
                this.createNewInput()
            ]
        }
    }

    componentDidMount() {
        this.connectWS();
        this.ref.current.addEventListener('mousedown', this.focusLastEelement);
    }

    render() {
        return (
            <div className="myterminal-main no-scrollbars" ref={this.ref}>
                {
                    this.state.elements.map(elem =>
                        <div key={elem.id} className={`row ${elem.type} no-gutters element`}>
                            <div className="col symbol">{elem.type === 'input' ? '$' : ''}</div>
                            <div className="col">
                                <div ref={elem.ref} className="textarea" onPaste={this.handlePaste.bind(null, elem)} onKeyDown={this.handleInput.bind(this, elem)}  contentEditable={elem.type === 'input'} suppressContentEditableWarning={true} dangerouslySetInnerHTML={{__html: elem.text}}></div>
                            </div>
                        </div> 
                    )
                }
            </div>
        )
    }

    connectWS = () => {
        this.timeOut = setTimeout(() => {
            this.ws = new WebSocket(`ws://${window.location.hostname}:8000`);
            this.ws.addEventListener('open', this.handleWSOpen);
            this.ws.addEventListener('message', this.handleWSMessage);
            this.ws.addEventListener('error', this.handleWSError);
            this.ws.addEventListener('close', this.handleWSClose);
        }, 2000);

    }

    handleWSClose = (event) => {
        console.log('WS close');
        this.connectWS();
    }

    handleWSError = (event) => {
        console.log('WS error');
        this.connectWS();
    }

    handleWSOpen = (event) => {
        console.log('WS was opened');
        clearTimeout(this.timeOut);
    }

    handleWSMessage = (event) => {
        console.log('WS Message from server: ', event.data);
        const elements = [...this.state.elements];

        let data = event.data; //.split('  -').map(x => `${x}`).join('</div>  -');

        try{
            data = JSON.parse(data);
            data = this.transformMessageToHTML(data)
        }catch (e) {
            console.log(e)
        }

        elements.push(this.createNewOutput(data))
        this.setState({elements: elements}, this.renderNewInput);
    }

    transformMessageToHTML = (data, depth=0) => {

        if (Array.isArray(data)){
            return data.map(item =>
                `<div class="row no-gutters array"> <div class="col hyphen">- </div><div class='col data'>${this.transformMessageToHTML(item, depth+1)}</div></div>`).reduce((x, y) => x+y, '')
        }
        else if (data === Object(data)){
            return Object.keys(data).map(key => `<div class='data object'>${key}: ${this.transformMessageToHTML(data[key], depth+1)}</div>`).reduce((x, y) => x+y, '')
        }
        return data
    }

    sendWSMessage = (command) => {
        try {
            this.ws.send(command);
            console.log('Sent "', command, '" to server');
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
        elem.ref.current.contentEditable = false;
        const [commandHistory, commandHistoryIndex] = this.saveCommandToHistory(elem.ref.current.textContent)

        const elements = [...this.state.elements];
        const elementIndex = this.state.elements.findIndex((x) => x.id === elem.id);
        elements[elementIndex].text = elem.ref.current.textContent;

        this.setState({
            elements: elements,
            commandHistory: commandHistory,
            commandHistoryIndex: commandHistoryIndex
        }, () => {
            this.sendWSMessage(elements[elementIndex].text);
        });
    }

    focusLastEelement = (event) => {
        if(!event || event.target === this.ref.current){
            if(event) event.preventDefault();
            const elem =  this.state.elements[this.state.elements.length - 1];
            elem.ref.current.focus();
            const data = elem.ref.current.textContent;
            elem.ref.current.textContent = '';
            document.execCommand('insertText', false, data);
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