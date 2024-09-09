import React, { useState, useEffect } from 'react';

function Billing() {
    const [products, setProducts] = useState([]);
    const [billItems, setBillItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const addItemToBill = (product, quantity) => {
        const itemTotal = product.price * quantity;
        setBillItems([...billItems, { ...product, quantity, itemTotal }]);
        setTotal(total + itemTotal);
    };

    return (
        <div>
            <h1>Supermarket Billing</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {billItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td>${item.itemTotal.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Total Amount: ${total.toFixed(2)}</h2>
        </div>
    );
}

export default Billing;
