import { handleActions as createReducer } from 'redux-actions';
import {
    addProductToLocalCart,
    saveCarts,
    deleteProductFormLocalCart
} from '../actions/cart.actions'

const initialState = []

//将商品添加到本地购物车数据中
const handleAddProductToLocalCart = (state, action) => {
    //1. 要添加的商品没有在购物车中 直接添加
    //2. 要添加的商品已经在购物车中 将商品数量加一
    
    //将所有的购物车数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state))
    //查找商品 如果找到 返回商品 如果没有找到 返回 undfined

    const product = newState.find(product => product.id === action.payload.id)

    if(product){
        product.count = product.count + 1
    }else{
        newState.push(action.payload)
    }
    return newState
}

//将服务器返回的购物车列表数据同步到本地购物车中
const handleSaveCarts =(state, action) =>{
    return action.payload
}
// 删除本地购物中的商品
const handleDeleteProductFormLocalCart =(state, action) =>{
    //将所有的购物车数据拷贝一份
    const newState = JSON.parse(JSON.stringify(state))
    newState.splice(action.payload, 1)
    return newState
}
export default createReducer({
    [addProductToLocalCart]: handleAddProductToLocalCart,
    [saveCarts]:handleSaveCarts,
    [deleteProductFormLocalCart]: handleDeleteProductFormLocalCart
}, initialState)