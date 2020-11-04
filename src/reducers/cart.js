import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE,
    CHECKOUT_SUCCESS
  } from '../constants/ActionTypes'
  
  const initialState = {
    addedIds: [],
    quantityById: {}
  }
  
  // Reducers for corresponding Actions
  const cart = (state= initialState, action)=>{
    switch(action.type){
      case ADD_TO_CART:
        let {quantityById, addedIds} =  state;
        let {productId} = action;
        quantityById = quantityById.hasOwnProperty(productId)? quantityById[productId] +=1: quantityById[productId] =1;
        addedIds = addedIds.includes(productId)? addedIds: addedIds.push(productId);
        return {...state};
      case CHECKOUT_REQUEST:
        return {
          addedIds: [],
          quantityById: {}
        };
      case CHECKOUT_FAILURE:
        return 'cart state';
      case CHECKOUT_SUCCESS:
        return {...state};
      default:
        return {...state};
    }
  }  

  export default cart