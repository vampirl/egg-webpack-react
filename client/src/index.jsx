import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {getRoutes} from './router'

class App extends Component {
    render() {
        return <div>{getRoutes()}</div>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
