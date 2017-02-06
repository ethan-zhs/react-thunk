# project frameworks

### 项目需要

    1.首先安装node.js(安装稳定版本)
    2.安装npm包管理(nodejs安装好了就可以，node自带)

### 把项目从git克隆到本地
git config --global http.sslVerify false

```js
$ git clone <git-source> //首先把项目从git上clone的本地
```

### 怎么运行？

```js
npm install
npm start //开发者运行
npm test //测试产品运行
```

    然后打开浏览器在地址上输入`localhost:3000`运行

### 项目开发文件结构说明

    - project
      - dist //打包编译的文件路径
      - **src** //开发代码文件目录
      - routes.js //express服务器路由配置
      - server.js //express服务器运行文件
      - webpack.config.js //webpack配置文件
      - package.json //包文件json
      - ......

    //开发代码目录
    - src
      - containers
      - component //组件目录
      - contants //项目的公用变量
      - middleware //redux中间件
      - devtools //redux开发者工具
      - model //reducers & actions
      - statics //静态资源
      - stores //redux store
      - templates //模板
      - views //视图
      - index.html
      - index.js //入口文件

    项目开发主要关注*component*, *model*, *views*这几个目录即可，这个都是放开发业务的代码，里面放有example，一个是同步数据，一个是调用AJAX API的异步数据

### 开发业务流程

1.首先先合理构造好数据结构，编写好reducers和actions，按照业务模块区分放在models下

```js
// reducers: models/home/reducers.js

import * as actionTypes from './actions';
import {combineReducers} from 'redux';

function count(state = {
    num: 10
}, action) {
    switch(action.type) {
        case actionTypes.PLUS:
            return Object.assign({}, state, {num: state.num+1});
        case actionTypes.MINUS:
            return Object.assign({}, state, {num: state.num-1});
        case actionTypes.RSET:
            return Object.assign({}, state, {num: 0});
        default:
            return state;
    }
}

export default combineReducers({
    count
});

// actions: models/home/actions.js

export const PLUS = 'PLUS';
export function plus() {
    return {
        type: PLUS
    }
}

export const MINUS = 'MINUS';
export function minus() {
    return {
        type: MINUS
    }
}

export const RSET = 'RSET';
export function rset() {
    return {
        type: RSET
    }
}
```

2.编写你的业务组件代码，目录在views，按照业务模块区分

```js
//home: views/home/index.js

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../models/home/actions';

import "./home.css";

class Home extends Component {
    constructor() {
        super();
    }

    minus() {
        let {num} = this.props.count;
        if(num > 0) {
            this.props.minus();
        }else {
            alert("num is zero");
        }
    }

    plus() {
        this.props.plus();
    }

    rset() {
        this.props.rset();
    }

    render() {
        return (
            <div>
                <span>{this.props.count.num}</span>
                <button onClick={this.minus.bind(this)}>-</button>
                <button onClick={this.plus.bind(this)}>+</button>
                <button onClick={this.rset.bind(this)}>reset</button>
            </div>
        )
    }
}

//组件传参验证
Home.PropTypes = {
    count: PropTypes.object.isRequired
}

//store state to props func
function mapStateToProps(state) {
    return {
        count: state.home.count
    }
}

//使用connect方法把state和action绑定到组件上
Home = connect(
    mapStateToProps,
    actions
)(Home);

export default Home;
```

3.修改models目录下的root.reducer.js，把你的写好的reducer引入

```js
//下面引入项目业务reducers
import home from './home/reducers';
import ajax from './ajax/reducers';

const rootReducer = combineReducers({
    //业务reducers
    home,
    ajax,

    //路由reducers
    routing
});
```

4.然后编写路由，views/routes.js

```js
//引入组件模块
import Layout from './layout/';
import Home from './home/';
import Ajax from './ajax/';

export default (
    <Route path='/' component={Layout} >
        <IndexRedirect to='index' />
        <Route path='index' component={Home} />
        <Route path='ajax' component={Ajax} />
        ...
    </Route>
)
```

5.在浏览器上输入`localhost:3000/路由`浏览

