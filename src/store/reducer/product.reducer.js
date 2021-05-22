import { handleActions as createReducer } from 'redux-actions';
import { loadProducts, saveProducts } from '../actions/product.action';

const initialState = []

const handleSaveProducts = (state, actions) => {
    return actions.payload
}
export default createReducer({
    [saveProducts]:handleSaveProducts
},initialState)
