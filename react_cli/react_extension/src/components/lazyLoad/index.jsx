import React, { Component,lazy,Suspense} from 'react'
import { Route,Switch,NavLink } from 'react-router-dom'

import Loading from './Loading'

// 懒加载：点击组件的时候才加载组件，否则不加载
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class App extends Component {


  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>

              <NavLink  to='/about'>About</NavLink>
              <NavLink  to='/home'>Home</NavLink>
             
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/*必须要用Suspense包裹住路由，
                 fallback={<Loading/>}  ： 正在加载组件时显示的页面 */}
              <Suspense fallback={<Loading/>}>
                {/* 注册路由 */}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                </Switch>
              </Suspense>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
