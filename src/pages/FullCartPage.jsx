import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';


const FullCartPage = () => {
    const { cartList, increaseQuantity, decrementQuantity, removeItem } = useContext(CartContext);
    const subTotal = cartList.reduce((sum, each) => (each.quantity * each.price * 81) + sum, 0);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartList.length === 0 ? (
                <div className='flex flex-col items-center gap-2'>
                    <img className='w-1/2' src="https://img.freepik.com/free-vector/supermarket-shopping-cart-concept-illustration_114360-22408.jpg?uid=R192273484&ga=GA1.1.1926255021.1738205336&semt=ais_hybrid&w=740" alt="" />
                    <p className='text-blue-400'>Your cart is empty.</p>
                    <Link to={"/products"}>
                        <button className='bg-red-600 mx-auto px-4 py-3 rounded text-white' type="button">Go to purchase</button>
                    </Link>
                </div>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cartList.map(item => (
                            <li key={item.id} className="flex justify-between items-center border p-4">
                                <div className='flex flex-col md:flex-row'>
                                    <img className='w-1/4 md:w-1/3' src={item.thumbnail} alt="" srcset="" />
                                    <div>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p>Quantity: <b>{item.quantity}</b></p>
                                        <p>Price:<b> Rs {Math.round(item.price * 81 * item.quantity)}/-</b></p>
                                    </div>
                                </div>
                                <div className="space-x-2">
                                    <button onClick={() => decrementQuantity(item.id)} className="px-2 py-1 bg-blue-400 text-white rounded" disabled={item.quantity <= 1}>-</button>
                                    <button onClick={() => increaseQuantity(item.id)} className="px-2 py-1 bg-yellow-400 text-white rounded" >+</button>
                                    <button onClick={() => removeItem(item.id)} className="px-2 py-1 bg-red-500 text-white rounded">Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6">
                        <h3 className="text-xl">Subtotal: Rs {Math.round(subTotal)}/-</h3>
                        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded" disabled>
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default FullCartPage;