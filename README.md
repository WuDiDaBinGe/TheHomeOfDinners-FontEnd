# TheHomeOfDinners

本项目使用Vue构建




后端接口规定：
名称：判断用户名是否已注册
请求方式：Get
url：/usernames/kevin/count/
返回参数：['username', 'count']


名称：判断手机号是否已注册
请求方式：Get
url：/mobiles/18635151267/count/
返回参数：['mobile', 'count']


名称：发送验证码
请求方式：Get
url：/smscode/18635151267/
返回参数：{'message': 'ok', }


名称：用户注册
请求方式：Post
url：/users/
携带参数：['username', 'password', 'password2', 'mobile', 'sms_code', 'role', 'allow']
返回参数：['id', 'username', 'mobile', 'role', 'token']


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


名称：获取用户信息
请求方式：Get
url：/user/
携带参数(head)：{'Authorization':'JWT token值'}
返回参数：['id', 'username', 'mobile', 'role']


名称：修改用户信息
请求方式：PUT
url：/user/
携带参数(head)：{'Authorization':'JWT token值'}
携带参数(body)：['username', 'mobile', 'role']
返回参数：['id', 'username', 'mobile', 'role']


名称：删除用户信息
请求方式：DELETE
url：/user/
携带参数(head)：{'Authorization':'JWT token值'}
携带参数(body)：['password']
返回参数：['message']
