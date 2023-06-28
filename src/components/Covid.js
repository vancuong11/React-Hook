import { useState, useEffect } from 'react';
import axios from 'axios';

function Covid() {
    const [products, setProdocts] = useState([]);
    const [loading, setLoading] = useState(true);
    // componentDidMount
    // get API React 18
    // format date =moment
    useEffect(() => {
        setTimeout(() => {
            let fetchData = async () => {
                let res = await axios.get('https://dummyjson.com/products');
                let data = res.data && res.data.products ? res.data.products : [];
                setProdocts(data);
                setLoading(false);
            };
            fetchData();
        }, 3000);
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {loading === false ? (
                    products &&
                    products.length > 0 &&
                    products.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td colSpan="3" style={{ textAlign: 'center' }}>
                            Loading...
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Covid;
