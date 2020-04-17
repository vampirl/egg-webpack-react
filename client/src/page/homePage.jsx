import React, { Component } from 'react';

class HomePage extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
    <div>{this.state.a}</div>
    )
  }
}

export default HomePage;