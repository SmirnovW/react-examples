import React from 'react';

import './App.css';

import {Icon} from './components/icon/icon';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Icon Component for you :)
                </p>
                <br/>
                <div className="knifeIcon">
                    <Icon name="knife"/>
                </div>
                <div className="pizzaIcon">
                    <Icon name="pizza"/>
                </div>
                <div className="sandwichIcon">
                    <Icon name="sandwich"/>
                </div>
            </header>
        </div>
    );
}

export default App;
