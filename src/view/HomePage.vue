<template>
  <!-- 主页 -->
  <div class="body center">
    <div class="main">
      <div class="inputandcion">
        <input v-model="keyWord" placeholder="搜索你想要的产品" suffix-icon change class="keyword" />
        <button class="sousuo" @click="serch">
          <img class="hualigs" src="../assets/img/search.svg" alt />
          <div class="claer" />
        </button>
      </div>
      <div class="centernow">
        <RectAngle />
        <div class="button-link">
          <ul class="buttonstyle">
            <li @click="clickTab(index, item)" v-for="(item, index) in tabList" :key="index" class="plant-name"
              :class="{ active: currentIndex === index }">
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div v-if="tableData && tableData.length > 0">
          <li v-for="(tableData) in tableData" :key="tableData.name" class="plant-assembly" @click="button()">
            <HomePagetwo :title="tableData.name" :des="tableData.imgurl" :eal="tableData.paragraph" />
          </li>
        </div>
      </div>
      <FooterPage />
    </div>
  </div>
</template>

<script>
import HomePagetwo from "../components/HomePagetwo.vue"; //商品信息
import RectAngle from "../components/rectangle.vue"; //轮播图组件
import FooterPage from "../components/Footer.vue"; //底部商品导航
// import { reqCategoryList } from "../API/index";

export default {
  name: "HomePage",
  props: ["type"],
  data() {
    return {
      tableData: [],
      item: [],
      name: " ",
      keyWord: " ",
      meatyname: [],
      tabList: [
        {
          id: 1,
          name: '全部'
        }, {
          id: 2,
          name: '向日葵'
        },
        {
          id: 3,
          name: '仙人掌'
        },
        {
          id: 4,
          name: '绿萝'
        }
      ],
      currentIndex: 0,
      content: 'fdgfdgffdgfd',
    };
  },
  mounted() {
    // reqCategoryList().then((data) => {
    //   this.tableData = data.data;
    //   const type = this.$route.params.type || "all";
    //   this.filterDatas(type, data.data);
    //   // console.log("this.tableData", data.data);
    // });
    this.getList()
  },
  components: {
    HomePagetwo,
    FooterPage, //底部商品导航,
    RectAngle,//轮播图
  },
  watch: {
    $route: {
      handler(newVal, olaVal) {
        const newType = newVal.params.type;
        const oldType = olaVal.params.type;
        this.name = newVal.params.name;
        if (newType && newType !== oldType) {
          this.filterDatas(newType, this.tableData);
        }
      },
    },
  },
  methods: {
    getList() {
      const data = [
        {
          "name": "仙人掌",
          "imgurl": "/img/cactus.jpg",
          "paragraph": "仙人掌科仙人掌属植物。丛生肉质灌木,高1.5-3米。上部分枝宽倒卵形、倒卵状椭圆形或近圆形,绿色至蓝绿色,无毛；刺黄色,有淡褐色横纹,坚硬；倒刺直立。叶钻形,绿色,早落。花辐状；花托倒卵形,基部渐狭,绿色；萼状花被黄色,具绿色中肋；花丝淡黄色；花药黄色；花柱淡黄色；柱头黄白色。浆果倒卵球形,顶端凹陷,表面平滑无毛,紫红色,倒刺刚毛和钻形刺。种子多数扁圆形,边缘稍不规则,无毛,淡黄褐色。花期6-10（-12)月。",
          "sunflower": true,
          "deleteAt": "2022/12/01",
        },
        {
          "name": "多肉",
          "imgurl": "/img/Succulentplants.jpg",
          "paragraph": "多肉植物也叫多水植物、肉质植物,是指植物器官的茎或叶或根具有发达的薄壁组织用以贮藏水分,在外形上显得肥厚多汁的一类植物。",
          "sunflower": true,
          "deleteAt": "2022/12/01",
        },
        {
          "name": "桃蛋",
          "imgurl": "/img/peachegg.jpg",
          "paragraph": "醉美人,俗称“桃蛋”,为景天科风车草属多肉植物,与桃美人相比,其叶呈轮生状,使得株型更紧凑,肉质叶稍小,较扁,呈卵圆形,有“卵”的感觉,叶色稍浅一些,顶端没有小红点。花星状,上部红色,有斑点。其叶片卵形至球形,叶片粉紫色,如同熟透的桃子一般",
          "sunflower": true,
        },
        {
          "name": "虹之玉锦",
          "imgurl": "/img/rainbowjade brocade.jpg",
          "paragraph": "景天科景天属的多肉植物,为虹之玉的锦化品种。虹之玉锦与虹之玉的叶片大小没有特别大的变化,但颜色会稍有不同,虹之玉锦一般会有粉红色、中绿色等 。生长速度较虹之玉慢很多",
        },
        {
          "name": "玉露",
          "imgurl": "/img/bestgreentea.jpg",
          "paragraph": "阿福花科、十二卷属下的多肉植物。株高5-12厘米,植株初为单生,以后逐渐呈群生状。肉质叶排列成莲座状,叶色碧绿,顶端呈透明或半透明状,称其为“窗”,表面有深色纵线条,顶端有细小的“须” ",
        },
        {
          "name": "达摩福娘",
          "imgurl": "/img/cotyledon pendens.jpg",
          "paragraph": "景天科银波锦属多肉植物,属于小型灌木类,由于茎很细,所以很难支撑一直向上生长,会匍匐向下生长。出状态后,叶尖尖端呈粉红色。",
          "sunflower": true,
        },
        {
          "name": "百合莉莉",
          "imgurl": "/img/lily.jpg",
          "paragraph": "百合莉莉易长侧芽,底部叶片易枯萎形成多头老桩,叶片肥厚圆匙状,叶尖不明显,莲花状紧密排列,随养护环境同,叶色绿色到粉橙绿色,出状态的百合莉莉非常好看,但变绿的百合莉莉就有点一脸菜色了。百合莉莉的另一亮点是香气明显,小老桩非常漂亮",
          "cactus": "2022/12/01",
          "deleteAt": "2022/12/01",
        },
        {
          "name": "静夜",
          "imgurl": "/img/silentnight.jpg",
          "paragraph": "景天科拟石莲花属的多肉植物、也称多浆植物,属于较迷你的石莲花,个头非常小,很容易群生,日照充分的时候,叶尖会变红,非常可爱。",
          "cactus": "2022/12/01",
          "greenpineapple": true,
        }
      ]
      this.tableData = data;

    },
    button() {
      this.$router.push({
        path: '/detail',
      }),
        this.showData = !this.showData;
      this.HomePagetwo = this.dataToShow;
    },
    serch() {
      var dataLists = [];
      if (this.keyWord) {
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].name === this.keyWord) {
            dataLists.push(this.tableData[i]);
            console.log("this.tableData", this.tableData);
          }
        }
      } else {
        dataLists = this.tableData;
      }
      this.items = [...dataLists];
      this.tableData = this.items;
      console.log("this.items", this.items);
    },
    filterDatas(type, list) {
      if (type === "sunflower") {
        this.items = list.filter((tableData) => tableData.sunflower);
      } else if (type === "deleteAt") {
        this.items = list.filter((tableData) => tableData.deleteAt);
      } else {
        this.items = list;
      }
      console.log("-----type:", type);
      console.log("this.items", this.items);
    },
    clickTab(index, item) {
      this.currentIndex = index
      this.tableData = this.tableData.filter(e => e.name === item.name)
    },
  },
};
</script>

