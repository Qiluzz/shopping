import { createAction } from 'redux-actions';

// 1. 向服务器发送请求 告诉服务器端我们将那一个商品添加到购物车中
export const addProductToCart = createAction('addProductToCart')

// 2. 将商品添加到本地购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 3.向服务器发送请求 获取获取购物车列表数据
export const loadCarts = createAction('loadCarts')

// 4.将服务器返回购物车列表数据同步到本地购物车中
export const saveCarts = createAction('saveCarts')

// 5.向服务器发送请求 告诉服务器要删除那个商品
export const deleteProductFormCart = createAction('deleteProductFormCart')

// 6.删除本地购物车商品
export const deleteProductFormLocalCart = createAction('deleteProductFormLocalCart')

// 7.向服务器发送请求 告诉服务器将那个商品数量更改
export const changeServiceProductNumber = createAction('changeServiceProductNumber')

//8. 更新本地购物车中商品数量
export const changeLocalProductNumber = createAction('changeLocalProductNumber')

