import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

//下面引入项目业务reducers
import login from './login/reducers';

const rootReducer = combineReducers({
    //业务reducers
    login,

    //路由reducers
    routing
});

export default rootReducer;