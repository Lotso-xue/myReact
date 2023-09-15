import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h3>我是Home组件</h3>
      <ul>
        <li>
          {/* 这里的 to可以不写父级路由，且子路由也不能写斜杠/ */}
          <NavLink to="news">News</NavLink>
        </li>
        <li>
          <NavLink to="message">Messages</NavLink>
        </li>
      </ul>
      {/*  Outlet指定路由组件呈现的位置，相当于vue里的router-view*/}
      <Outlet />
    </div>
  )
}
