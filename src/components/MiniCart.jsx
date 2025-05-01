
function MiniCart({ cartItems, onRemove, closeMiniCart }) {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * 81 * item.quantity), 0);

    return (
        <div className="absolute top-full right-0 w-80 bg-white shadow-lg rounded-lg z-50 p-4">
            <div className="flex justify-between">
                <h3 className="text-lg font-bold mb-4">Cart</h3>
                <button onClick={() => closeMiniCart()} className="text-red-500">close</button>
            </div>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <ul className="divide-gray-200">
                    {cartItems.map(item => (
                        <li key={item.id} className="py-2 flex justify-between items-center">
                            <div>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm text-gray-600">
                                    {item.quantity} × Rs {Math.round(item.price * 81)}
                                </p>
                            </div>
                            <button
                                onClick={() => onRemove(item.id)}
                                className="text-red-500 hover:text-red-700"
                            >
                                
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-4">
                <p className="font-bold">Subtotal: Rs {Math.round(subtotal)}</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default MiniCart;
