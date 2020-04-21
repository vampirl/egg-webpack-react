import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {getRoutes} from './router';

import '../libs/before-load';
import './style.less';

class App extends Component {
    render() {
        return <div className='warp'>{getRoutes()}</div>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)
