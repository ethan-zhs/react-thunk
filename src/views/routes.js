import React from 'react';
import { Route, IndexRedirect, Redirect } from 'react-router';

//引入组件模块
import Main from './main/';
import Login from './login/';
import Layout from './layout/';
import Home from './home/';

export default (
    <Route path='/' component={Main} >
		<IndexRedirect to="index" />
		<Route path='/login' component={Login} />       

	    <Route path='/index' component={Layout} >
	    	<IndexRedirect to="/home" />
	        <Route path='/home' component={Home} />
	    </Route>
	</Route>
)
