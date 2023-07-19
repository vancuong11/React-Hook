import { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.scss';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddNewBlog from './AddNewBlog';

function Blog() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            let fetchData = async () => {
                let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                let data = res.data ? res.data : [];
                if (data && data.length > 0) {
                    let newData = data.slice(1, 10);
                    setBlog(newData);
                    setLoading(false);
                }
            };
            fetchData();
        }, 3000);
    }, []);

    const handleAddNew = (blogs) => {
        let data = blog;
        data.unshift(blogs);
        setBlog(data);
        setShow(false);
        console.log(blog);
    };

    const handleDelete = (id) => {
        let data = blog;
        data = data.filter((item) => item.id !== id);
        setBlog(data);
    };
    return (
        <>
            <Button variant="primary" className="my-3" onClick={handleShow}>
                + Add new Blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>
            </Modal>

            <div className="blog-container">
                {loading === false ? (
                    blog &&
                    blog.length > 0 &&
                    blog.map((item) => {
                        return (
                            <div className="single-blog" key={item.id}>
                                <div className="title">
                                    Title: {item.title}
                                    <span onClick={() => handleDelete(item.id)}> X</span>
                                </div>
                                <div className="content">{item.body}</div>
                                <button className="btn-detail">
                                    <Link to={`/blog/${item.id}`}>View Detail</Link>
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
}

export default Blog;
