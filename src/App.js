import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';

import { useState } from 'react';

function App() {
    // let name = 'Valne Cường'; // string

    // [variable, function] = useState()
    const [name, setName] = useState('Văn Cường');
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([
        { id: 'todo1', title: 'watching youtube' },
        { id: 'todo2', title: 'doing homework' },
        { id: 'todo3', title: 'play game' },
    ]);

    let number = 2023; //number

    const handleOnClick = () => {
        if (!input) {
            alert('Please enter input');
            return;
        }
        // hook not merge state
        let newTodo = { id: '', title: input };
        setTodos([...todos, newTodo]);
        // clear input
        setInput('');
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
                    <Todo todo={todos} />
                    <input type="text" value={input} onChange={(event) => handleOnChange(event)} />
                    <button onClick={() => handleOnClick()}> Click me!</button>
                </header>
            </div>
        </>
    );
}

export default App;
