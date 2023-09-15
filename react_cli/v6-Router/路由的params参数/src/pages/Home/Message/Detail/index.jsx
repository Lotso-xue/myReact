import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  // 使用useParams的hook可以直接接收到传来的参数，是一个对象的形式 
  const {id,title,content} = useParams()
  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题 ：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  )
}
