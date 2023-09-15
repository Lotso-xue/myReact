import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './pages/Home' //路由组件
import About from './pages/About'//路由组件
import Header from './components/Header'//一般组件
import MyNavLink from './components/MyNavLink'
export default class App extends Component {


  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
              <div className='page-header'><Header></Header></div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>

              {/* 在react中靠路由链接来实现切换组件----编写路由链接 */}
              {/* NavLink标签可以设置导航的高亮 ，activeClassName属性是点到哪个，哪个就加上对应的类名 */}
              {/* <NavLink activeClassName='hah' className='list-group-item' to='/about'>About</NavLink>
              <NavLink activeClassName='hah' className='list-group-item' to='/home'>Home</NavLink> */}


              {/* 对 NavLink进行封装*/}
              <MyNavLink  to='/about'>About</MyNavLink>
              <MyNavLink  to='/home'>Home</MyNavLink>
             
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/home"/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
