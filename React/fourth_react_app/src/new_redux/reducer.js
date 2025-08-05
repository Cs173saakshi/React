import { ADD_TO_CART, REMOVE_FROM_CART } from './action';

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVE_FROM_CART:
      const index = state.cart.findIndex(item => item.id === action.payload);
      if (index < 0) return state; 

      return {
        ...state,
        cart: [
          ...state.cart.slice(0, index),
          ...state.cart.slice(index + 1),
        ],
      };

    default:
      return state;
  }
};

export default cartReducer;
