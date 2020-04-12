import React, {Component} from 'react';
import { Terminal } from 'xterm';
import {FitAddon} from 'xterm-addon-fit';
import variables from '../common/_variables.scss';
import './more.css';
import 'xterm/css/xterm.css';
import chalk from 'chalk';
// import {pty} from 'node-pty/build/Release/';
var os = require('os');

var pty = require('node-pty');

var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
 
var ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});
 

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
                {/* <div className="terminal container">
                    <XTerm/>
                </div> */}
                <br/>
                <div className="terminal container">
                    <Xterm2/>
                </div>
            </div>
            <div className="grad-line"></div>
        </React.Fragment>
     );
}

class Xterm2 extends Component {
    state = {  }

    padding = '   '


    constructor() {
        super();
        this.termRef = React.createRef();
    }

    componentDidMount(){
        this.setup();
        window.addEventListener('resize', () => {
            clearTimeout(this.timer);
            this.timer = setTimeout(this.handleResize, 200);
        });
        this.termRef.current.addEventListener('click', this.handleMouseClick)
    }

    render() { 
        return ( 
            <div ref={this.termRef} id='xterm-container' className="" >
            </div>
            );
    }

    setup = () => {
        this.buffer = [];
        this.chalk = new chalk.Instance({enabled: true, level: 2});
        this.constructTerminal();
        this.reset();
        this.prompt();
        this.cursorX = this.term.buffer.cursorX;
        this.cursorY = this.term.buffer.cursorY;
        // this.writeResponse('Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, esse? Debitis fugit facilis totam velit aliquam, placeat assumenda porro cum minima rem ratione eveniet neque nobis et nostrum! Consequuntur, cupiditate?')
    }

    constructTerminal = () => {
        this.term = new Terminal({
            cursorBlink: true,
            theme: {
                background: variables.darkprimary, 
                foreground: variables.lightprimary,
                cursor: variables.colorfulsecondary,
            },
            fontSize: 16,
            rows: 30,
            // cursorStyle: 'bar',
            fontWeight: 'bold'
        });
        this.term.open(document.getElementById('xterm-container'));
        this.fitAddon = new FitAddon(); 
        this.term.loadAddon(this.fitAddon);
        this.fitAddon.fit();
        this.cols = this.term.cols;// - 5;
        this.term.onData(this.handleData);    
    }

    handleData = (data) => {

        const keys = data.split('');
        
        if(keys.length > 1 && keys[0].charCodeAt(0) >= 32 && data.charCodeAt(0) <= 126){
            keys.forEach(key => this.handleData(key))
        }else{
            const key = keys.reduce((x, y) => x + 'key' + y.charCodeAt(0), '')     
            const keyMap = {
                key127: this.handleBackspace,
                // key13: this.handleEnter,
                key27key91key68: this.handleArrowLeft,
                key27key91key67: this.handleArrowRight,
                key27key91key51key126: this.handleDelete,
                // key27key91key65: this.handleArrowUp,
                // key27key91key66: this.handleArrowDown,
                key27key91key49key59key53key67: this.handleFastForward('arrowRight'),
                key27key91key49key59key53key68: this.handleFastForward('arrowLeft'),
                key27key127: this.handleFastForward('backspace'),
            }

           if (keyMap[key]){
                keyMap[key](data);
            }else if (data.length === 1 && data.charCodeAt(0) >= 32 && data.charCodeAt(0) <= 126){
                this.handleChar(data);
            }
            
            console.log(this.buffer);
            console.log(this.pos);
        }

    }

    handleArrowLeft = () => {
        this.moveLeft()
    }
    handleArrowRight = () => {
        this.moveRight()
    }

    handleDelete = () => {
        this.deleteChar(false);
        // this.updateCommandHistory()
    }

    handleBackspace = () => {
        this.deleteChar(true);
        // this.updateCommandHistory()
    }

    handleChar = (key) => {

        const current = this.currentBufferIndex();
        this.buffer.splice(this.currentBufferIndex(), 0, key);
        this.writeBuffer();
        this.moveToBufferIndex(current + 1);
        // this.updateCommandHistory();
    }

    handleFastForward = (key) => {
        if(key === 'arrowLeft' || key === 'arrowRight'){
            return () => {
                const index = this.getFastForwaredIndex(key === 'arrowLeft' ? true: false)
                if(index !== undefined){
                    this.moveToBufferIndex(index);
                }
            }
        }
        else if(key === 'backspace'){
            return () => {
                const index = this.getFastForwaredIndex(true)
                if(index !== undefined){
                    while(this.currentBufferIndex() !== index){
                        this.deleteChar(true);
                    }
                }
            }
        }
        return (key) => {
        }
    }

