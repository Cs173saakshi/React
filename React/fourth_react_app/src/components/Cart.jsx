import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../new_redux/action';

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const groupedItems = cartItems.reduce((dup, item) => {
    const existing = dup.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      dup.push({ ...item, quantity: 1 });
    }
    return dup;
  }, []);

  const totalAmount = cartItems.reduce((total, item) => total + Number(item.price || 0), 0);

  return (
    <div>
      <h2>Cart Page:</h2>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.length > 0 && (
        <>
          <ul>
            {groupedItems.map((item) => (
              <li key={item.id} >
                <span>
                  {item.name} : {item.price} x {item.quantity} Rupees
                </span>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </li>
            ))}
          </ul>

          <hr />

          <p><strong>Total Items:</strong> {cartItems.length}</p>
          <p><strong>Total Amount:</strong> {totalAmount.toLocaleString('en-IN')} Rupees</p>
        </>
      )}
    </div>
  );
}

export default Cart;
