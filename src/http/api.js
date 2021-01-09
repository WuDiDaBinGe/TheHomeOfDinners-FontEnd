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

  //标签
  Tag:{
    lists:'/tags/',                     //获取标签列表
  },
  //餐馆标签关系表
  Tag_Res:{
    list:'/tag_restaurant/'             //返回对应标签下的餐馆列表
  },
  //用户收藏餐馆
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
