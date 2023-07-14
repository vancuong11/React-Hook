import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Blog.scss';

function DetailBlog() {
    const [detail, setDetail] = useState([]);

    // navigate = useHistory
    const navigate = useNavigate();

    // get value param url
    const { id } = useParams();

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            let data = res.data;
            setDetail(data);
        };
        fetchData();
    }, []);

    const handleBack = () => {
        navigate('/blog');
    };
    return (
        <>
            <span onClick={() => handleBack()}>&lt;-- Back</span>
            <div className="blog-detail">
                {detail && (
                    <>
                        <div className="title">
                            Blog Id: {id} -- {detail.title}
                        </div>
                        <div className="content">{detail.body}</div>
                    </>
                )}
            </div>
        </>
    );
}

export default DetailBlog;
