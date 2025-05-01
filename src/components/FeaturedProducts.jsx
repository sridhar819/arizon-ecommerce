import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function FeaturedProducts({ onAddToCart }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // console.log(products, "pro")

    const fetchFeaturedProducts = () => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            }

            )
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchFeaturedProducts();
    }, []);

    if (loading) return <p>Loading</p>;
    if (error) {
        return (
            <div>
                <button onClick={() => {
                    setLoading(true);
                    fetchFeaturedProducts();
                }} type='button'>retry</button>
            </div>
        )
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
