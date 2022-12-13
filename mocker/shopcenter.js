const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {

    'GET /api/user/': [
        {
            "name": "仙人掌",
            "imgurl": "/img/矩形 6.png",
            "paragraph": "仙人掌科仙人掌属植物。丛生肉质灌木,高1.5-3米。上部分枝宽倒卵形、倒卵状椭圆形或近圆形,绿色至蓝绿色,无毛；刺黄色,有淡褐色横纹,坚硬；倒刺直立。叶钻形,绿色,早落。花辐状；花托倒卵形,基部渐狭,绿色；萼状花被黄色,具绿色中肋；花丝淡黄色；花药黄色；花柱淡黄色；柱头黄白色。浆果倒卵球形,顶端凹陷,表面平滑无毛,紫红色,倒刺刚毛和钻形刺。种子多数扁圆形,边缘稍不规则,无毛,淡黄褐色。花期6-10（-12)月。",
            "sunflower": true,
        },
        {
            "name": "多肉植物",
            "imgurl": "/img/矩形1.png",
            "paragraph": "多肉植物也叫多水植物、肉质植物,是指植物器官的茎或叶或根具有发达的薄壁组织用以贮藏水分,在外形上显得肥厚多汁的一类植物。",
            "sunflower": true,
        },
        {
            "name": "桃蛋",
            "imgurl": "/img/meaty1.png",
            "paragraph": "醉美人,俗称“桃蛋”,为景天科风车草属多肉植物,与桃美人相比,其叶呈轮生状,使得株型更紧凑,肉质叶稍小,较扁,呈卵圆形,有“卵”的感觉,叶色稍浅一些,顶端没有小红点。花星状,上部红色,有斑点。其叶片卵形至球形,叶片粉紫色,如同熟透的桃子一般",
            "sunflower": true,
        },  
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));