import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const ProductCard = ({ product, onAddToCart = "" }) => {

    const { addCart } = useContext(CartContext);

    return (
        <div className="border rounded p-4 shadow">
            <img src={product.thumbnail ? product.thumbnail : product.image} alt={product.title} className="w-60 h-48 object-cover" />
            <h3 className="text-lg font-semibold my-2">{product.title}</h3>
            <p className="mb-2">Rs {Math.round(product.price * 81)}/-</p>
            <button
                onClick={() => onAddToCart ? onAddToCart(product) : addCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;