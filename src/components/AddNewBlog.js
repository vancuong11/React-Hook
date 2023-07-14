import { useState } from 'react';
import './Blog.scss';

function AddNewBlog() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitAction = () => {
        if (!title) {
            alert('empty title');
            return;
        }
        if (!content) {
            alert('empty content');
            return;
        }
        console.log(title, content);
    };
    return (
        <div className="add-new-container">
            <div className="text-add-new">---Add new blogs ---</div>
            <div className="inputs-data">
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="inputs-data">
                <label>Content: </label>
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button className="btn-add-new" onClick={() => handleSubmitAction()}>
                Submit
            </button>
        </div>
    );
}

export default AddNewBlog;
