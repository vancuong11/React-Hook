import { useState, useEffect } from 'react';
import axios from 'axios';

function Covid() {
    const [products, setProdocts] = useState([]);

    // componentDidMount
    // get API React 18
    // format date =moment
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get('https://dummyjson.com/products');
            let data = res.data && res.data.products ? res.data.products : [];
            setProdocts(data);
        };
        fetchData();
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
                {products &&
                    products.length > 0 &&
                    products.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
}

export default Covid;
