import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Home/Message"
import Detail from "../pages/Home/Message/Detail"
import News from "../pages/Home/News"
import { Navigate } from 'react-router-dom'

const element = [
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/home',
      element:<Home/>,
      children:[
        {
          path:'news',
          element:<News/>
        },
        {
          path:'message',
          element:<Message/>,
          children:[
            {
              // 路由表这边要声明可以接收
              path:"detail/:id/:title/:content",
              element:<Detail/>
            }
          ]
        },
      ]
    },
    {
      path:'/',
      element:<Navigate to="/about"/>
    },
  ]

export default element