<template>
  <div class="card">
    <ul id="myTab" class="nav nav-tabs">
        <li  v-for="(item,index) in pictures_navs" :class="[{'active':index==0},{'current_Jitem':index==select_tabs || (index==0&&select_tabs==-1)}]" @click="setCurrentItem(index)">
          <a  data-toggle="tab" class="Jitem" :href="item.target_dive">
              {{item.navs_titile}}
          </a>
        </li>
    </ul>
    <div id="myTabContent" class="tab-content">
        <ul class="tab-pane  in active recommend-photo" id="recommend_food">
            <li class="pictures_item">
                <img data-src="http://p0.meituan.net/bbia/6e1cfbd0f5a35af24064aa6c57bfe556943616.jpg%40249w_249h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" src="http://p0.meituan.net/bbia/6e1cfbd0f5a35af24064aa6c57bfe556943616.jpg%40249w_249h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20">
                <p class="name">推荐食物</p>
                <span class="price">¥138</span>                 
            </li>
            <li class="pictures_item ">
                <img data-src="http://p0.meituan.net/bbia/6e1cfbd0f5a35af24064aa6c57bfe556943616.jpg%40249w_249h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20" src="http://p0.meituan.net/bbia/6e1cfbd0f5a35af24064aa6c57bfe556943616.jpg%40249w_249h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20">
                <p class="name">口味虾</p>
                <span class="price">¥138</span>                 
            </li>
        </ul>
        <ul class="tab-pane fade recommend-photo" id="enviroment">
            <li class="pictures_item">
                <img data-src="https://qcloud.dpfile.com/pc/jVglaE5dvDGUxiQIki7aYtQO4hcP1gPu5WJ01mCkfPjHjlYGlwvmDrKgf1j7TbnguzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vfCF2ubeXzk49OsGrXt_KYDCngOyCwZK-s3fqawWswzk.jpg" src="https://qcloud.dpfile.com/pc/jVglaE5dvDGUxiQIki7aYtQO4hcP1gPu5WJ01mCkfPjHjlYGlwvmDrKgf1j7TbnguzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vfCF2ubeXzk49OsGrXt_KYDCngOyCwZK-s3fqawWswzk.jpg">
                  2         
            </li>
        </ul>
        <ul class="tab-pane fade recommend-photo" id="prices">
            <li class="pictures_item">
                <img data-src="https://qcloud.dpfile.com/pc/jVglaE5dvDGUxiQIki7aYtQO4hcP1gPu5WJ01mCkfPjHjlYGlwvmDrKgf1j7TbnguzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vfCF2ubeXzk49OsGrXt_KYDCngOyCwZK-s3fqawWswzk.jpg" src="https://qcloud.dpfile.com/pc/jVglaE5dvDGUxiQIki7aYtQO4hcP1gPu5WJ01mCkfPjHjlYGlwvmDrKgf1j7TbnguzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vfCF2ubeXzk49OsGrXt_KYDCngOyCwZK-s3fqawWswzk.jpg"> 
                3
            </li>
        </ul>
        <ul class="tab-pane fade recommend-photo" id="safe_certificate">
            <li class="pictures_item">
                <img data-src="https://qcloud.dpfile.com/pc/jVglaE5dvDGUxiQIki7aYtQO4hcP1gPu5WJ01mCkfPjHjlYGlwvmDrKgf1j7TbnguzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vfCF2ubeXzk49OsGrXt_KYDCngOyCwZK-s3fqawWswzk.jpg" src="https://qcloud.dpfile.com/pc/jVglaE5dvDGUxiQIki7aYtQO4hcP1gPu5WJ01mCkfPjHjlYGlwvmDrKgf1j7TbnguzFvxlbkWx5uwqY2qcjixFEuLYk00OmSS1IdNpm8K8sG4JN9RIm2mTKcbLtc2o2vfCF2ubeXzk49OsGrXt_KYDCngOyCwZK-s3fqawWswzk.jpg"> 
                4
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Restaurant_Pictures_Tab",
        data(){
            return{
                pictures_navs:[{
                    navs_titile:"推荐菜品",
                    target_dive:"#recommend_food"
                },
                {
                    navs_titile:"环境",
                    target_dive:"#enviroment"
                },
                {
                    navs_titile:"价目表",
                    target_dive:"#prices"
                },
                {
                    navs_titile:"食品安全档案袋",
                    target_dive:"#safe_certificate"
                },
                ],
                select_tabs:-1,
            }
        },
        methods:{
            setCurrentItem(index){
                this.select_tabs=index;
            }
        }
    }
</script>

<style scoped>
.card{
    background-color: #fff;
    border-radius: 3px;
    padding: 25px 25px 0 25px;
    margin-bottom: 30px;
    -webkit-box-shadow: 0 2px 4px rgba(3, 27, 78, 0.06);
    box-shadow: 0 2px 4px rgba(3, 27, 78, 0.06);
}
.Jitem{
    display: inline-block;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-right: 15px;
    text-decoration: none;
    font-size: 16px;
    color: #333;
    padding-bottom: 5px;
    font-weight: 700;
}
.current_Jitem{
    border-bottom: 4px solid #F63;
}
.pictures_item{
    position: relative;
    float: left;
    width: 91px;
    height: 96px;
    margin: 0 29px 15px 0;
    
}
.recommend-photo {
    margin-right: -24px;
    margin-top: 10px;
    clear: both;
    width: 860px;
    position: relative;
}
.recommend-photo .pictures_item img{
    position: absolute;
    left: -1px;
    top: -1px;
    width: 93px;
    height: 69px;
    background-color: #ddd;
}
.recommend-photo .name{
    margin-top: 68px;
    height: 28px;
    line-height: 28px;
    padding: 0 5px;
    white-space: nowrap;
    width: 82px;

}
.price{
    position: absolute;
    top: 1px;
    color: #fff;
    right: 0;
    padding: 0 5px;
    text-shadow: 2px 2px 2px rgba(0,0,0,.65);
}
</style>
