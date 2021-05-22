import { createAction } from 'redux-actions';

// 向服务器端发送请求 获取商品列表数据
export const loadProducts = createAction('loadProducts')
// 将服务器端返回的商品列表数据保存到本地store对象中
export const saveProducts = createAction('saveProducts')    
