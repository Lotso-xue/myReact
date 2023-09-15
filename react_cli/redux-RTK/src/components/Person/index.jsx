import { nanoid } from '@reduxjs/toolkit'
import React, { useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addPerson } from '../../store/module/person'

export default function Person() {
  const persons = useSelector(state => state.personReducer.persons)
  const dispatch = useDispatch()

  const count = useSelector(state => state.countReducer.count)

  const nameRef = useRef()
  const ageRef = useRef()

  function add(){
    const name = nameRef.current.value
    const age = ageRef.current.value
    const personObj = {id:nanoid(),name,age}
    dispatch(addPerson(personObj))
    nameRef.current.value = ''
    ageRef.current.value = ''
  }
  return (
    <div>
      <h2>我是Person组件，上面组件总和为：{count}</h2>
      <input type="text" ref={nameRef} placeholder='姓名' />
      <input type="text" ref={ageRef} placeholder='年龄' />
      <button onClick={add}>添加</button>
      <ul>
        {
          persons.map((personObj) => {
            return <li key={personObj.id}>姓名：{personObj.name}--年龄：{personObj.age}</li>
          })
        }
      </ul>
    </div>
  )
}
