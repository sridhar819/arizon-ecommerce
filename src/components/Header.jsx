import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartContext from '../context/CartContext';


const Header = () => {
    const { cartList } = useContext(CartContext);
    const location = useLocation();

    console.log(location, "location")

    return (
        <header className="flex justify-between items-center sticky top-0 left-0 right-0 z-10 p-4 bg-gray-900 text-white">
            <Link to="/" className="text-2xl font-bold">Shop</Link>
            <nav className="space-x-4">
                <Link className={location.pathname === "/products" ? "text-yellow-500" : "text-white"} to="/products">Products</Link>
                <Link className={location.pathname === "/cart" ? "text-yellow-500" : "text-white"} to="/cart">Cart ({cartList.length})</Link>
            </nav>
        </header>
    );
};

export default Header;