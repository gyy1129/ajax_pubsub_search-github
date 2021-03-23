import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  // 初始化状态
  state = {
    users: [],/* 用数组 保存用户  */
    isFirst: true, /* 是否是第一次打开页面 */
    isLoading: false,/* 是否正在加载 */
    err:''/* 存储请求错误信息 */
  }

  // 订阅消息:页面挂载完毕时
  componentDidMount () {
    this.token = PubSub.subscribe('message',(_,stateObj) => {
      this.setState(stateObj)
    })
  }
  // 取消订阅：页面将被卸载时
  componentWillUnmount () {
    PubSub.unsubscribe(this.token)
  }
  
  render () {
    const { users,isFirst,isLoading,err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，请输入关键字，然后点击搜索</h2> :
          isLoading ? <h2>正在加载，请稍后...</h2> :
          err ? <h2 style={{color:'red'}}>{err}</h2>:
          users.map((userObj) => {
            return (
              <div className="card" key={userObj.id}>
                {/* html_url是个人用户的地址，avatar_url是头像图片的地址 */}
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img src={userObj.avatar_url} style={{width: '100px'}} alt="business"/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
    </div>
    )
  }
}
