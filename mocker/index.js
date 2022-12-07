const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';


const detalis = require('./detalis');


const proxy = {

    ...detalis,

}
module.exports = (noProxy ? {} : delay(proxy, 10));