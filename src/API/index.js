import requests from './request'

export const reqCategoryList = () => requests({ url: 'http://localhost:3721/api/user/', method: 'GET' }) //中间路由

export const meatydetali = () => requests({ url: 'http://localhost:3721/api/user/list', method: 'GET' }) //中间路由