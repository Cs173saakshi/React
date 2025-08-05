import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import store from './new_redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux - State Management</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
