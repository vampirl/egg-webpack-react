import React, { Component } from 'react';
import { getUserinfo } from '../../service/userInfo'
import './style.less';

class HomePage extends Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      sex: ''
    }
  }
  userInfo() {
    console.log('请求接口')
    getUserinfo().then(res => {
      console.log(res);
    })
  }
  componentDidMount() {
    this.userInfo()
  }
  render() {
    return (
      <div className='homepage'>hello webpack</div>
    )
  }
}

export default HomePage;