import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

import { useState } from 'react';

function App() {
    // let name = 'Valne Cường'; // string

    // [variable, function] = useState()
    let [name, setName] = useState('Văn Cường');
    const [input, setInput] = useState('');

    let number = 2023; //number

    const handleOnClick = () => {
        setName(input);
    };

    const handleOnChange = (event) => {
        setInput(event.target.value);
    };
    // re-render
    return (
        <>
            <div className="App">
                <Nav />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        Hello World with React {name} {number}!
                    </h1>
                    <input type="text" value={input} onChange={(event) => handleOnChange(event)} />
                    <button onClick={() => handleOnClick()}> Click me!</button>
                </header>
            </div>
        </>
    );
}

export default App;