    getFastForwaredIndex = (backwards=false) => {
        let index = undefined;
        if(!backwards){
            for(let i=this.currentBufferIndex() + 1; i < this.buffer.length; i++){
                if(this.buffer[i] === ' ' || i === this.buffer.length - 1){
                    index = i + (i === this.buffer.length - 1 ? 1 : 0);
                    break;
                }
            }
        }else{
            for(let i=this.currentBufferIndex() - 2; i >= -1; i--){
                if(this.buffer[i] === ' ' || i <= 0){
                    index = i <= 0 ? 0 : i + 1;
                    break;
                }
            }
        }
        return index;
    }

    deleteChar = (backwards=false) => {
        if(this.buffer.length > 0){
            if(backwards){
                this.moveLeft();
                this.deleteChar(false);
            }else{
                const current = this.currentBufferIndex();
                this.buffer.splice(current, 1);
                this.buffer.push(' ');
                this.writeBuffer();
                this.buffer.pop();
                this.moveToBufferIndex(current);
            }
        }
    }

    writeBuffer = () => {
        while(this.currentBufferIndex() < this.buffer.length){
            this.writeChar(this.buffer[this.currentBufferIndex()]);
        }
    }

    moveToBufferIndex = (index) => {        
        for(let i = this.currentBufferIndex(); i !== index; ){
            console.log('inside loop');
            const current = this.currentBufferIndex();
            setTimeout(() => {
                console.log('inside timeout')
                if(current > index){
                    this.moveLeft();
                }else{
                    this.moveRight();
                }
            }, 1000)
            i = i + (i < index ? 1 : -1);
        }
    }

    updateCursorBuffer = () =>{
        this.cursorX = this.term.buffer.cursorX;
        this.cursorY = this.term.buffer.cursorY;
        this.waiting = false;
        console.log(`indexes: ${this.cursorX}, ${this,this.cursorY}`)
        // console.log(`cursorX ${this.getCursorBuffer()[0]} cursorY ${this.getCursorBuffer()[1]}`)
    }

    getCursorBuffer = () => {
        // while(this.waiting){}
        return [this.cursorX, this.cursorY]
    }

    test = (callback) => {
        console.log('inside test');
        callback();
    }

    cb = () => {
        console.log('inside cb')
    }

    moveLeft = () => {
        if(this.currentBufferIndex() > 0){
            console.log('inside left ')
            if(this.getCursorBuffer()[0] > 0){
                this.termWrite('\x1b[D')
            }else{
                this.termWrite(`\x1b[${this.getCursorBuffer()[1]};${this.cols}f`)
            }
            this.test(this.cb);
            this.pos--;
        }
    }

    termWrite = (data) => {
        // this.waiting = true;
        this.term.write(data, this.updateCursorBuffer)
    }
    
    moveRight = () => {
        if(this.currentBufferIndex() < this.buffer.length){
            if(this.getCursorBuffer()[0] < this.cols - 1){
                this.termWrite('\x1b[C');
            }else{
                this.termWrite(`\x1b[${this.getCursorBuffer()[1] + 2};${0}f`)
            }
            this.pos++;
        }

        return
    }
    
    writeChar = (key) => {
        this.termWrite(key);
        this.pos++;
    }
    
    getCommands = () => {
        return JSON.parse(localStorage.getItem('commands')) || [];
    }

    currentBufferIndex = () => {
        return this.pos
    }

    reset = () => {
        this.buffer = [];
        this.pos = 0;
        this.commandsHistory = this.getCommands();
        this.commandsHistory.push("");
        this.commandsHistoryIndex = this.commandsHistory.length - 1;
    }

    prompt = () => {
        this.term.writeln('', this.updateCursorBuffer);
        this.termWrite(this.chalk.hex(variables.colorfulsecondary)(this.padding.substr(0, this.padding.length - 2) + '$ '), this.updateCursorBuffer);
        this.reset();
    }
}
 

// class XTerm extends Component {
//     state = {  }

//     constructor() {
//         super();
//         this.termRef = React.createRef();
//     }

//     render() { 
//         return ( 
//             <div ref={this.termRef} id='xterm-container' className="" >
//             </div>
//          );
//     }

//     componentDidMount(){
//         this.setup();
//         window.addEventListener('resize', () => {
//             clearTimeout(this.timer);
//             this.timer = setTimeout(this.handleResize, 200);
//         });
//         this.termRef.current.addEventListener('click', this.handleMouseClick)
//     }

