import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
  // 使用useSearchParams的hook，返回的是包含两个元素的数组
  // 第一个参数search：是传递过来参数的信息，不过必须通过search.get('传递的变量') 来获取
  // 第二个参数setSearch:是用于更新一下你所收到的search参数 ，用的不多。就是调用setSearch('传你要更新的值')

  const [search,setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题 ：{title}</li>
      <li>消息内容：{content}</li>
      <li>
        <button onClick={() => setSearch('id=123&title=更新的&content=新的内容')}>点我更新一下收到的search参数</button>
      </li>
    </ul>
  )
}
