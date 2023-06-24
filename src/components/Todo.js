function Todo(props) {
    // parent -> child
    // top -> bottom
    const todos = props.todo;
    return (
        <div className="todo-container">
            {todos.map((item, index) => {
                return (
                    <li key={index} className="todo-child">
                        {item.title}
                    </li>
                );
            })}
        </div>
    );
}

export default Todo;
