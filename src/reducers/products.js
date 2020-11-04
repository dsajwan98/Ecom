import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

const products = (state=[], action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      let { products } = action;
      products.byId = {};
      products.forEach(({id, inventory, price, title}) => products.byId[id] = { inventory, price, title });
      return products;
    case ADD_TO_CART:
      const {productId} = action;
      let newState = state.map(s => {
        if(s.id === productId)
          s.inventory -=1;
        return s;
      });
      newState.byId = {};
      newState.forEach(({id, inventory, price, title}) => newState.byId[id] = { inventory, price, title });
      return newState;
    default:
      return state;
  }
}

export const getVisibleProducts = (state=[], action) => {
  return [...state];
}

export const getProduct = (state,id)=>{
  return state.find(s=> s.id===id);
}

export default products;
