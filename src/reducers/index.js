import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

export const getCartProducts = ({cart: {quantityById, addedIds}, products: {byId }}) => {
  let cartProducts =  [];
  for(let key in byId) {
    var contains = addedIds.some(elem => elem === +key);
    if(contains){
      byId[key].title && cartProducts.push({id: +key, price: byId[key].price, quantity: quantityById[key], title: byId[key].title});
      !byId[key].title && cartProducts.push({id: 1, price: byId[key].price, quantity: quantityById[key]});
    }
  }
  return cartProducts;
};

export const getTotal = state => getCartProducts(state).reduce((total, {quantity, price}) => total+= quantity * price, 0).toString();
 // Reducers for corresponding Actions