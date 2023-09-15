import React,{useState} from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    {id:"001",title:"消息1",content:"msg1"},
    {id:"002",title:"消息2",content:"msg2"},
    {id:"003",title:"消息3",content:"msg3"},
    {id:"004",title:"消息4",content:"msg4"},
  ])
  return (
    <div>
      <ul>
      {
        messages.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/* 路由链接 */}
              {/* 这是传递search参数 ,search不用在路由表占位*/}
              <NavLink to={`detail?id=${msgObj.id}&title=${msgObj.title}&content=${msgObj.content}`}>{msgObj.title}</NavLink>
            </li>
          )
        })
      }
      </ul>
      {/* 指定路由组件的展示位置 */}
      <Outlet/>
    </div>
  )
}