<style lang='less'>
p {
  margin: 0;
}

h1 {
  margin: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

.button-link {
  padding: 25px 0 25px 0;

  .all {
    text-align: center;
    font-weight: 300;
    font-size: 0.9rem;
    padding-top: 6px;
  }

  .plant-name {
    text-align: center;
    color: #333333;
    box-shadow: 0 4px 10px 0 rgb(76 110 245 / 37%);
    border-radius: 19.8px;
    width: 20%;
    letter-spacing: 0;
    background: #F1F3F5;
    font-size: 0.7rem;
    opacity: 0.7;
    padding-top: 0.4rem;
    height: 24px;
  }

  .anotherbutton {
    width: 20%;
    box-shadow: 0 4px 10px 0 rgb(76 110 245 / 37%);
    border-radius: 19.8px;
    height: 2.1rem;
    background: #4c6ef5;
    color: #fff;
  }

  .buttonstyle {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  .buttontext-style {
    background: #f1f3f5;
    border-radius: 19.8px;
    width: 20%;
    height: 2.1rem;
  }

  .active {
    background: #4C6EF5;
    color: #fff;
  }
}

.sousuo {
  width: 28px;
  height: 20px;
}

.router-link-exact-active {
  background: #4c6ef5;
  color: #fff;
}

.inputandcion {
  padding: 17px 0 17px 1rem;
  display: flex;

  button {
    position: relative;
    right: 35px;
    background: #fafaf5;
    border: none;
    padding: 0;
    height: 34px;
    top: 3px;
  }

  .keyword {
    width: 20rem;
    border-radius: 5.76px;
    height: 2.5rem;
    border: none;
    outline: none;
    background: #FAFAF5;
    border-radius: 5.76px;
  }
}

.centernow {
  margin: 0 1.9rem 6.5rem 1.9rem;

  .cactus {
    width: 8rem;
    height: 9.1rem;
  }

  .plant-assembly {
    margin-bottom: 2.9rem;
    box-shadow: 12px 4px 54px 3px rgb(173 174 179 / 13%), 1px 6px 20px 8px rgb(173 173 179 / 13%);
    border-radius: 5.04px;
  }
}

.fontsize {
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0;
  padding-top: 6px;
  opacity: 0.6;
}
</style>