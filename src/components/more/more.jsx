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
        super()
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
        this.ref.current.addEventListener('mousedown', this.focusLastEelement);
    }

    componentDidUpdate() {
        this.focusLastEelement();
    }

    render() {
        return (
            <div className="myterminal-main no-scrollbars" ref={this.ref}>
                {
                    this.state.elements.map(elem =>
                        <div key={elem.id} className={`row ${elem.type} no-gutters element`}>
                            <div className="col symbol">{elem.type === 'input' ? '$' : ''}</div>
                            <div className="col">
                                <div ref={elem.ref} className="textarea" onPaste={this.handlePaste.bind(null, elem)} onKeyDown={this.handleInput.bind(this, elem)}  contentEditable={elem.type === 'input' ? true : false} suppressContentEditableWarning={true}>{elem.text}</div>
                            </div>
                        </div> 
                    )
                }
            </div>
        )
    }
    
    createNewInput = () => {
        return {
            id: (this.state.elements || []).length, 
            ref: React.createRef(),
            text: '', 
            type: 'input'
        }
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

    updateCommandHistory = (elem) => {
        const commandHistory = [...this.state.commandHistory];
        commandHistory[this.state.commandHistoryIndex] = elem.ref.current.textContent;
        this.setState({commandHistory: commandHistory});
    }

    handleArrowUpDownKey = (elem, up) => {
        if((this.state.commandHistoryIndex > 0 && up) || (!up && this.state.commandHistoryIndex < this.state.commandHistory.length - 1)){
            const elements = [...this.state.elements];
            const elementIndex = this.state.elements.findIndex((x) => x.id === elem.id);
            const commandHistoryIndex  = this.state.commandHistoryIndex  + (up ? - 1 : 1);

            this.updateCommandHistory(elem)
            elements[elementIndex].text = this.state.commandHistory[commandHistoryIndex]

            this.setState({
                commandHistoryIndex: commandHistoryIndex,
                elements: elements
            })
        }
    }

    handleEnterKey = (elem) => {
        elem.ref.current.contentEditable = false;
        const elementIndex = this.state.elements.findIndex((x) => x.id === elem.id);
        const elements = [...this.state.elements];
        elements[elementIndex].text = elem.ref.current.textContent;
        elements.push(this.createNewInput());
        this.setState({elements: elements}, this.focusLastEelement);
        this.saveCommandToHistory(elements[elementIndex].text)
    }

    focusLastEelement = (event) => {
        const elem =  this.state.elements[this.state.elements.length - 1];
        if(event && event.target === this.ref.current){
            event.preventDefault();
        }
        elem.ref.current.focus();
        const data = elem.ref.current.textContent;
        elem.ref.current.textContent = '';
        document.execCommand('insertText', false, data);
    }

    getCommandHistory = () => {
        return JSON.parse(localStorage.getItem('commandHistory')) || [];
    }

    saveCommandToHistory = (command) => {    
        const commandHistory = [...this.getCommandHistory(), command];
        if(command.trim() !== "" && command !== commandHistory[commandHistory.length - 2]){    
            localStorage.setItem('commandHistory', JSON.stringify(commandHistory));
            commandHistory.push("");
            this.setState({
                commandHistory: commandHistory,
                commandHistoryIndex: commandHistory.length - 1
            })
        }
    }
}
 
export default More;