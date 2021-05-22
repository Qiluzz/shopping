import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {
    addProductToCart,
    addProductToLocalCart,
    loadCarts,
    saveCarts,
    deleteProductFormCart,
    deleteProductFormLocalCart
} from '../actions/cart.actions';

function* handleLoadCarts(action) {
    const {data} = yield axios.get('http://localhost:3005/cart')
    console.log(data,'0000000')
    yield put(saveCarts(data))

}
function* handleAddProductToCart(action) {
    const {data} = yield axios.post('http://localhost:3005/cart/add',{gid:action.payload})
    yield put(addProductToLocalCart(data))
}

function* handleDeleteProductFormCart(action) {
    const {data} = yield axios.delete('http://localhost:3005/cart/delete',{
        params:{
            cid: action.payload
        }
    })

    yield put(deleteProductFormLocalCart(data.index))
}
export default function* cartSaga() {
    yield takeEvery(addProductToCart, handleAddProductToCart)
    yield takeEvery(loadCarts, handleLoadCarts)
    yield takeEvery(deleteProductFormCart, handleDeleteProductFormCart)
}
