function Todo(props) {
    // parent -> child
    // top -> bottom
    const { todos, title, deleteTodo } = props;

    const handleDelete = (id) => {
        deleteTodo(id);
    };

    return (
        <div className="todo-container">
            <div className="title">{title}</div>
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
        </div>
    );
}

export default Todo;
