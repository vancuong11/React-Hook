import { useState } from 'react';

function Todo() {
    // [variable, function] = useState()
    const [name, setName] = useState('Văn Cường');
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([
        { id: 'todo1', title: 'watching youtube', type: 'eric' },
        { id: 'todo2', title: 'doing homework', type: 'eric' },
        { id: 'todo3', title: 'play game', type: 'hoidanit' },
        { id: 'todo4', title: 'reading book', type: 'hoidanit' },
    ]);
    // parent -> child
    // top -> bottom
    // const { todos, title, deleteTodo } = props;

    // const handleDelete = (id) => {
    //     deleteTodo(id);
    // };

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

    return (
        <div className="todo-container">
            <div className="title">Todo List</div>
            {todos.map((item) => {
                return (
                    <div key={item.id}>
                        <li className="todo-child">
                            {item.title}
                            <span onClick={() => handleDelete(item.id)}> x</span>
                        </li>
                    </div>
                );
            })}
            <hr />
            <input type="text" value={input} onChange={(event) => handleOnChange(event)} />
            <button onClick={() => handleOnClick()}> Add</button>
        </div>
    );
}

export default Todo;
