嵌套路由：
    1.注册子路由时要写上父路由的path值 （/父路由/子路由）
    2.路由的匹配是按照注册路由的顺序进行 （最先是App里面的路由，然后是子路由）


向路由组件传递参数：
    1.params参数
        路由链接（携带参数）：<Link to='/demo/test/tom/18'>详情信息</Link>
        注册路由（声明接收）：<Route path='/demo/test/:name/:age' component={Test}/>
        接收参数：const {name,age} = this.props.match.params

    2.search参数
        路由链接（携带参数）：<Link to='/demo/test/?name=tom&age=18'>详情信息</Link>
        注册路由（无需声明，正常注册即可）：<Route path='/demo/test' component={Test}/>
        接收参数：const {search} = this.props.location
                 const {name,age} = qs.parse(search.slice(1))
        备注： 接收到的search是urlencoded编码字符串（key1=value1&key2=value2），需要借助qs库解析
                qs.stringify()方法将对象转换成urlencode编码格式
                qs.parse()方法将urlencode编码格式转换成对象

    3.state参数
        路由链接（携带参数）：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情信息</Link>
        注册路由（无需声明，正常注册即可）：<Route path='/demo/test' component={Test}/>
        接收参数：const {name,age} = this.props.location.state
        备注：state方式参数不会出现在地址栏上，这三种方式刷新后都可以保留住参数


编程式路由导航：
    借助this.props.history对象上的API对操作路由跳转、前进、后退
        this.props.history.push()
        this.props.history.replace()
        this.props.history.goBack()
        this.props.history.goForward()
        this.props.history.go()


withRouter作用：
    withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
        export default withRouter(一般组件)


BrowserRouter 和 HashRouter 的区别
    1.底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及以下版本
        HashRouter使用的是url的哈希值
    2.path表现形式不一样
        BrowserRouter的路径中没有#， 例如：localhost:3000/demo/test
        HashRouter的路径包含#， 例如：localhost:3000/#/demo/test
    3.刷新后对路由state参数的影响
        BrowserRouter没有任何影响，因为state保存在history对象中
        HashRouter刷新后会导致路由state参数的丢失！！！
    4.备注：HashRouter可以用于解决一些路径错误相关的问题