import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    const handleBackHome = () => {
        navigate('/');
    };
    return (
        <>
            <h4>This Page Isn't Available</h4>
            <h5>
                This error is often caused by the owner sharing the content with a small group of people, changing who
                can see it, or deleting the content.
            </h5>
            <button className="btn btn-primary" onClick={() => handleBackHome()}>
                Go to Home
            </button>
        </>
    );
}

export default NotFound;
