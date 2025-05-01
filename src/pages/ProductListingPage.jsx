import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchProductData = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchProductData()
    }, []);

    if (loading) return <p className="p-10 text-center">Loading...</p>;
    if (error) {
        return (
            <div className='flex flex-col'>
                <p className="p-10 text-center text-red-500">Failed to load products.</p>
                <button onClick={() => {
                    setLoading(true);
                    fetchProductData();
                }} className='bg-red-500 text-white px-4 py-2 rounded w-40 mx-auto' type="button">Retry</button>
            </div>
        )
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductListingPage;