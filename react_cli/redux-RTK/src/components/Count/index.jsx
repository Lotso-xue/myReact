import React ,{useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incremnet,decrement } from '../../store/module/count';

export default function Count() {
  // useSelector就相当于之前connect函数中的mapStateToProps，useDispatch就相当于connnect函数中的mapDispatchToProps
  // useSelector取值是里面的state：state.store中对应reducer名.对应的值
  const count = useSelector(state =>  state.countReducer.count)
  const dispatch = useDispatch()

  const personSum = useSelector(state => state.personReducer.persons.length)

  const selectRef = useRef()

   function add (){
    // 拿到当前select框中的值
      const value = selectRef.current.value
      dispatch(incremnet(value*1))
    }

  function sub (){
    const value = selectRef.current.value
    dispatch(decrement(value*1))
  }
  return (
    <div>
      <h2>我是Count组件,下面组件总人数为：{personSum}</h2>
      <h4>当前总和为：{count}</h4>
      <select ref={selectRef}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </div>
  )
}

 
