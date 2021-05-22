import { createAction } from 'redux-actions';

// 1. 向服务器发送请求 告诉服务器端我们将那一个商品添加到购物车中
export const addProductToCart = createAction('addProductToCart')

// 2. 将商品添加到本地购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart')

// 3.向服务器发送请求 获取获取购物车列表数据
export const loadCarts = createAction('loadCarts')

// 4.将服务器返回购物车列表数据同步到本地购物车中
export const saveCarts = createAction('saveCarts')
