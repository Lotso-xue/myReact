import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
        // MyNavLink组件标签的标签体内容在this.props.children里
        // <NavLink className={({isActive}) => {return isActive ? 'list-group-item huh' : 'list-group-item' }}  {...this.props}/>
        <NavLink className='list-group-item'  {...this.props}/>
    )
  }
}
