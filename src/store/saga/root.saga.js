import { all } from 'redux-saga/effects'
import productSaga from './product.saga'
import cartSaga from './cart.saga'
// import modalSaga from './modal.saga'

export default function* rootSaga(){
    yield all([
        productSaga(),
        cartSaga()
    ])
}