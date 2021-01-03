export default{
  //首页
  Index:{
    index:'/index'
  },
  //用户
  User:{
    register:'/users/',  //注册
    login:'/login/',
    user_register_mobilenumber:'/mobiles/count', //手机号判断
  },
  //评论
  //餐馆
  Restaurant:{
    list:'/restaurant',
    singleRestaurant:"/restaurant/"
  },
  Collection:{
    collected:'/collection/collected/', //是否被收藏
    collectRes:'/collection/',          //收藏餐馆
    collectDel:'/collection/del_by_user_restaurant/',          //删除收藏
  },
  //测试
  Test:{
    test_get:'/posts',
    test_post:'/posts',

  }
}
