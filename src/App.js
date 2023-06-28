import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Todo from './components/Todo';

import { useState, useEffect } from 'react';
import Covid from './components/Covid';

function App() {
    // let name = 'Valne Cường'; // string

    // [variable, function] = useState()
    const [name, setName] = useState('Văn Cường');
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([
        { id: 'todo1', title: 'watching youtube', type: 'eric' },
        { id: 'todo2', title: 'doing homework', type: 'eric' },
        { id: 'todo3', title: 'play game', type: 'hoidanit' },
        { id: 'todo4', title: 'reading book', type: 'hoidanit' },
    ]);

    // useEffect(function) => call when render
    // useEffect(function, []) => componentDidMount()
    // useEffect(function, [state]) => componentDidUpdate()

    useEffect(() => {
        console.log('run useEffect');
    }, [input]);

    let number = 2023; //number

    const handleOnClick = () => {
        if (!input) {
            alert('Please enter input');
            return;
        }
        // random id
        let id = Math.floor(Math.random() * 1000 + 1);
        // hook not merge state
        let newTodo = { id: id, title: input, type: 'eric' };
        setTodos([...todos, newTodo]);
        // clear input
        setInput('');
    };

    const handleOnChange = (event) => {
        setInput(event.target.value);
    };

    const handleDelete = (id) => {
        let currentTodo = todos;
        currentTodo = currentTodo.filter((item) => item.id !== id);
        setTodos(currentTodo);
    };

    // re-render
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>
                        Hello World with React {name} {number}!
                    </h1>

                    <Covid />

                    {/* <Todo todos={todos} title={'All Todo'} deleteTodo={handleDelete} />

                    {/* <Todo todo={todos.filter((item) => item.type === 'eric')} title={`Eric todo`} /> */}

                    {/*<input type="text" value={input} onChange={(event) => handleOnChange(event)} />
                    <button onClick={() => handleOnClick()}> Click me!</button> */}
                </header>
            </div>
        </>
    );
}

export default App;
