import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
import './index.css'

export default class Search extends Component {
  search = () => {
    // 获取输入的值
    const { keyWordElement: { value: keyWord } } = this
    // 判断输入是否为空
    if (keyWord.trim() === '') {
      alert("输入不能为空")
      return
    }
    // 发送消息：在发送请求之前 需要更新state 
    PubSub.publish('message',{isFirst:false,isLoading:true})
    // 发送ajax请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功 通知List 更新状态
        PubSub.publish('message', { isLoading: false, users: response.data.items })
      },
      error => {
        // 请求失败 通知List 返回错误信息
        PubSub.publish('message',{isLoading: false,err:error.message})
      })
  }
  render() {
    return (
      <section className="jumbotron">
        <h2 className="jumbotron-heading">搜索github用户</h2>
        <div>
          <input ref={c => this.keyWordElement = c } type="text" placeholder="输入关键词点击搜索" />
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
