import { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.scss';
import { Link } from 'react-router-dom';

function Blog() {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);

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
    return (
        <div className="blog-container">
            {loading === false ? (
                blog &&
                blog.length > 0 &&
                blog.map((item) => {
                    return (
                        <div className="single-blog" key={item.id}>
                            <div className="title">Title: {item.title}</div>
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
    );
}

export default Blog;
