import { combineReducers } from 'redux'

import productReducer from './product.reducer';
import cartReducer from './cart.reducer'



//{product:[], modal:{isShow:false}}
export  default combineReducers({
    product: productReducer,
    carts: cartReducer
})