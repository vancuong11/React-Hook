function Todo(props) {
    // parent -> child
    // top -> bottom
    const todos = props.todo;
    return (
        <div className="todo-container">
            <div className="title">{props.title}</div>
            {todos.map((item, index) => {
                return (
                    <li key={index} className="todo-child">
                        {item.title}
                    </li>
                );
            })}
            <hr />
        </div>
    );
}

export default Todo;
