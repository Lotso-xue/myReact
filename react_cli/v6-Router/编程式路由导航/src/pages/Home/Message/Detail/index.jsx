import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  // state方式 接收是采用useLocation的hook，这里面有state，state里面保存的就是传过来的值，是一个对象
  // 可以连续解构赋值
  const {id,title,content} = useLocation().state
  
  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题 ：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  )
}
