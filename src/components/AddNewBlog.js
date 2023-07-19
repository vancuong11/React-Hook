import { useState } from 'react';
import './Blog.scss';
import axios from 'axios';

function AddNewBlog(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitAction = async () => {
        if (!title) {
            alert('empty title');
            return;
        }
        if (!content) {
            alert('empty content');
            return;
        }
        let data = {
            title: title,
            body: content,
            userId: 1,
        };
        let res = await axios.post(`https://jsonplaceholder.typicode.com/posts`, data);
        if (res && res.data) {
            let newBlog = res.data;
            props.handleAddNew(newBlog);
        }
    };
    return (
        <div className="add-new-container">
            <div className="text-add-new">---Add new blogs ---</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input className="form-control" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input
                    className="form-control"
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={() => handleSubmitAction()}>
                Submit
            </button>
        </div>
    );
}

export default AddNewBlog;
