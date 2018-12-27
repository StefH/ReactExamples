import * as React from 'react';
import './App.css';

import { Hello } from './Hello';
import logo from './logo.svg';

class App extends React.Component {

    public state = {
        text: 'something'
    }

    public handleClick = () => {
        // tslint:disable-next-line:no-console
        console.log('click !');
        this.setState({
            text: `new ! : ${Date.now()}`
        });
    };

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <button onClick={this.handleClick}>Button</button>
                <p>{this.state.text}</p>
                <Hello />
            </div>
        );
    }
}

export default App;
