import React, { Component } from 'react';
import './style.less';

class HomePage extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='homepage'>hello webpack</div>
    )
  }
}

export default HomePage;