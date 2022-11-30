const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

// const user = require('./data');


const proxy = {
    // ...user,
    'GET /api/user/': [
        {
            "name": "仙人掌",
            "favorties": true,
            "trash": "2022/12/01",
            "imgurl": "/img/cactus.png",
            "paragraph":"叶片一般都是很饱满的，并且株型也很紧凑，橘珠看起来是很小巧的...",
        },
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));