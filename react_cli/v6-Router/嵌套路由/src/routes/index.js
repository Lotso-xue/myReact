import About from "../pages/About"
import Home from "../pages/Home"
import Message from "../pages/Home/Message"
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
          element:<Message/>
        },
      ]
    },
    {
      path:'/',
      element:<Navigate to="/about"/>
    },
  ]

export default element