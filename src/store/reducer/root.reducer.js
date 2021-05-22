import { combineReducers } from 'redux'

import productReducer from './product.reducer';



//{product:[], modal:{isShow:false}}
export  default combineReducers({
    product: productReducer,
})