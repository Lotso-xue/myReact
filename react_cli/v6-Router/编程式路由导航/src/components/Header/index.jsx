import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate()

  // 编程式导航的前进后退也是使用navigate(),里面传正数就是前进几步，负数就是后退几步
  function back (){
    navigate(-1)
  }

  function forward(){
    navigate(1)
  }
  return (
    <div>
      <h2>React Router Demo</h2>
      <button onClick={back}>《--后退</button>
      <button onClick={forward}>前进--》</button>
    </div>
  )
}
