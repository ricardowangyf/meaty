import requests from './request'

export const reqCategoryList = () => requests({ url: 'http://localhost:3721/api/user/', method: 'GET' }) //列表

export const meatydetali = () => requests({ url: 'http://localhost:3721/api/user/list', method: 'GET' }) //详情

export const details = (params) => requests({ url: 'http://localhost:3721/api/user/list/details', method: 'POST', data:{...params}}) 