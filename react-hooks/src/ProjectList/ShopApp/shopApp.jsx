import React, { useState } from 'react'
import '../style.css'
import './shopApp.css'
import useFetch from '../../hooks/useFetch'

const ShopApp = () => {

    const [url, setUrl] = useState("http://localhost:3000/products")
    const {data: products} = useFetch(url);

    return (
        <>
            <div className="project-title mt">ShopApp</div>
            <section>
                <div className="filter">
                    <button onClick={() => setUrl("http://localhost:3000/products")} className="all">All</button>
                    <button onClick={() => setUrl("http://localhost:3000/products?in_stock=true")} className="onlyStock">In Stock</button>
                </div>
                    {
                        products && products.map((product) => (
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