export default{
  //首页
  Index:{
    index:'/index'
  },
  //用户
  User:{
    /*
        名称：用户注册
        请求方式：Post
        url：/users/
        携带参数：['username', 'password', 'password2', 'mobile', 'sms_code', 'role', 'allow']
        返回参数：['id', 'username', 'mobile', 'role', 'token']
    */
    register:'/users/',  //注册
    /*
    名称：用户登录
    请求方式：Post
    url：/login/
    携带参数：['username', 'password'](直接把用户的role属性附加在username的开头)
            ROLE = (
                (0, '管理员'),
                (1, '用户'),
                (2, '商家'),
            )
    返回参数：['id', 'username', 'mobile', 'role', 'token']
    */
    login:'/login/',
    user_register_mobilenumber:'/mobiles/count', //手机号判断
  },
  //评论
  //餐馆
  //测试
  Test:{
    test_get:'/posts',
    test_post:'/posts',

  }
}
