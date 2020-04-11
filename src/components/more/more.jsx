import React, {Component} from 'react';
import { Terminal } from 'xterm';
import {FitAddon} from 'xterm-addon-fit';
import variables from '../common/_variables.scss';
import './more.css';
import 'xterm/css/xterm.css';
import chalk from 'chalk';

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
                    <XTerm/>
                </div>
            </div>
            <div className="grad-line"></div>
        </React.Fragment>
     );
}

class XTerm extends Component {
    state = {  }

    constructor() {
        super();
        this.termRef = React.createRef();
    }

    render() { 
        return ( 
            <div ref={this.termRef} id='xterm-container' className="" >
            </div>
         );
    }

    componentDidMount(){
        this.setup();
        window.addEventListener('resize', this.handleResize);
    }


    setup = () => {

        this.chalk = new chalk.Instance({enabled: true, level: 2});

        this.theme = {
            background: variables.darkprimary, 
            foreground: variables.lightprimary,
            cursor: variables.colorfulsecondary,
        }

        this.term = new Terminal({
            cursorBlink: true,
            theme: this.theme,
            fontSize: 16,
            rows: 30,
            cursorStyle: 'bar',
            fontWeight: 'bold'
        });
        this.fitAddon = new FitAddon(); 
        this.term.open(document.getElementById('xterm-container'));
        this.term.loadAddon(this.fitAddon);
        this.fitAddon.fit();
        this.cols = this.term.cols - 5;
        this.fitAddon.proposeDimensions({cols: this.cols});
        this.term.onData(this.dataInput);
        this.reset();
        this.prompt();
    }

    handleResize = (event) => {
        this.fitAddon.fit();
    }

    handleChar = (key) => {
        const current = this.currentBufferIndex();
        this.buffer.splice(this.currentBufferIndex(), 0, key);
        this.writeChar(key);
        this.writeBuffer();
        this.moveToBufferIndex(current + 1);
    }

    writeBuffer = () => {
        while(this.currentBufferIndex() < this.buffer.length){
            this.writeChar(this.buffer[this.currentBufferIndex()]);
        }
    }

    clearBuffer = () => {
        while(this.buffer.length !== 0){
            this.handleDelete();
            this.handleBackspace();
        }
    }

    writeChar = (key) => {
        this.term.write(key);
        this.posx++;
        if(this.posx >= this.cols){
            this.term.write('\r\n    ');
            this.posx = 0;
            this.posy++;
        }
    }

    handleDelete = () => {
        if(this.buffer.length > 0){
            const current = this.currentBufferIndex();
            this.buffer.splice(current, 1);
            this.buffer.push(' ');
            this.writeBuffer();
            this.buffer.pop();
            this.moveToBufferIndex(current);
        }
    }

    handleBackspace = () => {
        this.handleArrowLeft();
        this.handleDelete();
    }

    handleEnter = () => {
        this.saveCommand(this.buffer.join(''));
        this.prompt();
    }

    getCommands = () => {
        return JSON.parse(localStorage.getItem('commands')) || [];
    }

    saveCommand = (command) => {
        if(this.commandsHistory[this.commandsHistory.length - 2] !== command){
            if(this.commandsHistory[this.commandsHistory.length - 1] === ""){
                this.commandsHistory[this.commandsHistory.length - 1] = command
            }else{
                this.commandsHistory.push(command);
            }
            localStorage.setItem('commands', JSON.stringify(this.commandsHistory));
        }
    }

    handleArrowLeft = () => {
        if(this.posx > 0){
            this.term.write('\x1b[D');
            this.posx--;
        }else if(this.posy > 0){
            this.term.write('\x1b[A');
            this.posy--;
            for(var i=0; i<this.cols-1; i++){
                this.handleArrowRight()
            }
        }
    }

    handleArrowRight = () => {
        if(this.buffer.length > this.posx + this.posy*this.cols){
            if(this.posx < this.cols - 1){
                this.writeChar('\x1b[C');
            }else{
                this.term.write('\x1b[B');
                this.posy++;
                for(var i=this.posx; i>0; i--){
                    this.handleArrowLeft();
                }
            }
        }
    }

    handleArrowUp = () => {
        this.writeCommandHistory(false);
    }

    writeCommandHistory = (increment) => {
        if((this.commandsHistoryIndex < this.commandsHistory.length -1 && increment) || (this.commandsHistoryIndex > 0 && !increment)){
            this.commandsHistoryIndex = this.commandsHistoryIndex + (increment ? +1 : -1);
        }
        this.clearBuffer();
        this.buffer = this.commandsHistory[this.commandsHistoryIndex].split('');
        this.writeBuffer();
    }

    handleArrowDown = () => {
        this.writeCommandHistory(true);
    }

    dataInput = (data) => {

        const key = data.split('').reduce((x, y) => x + 'key' + y.charCodeAt(0), '') 

        console.log(key);

        const keyMap = {
            key127: this.handleBackspace,
            key13: this.handleEnter,
            key27key91key68: this.handleArrowLeft,
            key27key91key67: this.handleArrowRight,
            key27key91key51key126: this.handleDelete,
            key27key91key65: this.handleArrowUp,
            key27key91key66: this.handleArrowDown
        }
        
        if (keyMap[key]){
            keyMap[key](data);
        }else if (data.length === 1 && data.charCodeAt(0) >= 32 && data.charCodeAt(0) <= 126){
            this.handleChar(data);
        }

        console.log(this.buffer);
        console.log(this.posx, this.posy);
    }
    
    moveToBufferIndex(i){        
        while(this.currentBufferIndex() !== i){
            const current = this.currentBufferIndex();
            if(current > i){
                this.handleArrowLeft();
            }else{
                this.handleArrowRight();
            }
        }
    }

    currentBufferIndex = () => {
        return this.posy * this.cols + this.posx  
    }

    reset = () => {
        this.buffer = [];
        this.posx = 0;
        this.posy = 0;
        this.commandsHistory = this.getCommands();
        this.commandsHistory.push("");
        this.commandsHistoryIndex = this.commandsHistory.length > 0 ? this.commandsHistory.length - 1: undefined;
        console.log('index: ', this.commandsHistoryIndex)
    }

    prompt = (comment=false) => {
        this.term.write('\r\n');
        if(comment){
        }
        else{
            this.term.write(this.chalk.hex(variables.colorfulsecondary)('  $ ',));
            this.reset();
        }
    }


}
 
 
export default More;