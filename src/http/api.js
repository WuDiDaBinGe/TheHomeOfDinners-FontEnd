export default{
  //首页
  Index:{
    index:'/index'
  },
  //用户
  User:{
    register:'/users/',               //注册
    login:'/login/',                  //登录
    userMobileCount:'/mobile/count',  //手机号判断
<<<<<<< HEAD
    userNameCount:'/username/count',  //用户名判断是否重复
    read:'/user/{id}/'                //根据用户ID读取信息
=======
    userNameCount:'/username/count'   //用户名判断是否重复
>>>>>>> upstream/develop
  },
  //评论
  //餐馆
  Restaurant:{
    list:'/restaurant',
    create:'/restaurant/',              //创建餐馆
<<<<<<< HEAD
    singleRestaurant:"/restaurant/",    //查询餐馆
    scoreCount:"/restaurant/{id}/reviews_count/", //查询餐馆下各个评分的个数
=======
    singleRestaurant:"/restaurant/"
>>>>>>> upstream/develop
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
    collectDel:'/collection/del_by_user_restaurant/',        //删除收藏
  },
  //评论
  Review:{
    RestaurantReview:'/review/{id}/restaurant_review',       //查询餐馆的评论
  },
  //测试
  Test:{
    test_get:'/posts',
    test_post:'/posts',

  }
}
