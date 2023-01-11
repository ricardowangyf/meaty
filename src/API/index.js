import requests from './request'

export const reqCategoryList = () => requests({ url: '/api/user/', method: 'GET' }) //中间路由

export const meatydetali = () => requests({ url: '/api/user/list', method: 'GET' }) //中间路由