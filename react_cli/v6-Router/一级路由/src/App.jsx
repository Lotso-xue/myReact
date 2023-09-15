import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Home from './pages/Home' //路由组件
import About from './pages/About'//路由组件
import Header from './components/Header'//一般组件
import MyNavLink from './components/MyNavLink'

export default function App() {
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
              {/* 这里的to要去匹配下面path的规则 */}
              <MyNavLink  to='/about'>About</MyNavLink>
              <MyNavLink  to='/home'>Home</MyNavLink>
             
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由： 这里的path是规则，*/}
                {/* v6版本中 <Routes></Routes>代替了switch；element来渲染组件*/}
                <Routes>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/home" element={<Home/>}/>
                  {/* 重定向 */}
                  <Route path="/" element={<Navigate to="/about"/>}/>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

