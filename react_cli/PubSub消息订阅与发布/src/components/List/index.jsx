import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state= {
    users:[],//初始化状态
    isFirst:true,//是否为第一次打开页面
    isLoading:false,// 是否处于加载中
    err:''//存储请求相关信息
  
  }

  componentDidMount(){
    this.token = PubSub.subscribe('data',(msg,data) => {
      this.setState(data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
        <div className='row'>
        {
          isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
           isLoading ? <h2>Loading....</h2> : 
           err ? <h2 style={{color:'red'}}>{err}</h2> :
                users.map((userObj) => {
                  return (
                    <div key={userObj.id} className='card'>
                        <a href={userObj.html_url} target="_blank"  rel='noopener noreferrer'>
                          <img src={userObj.avatar_url} style={{width:'100px'}} alt='未加载出来' />
                        </a>
                        <p className='card-text'>{userObj.login}</p>
                    </div>
                  )
                })
        }
       
        </div>
    )
  }
}
