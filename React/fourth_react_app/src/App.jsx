/* import './App.css'
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
 */

// src/App.jsx
/* import './App.css';
import UserList from './api/UserList';
import SecondUserList from './api/SecondList';
import UserListAxios from './api/UserListAxios';
impprt
function App() {
  return (
    <div> */
{/*       <UserList /> */}
{/* <SecondUserList /> */}
{/* <UserListAxios />
    </div>
  );
}

export default App; */}
import './App.css';
import React from "react";
import Fetch from "./components/Fetch";
import FirstError from './error/FirstError';
import Second from './error/SecondError';
import ErrorBoundary from './error/ErrorBoundary';

function App(){
  return (
    <div>
      <h1>API fetching in React</h1>
    {/*   <Fetch /> */}
   {/*  <FirstError name="Saakshi" />
    <Second /> */}
    <ErrorBoundary >
      <FirstError />
      <Second />
    </ErrorBoundary>
 
    </div>
  );
};

export default App;


