import React, {Component} from "react";

export const context = React.createContext();

class Provider extends Component {

    constructor() {
        super();
        const darkLocalStorage = localStorage.getItem('dark');
        this.state = {
            dark: darkLocalStorage ? JSON.parse(darkLocalStorage) : false
        }
    }

    handleModeChange = (event) => {
        localStorage.setItem('dark', event.target.checked);
        this.setState({dark: event.target.checked})
    }

    render() {
        return (
            <context.Provider value={{
                state: this.state,
                handleModeChange: this.handleModeChange
            }}>
                {this.props.children}
            </context.Provider>
        )
    }
}

export default Provider;