//     padding = '   '

//     constructTerminal = () => {
//         this.term = new Terminal({
//             cursorBlink: true,
//             theme: {
//                 background: variables.darkprimary, 
//                 foreground: variables.lightprimary,
//                 cursor: variables.colorfulsecondary,
//             },
//             fontSize: 16,
//             rows: 30,
//             cursorStyle: 'bar',
//             fontWeight: 'bold'
//         });
//         this.fitAddon = new FitAddon(); 
//         this.term.open(document.getElementById('xterm-container'));
//         this.term.loadAddon(this.fitAddon);
//         this.fitAddon.fit();
//         this.cols = this.term.cols - 5;
//         this.term.onData(this.handleData);    
//     }

//     setup = () => {
//         this.buffer = [];
//         this.chalk = new chalk.Instance({enabled: true, level: 2});
//         this.constructTerminal();
//         this.reset();
//         this.prompt();
//         // this.writeResponse('Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, esse? Debitis fugit facilis totam velit aliquam, placeat assumenda porro cum minima rem ratione eveniet neque nobis et nostrum! Consequuntur, cupiditate?')
//     }

//     handleData = (data) => {

//         const keys = data.split('');
        
//         if(keys.length > 1 && keys[0].charCodeAt(0) >= 32 && data.charCodeAt(0) <= 126){
//             keys.forEach(key => this.handleData(key))
//         }else{
//             const key = keys.reduce((x, y) => x + 'key' + y.charCodeAt(0), '')     
//             const keyMap = {
//                 key127: this.handleBackspace,
//                 key13: this.handleEnter,
//                 key27key91key68: this.handleArrowLeft,
//                 key27key91key67: this.handleArrowRight,
//                 key27key91key51key126: this.handleDelete,
//                 key27key91key65: this.handleArrowUp,
//                 key27key91key66: this.handleArrowDown,
//                 key27key91key49key59key53key67: this.handleFastForward('arrowRight'),
//                 key27key91key49key59key53key68: this.handleFastForward('arrowLeft'),
//                 key27key127: this.handleFastForward('backspace'),
//             }

//             if (keyMap[key]){
//                 keyMap[key](data);
//             }else if (data.length === 1 && data.charCodeAt(0) >= 32 && data.charCodeAt(0) <= 126){
//                 this.handleChar(data);
//             }
//             console.log(this.buffer);
//             console.log(this.posx, this.posy);
//         }

//     }

//     handleEnter = () => {
//         const command = this.buffer.join('');
//         this.saveCommand(command);
//         this.handleCommand(command);
//         this.prompt();
//     }

//     handleArrowUp = () => {
//         this.writeCommandHistory(false);
//     }

//     handleMouseClick = () => {
//         this.moveToBufferIndex(this.buffer.length);
//     }

//     handleResize = (event) => {
//         const buffer = [...this.buffer];
//         this.term.dispose();
//         this.fitAddon.dispose();
//         this.setup();
//         this.buffer = buffer;
//         this.writeBuffer();
//     }

//     handleChar = (key) => {
//         const current = this.currentBufferIndex();
//         this.buffer.splice(this.currentBufferIndex(), 0, key);
//         this.writeChar(key);
//         this.writeBuffer();
//         this.moveToBufferIndex(current + 1);
//         this.updateCommandHistory();
//     }

//     handleDelete = () => {
//         this.deleteChar(false);
//         this.updateCommandHistory()
//     }

//     deleteChar = (backwards=false) => {
//         if(this.buffer.length > 0){
//             if(backwards){
//                 this.moveLeft();
//                 this.deleteChar(false);
//             }else{
//                 const current = this.currentBufferIndex();
//                 this.buffer.splice(current, 1);
//                 this.buffer.push(' ');
//                 this.writeBuffer();
//                 this.buffer.pop();
//                 this.moveToBufferIndex(current);
//             }
//         }
//     }
    
//     handleBackspace = () => {
//         this.deleteChar(true);
//         this.updateCommandHistory()
//     }

//     handleFastForward = (key) => {
//         if(key === 'arrowLeft' || key === 'arrowRight'){
//             return () => {
//                 const index = this.getFastForwaredIndex(key === 'arrowLeft' ? true: false)
//                 if(index !== undefined){
//                     this.moveToBufferIndex(index);
//                 }
//             }
//         }
//         else if(key === 'backspace'){
//             return () => {
//                 const index = this.getFastForwaredIndex(true)
//                 if(index !== undefined){
//                     while(this.currentBufferIndex() !== index){
//                         this.deleteChar(true);
//                     }
//                 }
//             }
//         }
//         return (key) => {
//         }
//     }

