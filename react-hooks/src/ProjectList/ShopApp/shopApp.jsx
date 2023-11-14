import React, { useEffect, useState } from 'react'
import '../style.css'
import './shopApp.css'

const ShopApp = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <div className="project-title mt">ShopApp</div>
            <section>
                    {
                        products.map((product) => (
                            <div key={product.id} className="card">
                                <p className="id">{product.id}</p>
                                <p className="name">{product.name}</p>
                                <p className="info">
                                    <span>${product.price}</span>
                                    <span className={product.in_stock ? "instock" : "unavailable"}> {product.in_stock ? "In Stock" : "Unavailable"} </span>
                                </p>
                            </div>
                        ))
                    }
                </section>
        </>
    );

}

export default ShopApp;