const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
// const meatydetalis = require('./meatydetalis');
// const detalis = require('./detalis');
// console.log(detalis)
// const user = require('./data');
const proxy = {

    // ...user,
    // ...detalis,
    // ...meatydetalis,

    'GET /api/user/': [
        {
            "name": "多肉",
            "imgurl": "/img/cactus.jpg",
            "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等wefrggtgtwrhrtwhtwhth",
    
        },
        {
            "name": "仙人掌",
            "imgurl": "/img/Succulentplants.jpg",
            "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等hfuryjujgikol,ouljouljrerffggg",
        },
        {
            "name": "桃蛋",
            "imgurl": "/img/peachegg.jpg",
            "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等gffgfgqefgrwgwrwgwg",
        },
        {
            "name": "虹之玉锦",
            "Trash": "2022/12/01",
            "imgurl": "/img/rainbowjade brocade.jpg",
            "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等gggfgsthhyhyneynuyumujmkuukmukmku,uk,s",
        },
        {
            "name": "玉露",
            "Trash": "2022/12/01",
            "imgurl": "/img/bestgreentea.jpg",
            "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等ku,u,uiujyhthgtgrtwrtrtwtrwttgtrtgtg",
        },
        {
            "name": "达摩福娘",
            "imgurl": "/img/cotyledon pendens.jpg",
            "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等hyrjujujujujujujujikiy,iol,trgtrtwtrtwgwsdfgth",
        },
        {
            "name": "百合莉莉",
            "imgurl": "/img/lily.jpg",
            "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等fghhgergeorgjqergj[ioghj[iothj[§phkoyhjophijthkiothrwhth",
        },
        {
            "name": "静夜",
            "imgurl": "/img/silentnight.jpg",
            "paragraph": "用户主动点击分享绝大多数APP都是在详情页等需要分享的页面放置一个分享按钮,由用户自行选择分享。这种情况下用户是否分享主要是取决于产品内容本身,比如内容有趣或是有用。在一些APP中设计者会对这个分享按钮加一些鼓励的文案或着重的设计来促进用户分享所以监听用户的载图操作,提示用户进行分享,旺缩短了以前分享截图的操作路径,避免了在之前长路径中的行为流失比如微图完成后忘记分享或觉得麻烦放弃分享等等hyhyhfryhfujik,o,.opuo.oulkijudeswaerfgthyjukil.,mnbvcxqwtyuyt ",
        },
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));