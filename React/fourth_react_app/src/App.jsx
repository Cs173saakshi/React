// App.jsx

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux - State Managment</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
