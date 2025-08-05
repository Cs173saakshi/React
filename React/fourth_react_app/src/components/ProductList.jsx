import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../new_redux/action';

const products = [
  { id: 100, name: 'IPhone', price: 80000 },
  { id: 200, name: 'Samsung', price: 50000 },
  { id: 300, name: 'Oppo', price: 25000 },
  { id: 400, name: 'Redmi', price: 35000 }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products:</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: 10 }}>
          <span>{product.name} :: {product.price} Rupees</span>
          <button
            style={{ marginLeft: '10px' }}
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
