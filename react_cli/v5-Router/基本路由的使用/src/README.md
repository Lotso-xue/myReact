路由的基本使用：
    1.明确好页面的导航区和展示区
    2.导航区的a标签改为Link标签
        <Link to="/xxxx">Demo</Link>
    3.展示区用Route标签进行路径的匹配
        <Route path="/xxxx" component={Demo}/>
    4.<App> 的 最外侧包裹一个<BrowserRouter> 或者 <HashRouter>


路由组件和一般组件区别：
    1.写法不同：
        一般组件：<Demo/>
        路由组件：<Route path="/demo" component={Demo}/>
    2.存放位置不同：
        一般组件：components文件夹
        路由组件：pages文件夹
    3.接收到的props不同：
        一般组件：写组件标签时传递了什么，就会接收到什么
        路由组件：会接收到三个固定的属性 
                    history  location match


NavLink和封装NavLink
    1.NavLink标签可以设置导航的高亮 ，activeClassName属性是点到哪个，哪个就加上对应的类名(指定样式名)
    2.标签体是一个特殊的标签属性
    3.通过this.props.children可以获取标签体内容


Switch的使用
    1.通常情况下，path和component是一一对应的关系
    2.Switch标签可以提高路由的匹配效率（单一匹配：若一个path有多个component，则在Switch标签里只会匹配到第一个，然后就不继续往下找了，若不用Switch，则会把匹配的component都显示出来）


解决多级路径刷新页面样式丢失的问题
    1.public/index.html中 引入样式时不写 ./ 写 / (常用)
    2.public/index.html中 引入样式不写 ./ 写 %PUBLIC_URL% (常用)
    3.使用HashRouter
        

路由的严格匹配与模糊匹配
    1.默认使用的是模糊匹配(【导航to的路径】必须包含【匹配的路径】，且顺序要一致)
    2.开启严格匹配： <Route exact path="/about" component={About}/>
    3.严格匹配不要随便开启，需要再开，有时候开启会出现无法继续匹配二级路由


Redirect的使用
    1.一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
    2.具体编码：
         <Switch>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Redirect to="/home"/>
        </Switch>