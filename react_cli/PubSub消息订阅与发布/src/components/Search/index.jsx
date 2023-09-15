import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class Search extends Component {
    handleSearch = () => {


        // 获取用户输入
        // 连续解构赋值且重命名方法   变量1：{变量2：{变量3：值}} ===》  const {变量2 :{变量3:变量3重命名}} = 变量1
        const {keyWordElement : {value:keyWord}} = this
        // 发送请求之前更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('data',{isFirst:false,isLoading:true})
        // 发送网络请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                //请求成功后更新状态           
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                PubSub.publish('data',{isLoading:false,users:response.data.items})
            },
            error => {
                // 请求失败更新状态
                // this.props.updateAppState({isLoading:false,err:error.message})
                PubSub.publish('data',{isLoading:false,err:error.message})
            }
        ) 
    }
  render() {
    return (
        <section className='jumbotron'>
        <h3 className='jumbotron-heading'>Search Github Users</h3>
        <div>
          <input ref={(c) => this.keyWordElement = c} type="text" placeholder='enter the name you search' />&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
