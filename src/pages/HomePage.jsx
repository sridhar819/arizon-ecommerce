import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';
import { useState } from 'react';
import MiniCart from '../components/MiniCart';

function HomePage() {
    const [cartItems, setCartItems] = useState([]);


    const [showCart, setShowCart] = useState(false);

    // console.log(showCart, "showCart");


    const handleAddToCart = product => {
        setCartItems(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const handleRemoveFromCart = id => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const closeMiniCart = () => {
        setShowCart(false)
    };

    return (
        <div className="relative">
            <HeroSection />
            <header className="flex justify-between items-center px-6 bg-white shadow relative">
                <button onClick={() => setShowCart(!showCart)} className="absolute text-xl top-0 right-10">
                    🛒
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                            {cartItems.length}
                        </span>
                    )}
                </button>
                {showCart && (
                    <MiniCart cartItems={cartItems} onRemove={handleRemoveFromCart} closeMiniCart={closeMiniCart} />
                )}
            </header>
            <FeaturedProducts onAddToCart={handleAddToCart} />
            <Footer />
        </div>
    );
}

export default HomePage;
