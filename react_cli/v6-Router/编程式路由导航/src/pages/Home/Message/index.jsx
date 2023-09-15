import React,{useState} from 'react'
import { NavLink,Outlet, useNavigate} from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    {id:"001",title:"消息1",content:"msg1"},
    {id:"002",title:"消息2",content:"msg2"},
    {id:"003",title:"消息3",content:"msg3"},
    {id:"004",title:"消息4",content:"msg4"},
  ])

  // 编程式导航是使用useNavigate钩子，返回的是一个函数，直接调用返回的函数，
  // 这里是用编程式导航传递state参数，这里面传两个参数，一个是要跳转的路径，一个是配置对象。

  // 也可以用编程式导航传递params和search参数，详情：https://blog.csdn.net/m0_70718568/article/details/127779167
  const navigate = useNavigate()

  function showDetail(msgObj){
    navigate('detail',{
      replace:false,
      state:{
        id:msgObj.id,
        title:msgObj.title,
        content:msgObj.content
      }
    })
  }

  return (
    <div>
      <ul>
      {
        messages.map((msgObj) => {
          return (
            <li key={msgObj.id}>
              {/* 路由链接 */}
              {/* 这是传递state参数 ,state也不用在路由表占位，和v5不一样的是这里直接给导航一个state属性，里面传一个对象，对象是要 传递的值*/}
              <NavLink to="detail" state={{id:msgObj.id,title:msgObj.title,content:msgObj.content}}>{msgObj.title}</NavLink>
              <button onClick={ () => showDetail(msgObj)}>查看详情</button>
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
