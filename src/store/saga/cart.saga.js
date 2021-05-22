import axios from 'axios';
import {put, takeEvery} from 'redux-saga/effects';
import {
    addProductToCart,
    addProductToLocalCart,
    loadCarts,
    saveCarts,
    deleteProductFormCart,
    deleteProductFormLocalCart,
    changeServiceProductNumber,
    changeLocalProductNumber
} from '../actions/cart.actions';

function* handleLoadCarts(action) {
    const {data} = yield axios.get('http://localhost:3005/cart')
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
// 7.向服务器发送请求 告诉服务器将那个商品数量更改
function* handleChangeServiceProductNumber(action){
    const {data} = yield axios.put('http://localhost:3005/cart',{
        cid:action.payload.cid,
        count: Number(action.payload.count)
    })
    yield put(changeLocalProductNumber(data))
}
export default function* cartSaga() {
    yield takeEvery(addProductToCart, handleAddProductToCart)
    yield takeEvery(loadCarts, handleLoadCarts)
    yield takeEvery(deleteProductFormCart, handleDeleteProductFormCart)
    // 1.向服务器发送请求 告诉服务器将那个商品数量更改
    yield takeEvery(changeServiceProductNumber, handleChangeServiceProductNumber)
}