//     handleArrowDown = () => {
//         this.writeCommandHistory(true);
//     }

//     handleArrowRight = () => {
//         this.moveRight();
//     }

//     handleArrowLeft = () => {
//         this.moveLeft();
//     }

//     handleCommand = (command) => {

//     }

//     clearBuffer = () => {
//         while(this.buffer.length !== 0){
//             this.deleteChar(false);
//             this.deleteChar(true);
//         }
//     }

//     writeResponse = (response) => {
//         this.reset();
//         this.writeNewLine();
//         response.split('').forEach(char => this.writeChar(char));
//         this.writeNewLine();
//         this.prompt();
//     }

//     writeBuffer = () => {
//         while(this.currentBufferIndex() < this.buffer.length){
//             this.writeChar(this.buffer[this.currentBufferIndex()]);
//         }
//     }

//     writeChar = (key) => {
//         this.term.write(key);
//         this.posx++;
//         if(this.posx >= this.cols){
//             this.writeNewLine();
//             this.posx = 0;
//             this.posy++;
//         }
//     }

//     updateCommandHistory = () => {
//         this.commandsHistory[this.commandsHistory.length - 1] = this.buffer.join('');
//     }

//     getCommands = () => {
//         return JSON.parse(localStorage.getItem('commands')) || [];
//     }

//     saveCommand = (command) => {
//         this.commandsHistory.pop();
//         if(command.trim() !== "" && command !== this.commandsHistory[this.commandsHistory.length - 1]){
//             this.commandsHistory.push(command);
//             localStorage.setItem('commands', JSON.stringify(this.commandsHistory));
//         }
//     }

//     moveLeft = () => {
//         if(this.posx > 0){
//             this.term.write('\x1b[D');
//             this.posx--;
//         }else if(this.posy > 0){
//             this.term.write('\x1b[A');
//             this.posy--;
//             for(var i=0; i<this.cols-1; i++){
//                 this.moveRight()
//             }
//         }
//     }

//     moveRight = () => {
//         if(this.buffer.length > this.posx + this.posy*this.cols){
//             if(this.posx < this.cols - 1){
//                 this.writeChar('\x1b[C');
//             }else{
//                 this.term.write('\x1b[B');
//                 this.posy++;
//                 for(var i=this.posx; i>0; i--){
//                     this.moveLeft();
//                 }
//             }
//         }
//     }

//     getFastForwaredIndex = (backwards=false) => {
//         let index = undefined;
//         if(!backwards){
//             for(let i=this.currentBufferIndex() + 1; i < this.buffer.length; i++){
//                 if(this.buffer[i] === ' ' || i === this.buffer.length - 1){
//                     index = i + (i === this.buffer.length - 1 ? 1 : 0);
//                     break;
//                 }
//             }
//         }else{
//             for(let i=this.currentBufferIndex() - 2; i >= -1; i--){
//                 if(this.buffer[i] === ' ' || i <= 0){
//                     index = i <= 0 ? 0 : i + 1;
//                     break;
//                 }
//             }
//         }
//         return index;
//     }

//     writeCommandHistory = (increment) => {
//         if((this.commandsHistoryIndex < this.commandsHistory.length -1 && increment) || (this.commandsHistoryIndex > 0 && !increment)){
//             this.commandsHistoryIndex = this.commandsHistoryIndex + (increment ? +1 : -1);
//         }
//         this.clearBuffer();
//         this.buffer = this.commandsHistory[this.commandsHistoryIndex].split('');
//         this.writeBuffer();
//     }

//     writeNewLine = () => {
//         this.term.writeln('');
//         this.term.write(this.padding);
//     }

//     moveToBufferIndex(i){        
//         while(this.currentBufferIndex() !== i){
//             const current = this.currentBufferIndex();
//             if(current > i){
//                 this.moveLeft();
//             }else{
//                 this.moveRight();
//             }
//         }
//     }

//     currentBufferIndex = () => {
//         return this.posy * this.cols + this.posx  
//     }

//     reset = () => {
//         this.buffer = [];
//         this.posx = 0;
//         this.posy = 0;
//         this.commandsHistory = this.getCommands();
//         this.commandsHistory.push("");
//         this.commandsHistoryIndex = this.commandsHistory.length - 1;
//     }

//     prompt = () => {
//         this.term.writeln('');
//         this.term.write(this.chalk.hex(variables.colorfulsecondary)(this.padding.substr(0, this.padding.length - 2) + '$ '));
//         this.reset();
//     }
// }
 
 
export default More;