import { Link, useParams, useNavigate } from 'react-router-dom';

function DetailBlog() {
    // navigate = useHistory
    const navigate = useNavigate();

    // get value param url
    const { id } = useParams();

    const handleBack = () => {
        navigate('/blog');
    };
    return (
        <>
            <div>Detail Blog id: {id}</div>
            <span onClick={() => handleBack()}>&lt;-- Back</span>
        </>
    );
}

export default DetailBlog;
