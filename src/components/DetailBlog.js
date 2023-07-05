import { Link, useParams } from 'react-router-dom';

function DetailBlog() {
    // get value param url
    const { id } = useParams();

    return (
        <>
            <div>Detail Blog id: {id}</div>
            <Link to="/blog">Back to blog</Link>
        </>
    );
}

export default DetailBlog;
