import React from 'react'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header'//一般组件
import MyNavLink from './components/MyNavLink'
import routes from './routes'

export default function App() {
  // 路由表
  const element = useRoutes(routes)
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
                {/* <Routes>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/" element={<Navigate to="/about"/>}/>
                </Routes> */}

                {/* 使用路由表后：自己就创建了上面的结构 */}
                {element}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

