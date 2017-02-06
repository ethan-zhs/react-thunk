import {combineReducers} from 'redux';
import * as actionType from './actions'


function loginInitReducer(state = {
    isRequesting: false,
    success: false,
    city: [],
    tvstation: [],
    channel: [],
    program: [],
    loginMsg: {
        status: '',
        message: ''
    }
}, action) {
    switch(action.type) {
        // 获得城市列表
        case actionType.LOGIN_CITIES_REQUEST:
            return Object.assign({}, state, {isRequesting: true});

        case actionType.LOGIN_CITIES_SUCCESS:
            console.log(action.response.data);
            return Object.assign({}, state, {isRequesting: false, success: true, city: action.response.data});

        case actionType.LOGIN_CITIES_FAILURE:
            return Object.assign({}, state, {isRequesting: false, success: false});

        // 获得电视台列表
        case actionType.LOGIN_TVSTATION_REQUEST:
            return Object.assign({}, state, {isRequesting: true});

        case actionType.LOGIN_TVSTATION_SUCCESS:
            return Object.assign({}, state, {isRequesting: false, success: true, tvstation: action.response.data});

        case actionType.LOGIN_TVSTATION_FAILURE:
            return Object.assign({}, state, {isRequesting: false, success: false});

        // 获得频道列表
        case actionType.LOGIN_CHANNEL_REQUEST:
            return Object.assign({}, state, {isRequesting: true});

        case actionType.LOGIN_CHANNEL_SUCCESS:
            return Object.assign({}, state, {isRequesting: false, success: true, channel: action.response.data});

        case actionType.LOGIN_CHANNEL_FAILURE:
            return Object.assign({}, state, {isRequesting: false, success: false});

        // 获得节目列表
        case actionType.LOGIN_PROGRAM_REQUEST:
            return Object.assign({}, state, {isRequesting: true});

        case actionType.LOGIN_PROGRAM_SUCCESS:
            return Object.assign({}, state, {isRequesting: false, success: true, program: action.response.data});

        case actionType.LOGIN_PROGRAM_FAILURE:
            return Object.assign({}, state, {isRequesting: false, success: false});

        // 登录直播号平台
        case actionType.LOGIN_REQUEST:
            return Object.assign({}, state, {isRequesting: true});

        case actionType.LOGIN_SUCCESS:
            return Object.assign({}, state, {isRequesting: false, success: true, 
                loginMsg: Object.assign({}, state.loginMsg, {
                    status: action.response.data.status,
                    message: action.response.data.message
                })
            });

        case actionType.LOGIN_FAILURE:
            return Object.assign({}, state, {isRequesting: false, success: false});


        // 密码空处理
        case actionType.LOGIN_EMPTY:
            return Object.assign({}, state, {
                loginMsg: Object.assign({}, state.loginMsg, {
                    status: 'error',
                    message: '输入密码不能为空'
                })
            });

        // 清空密码报错提示
        case actionType.LOGIN_ERROR_REMOVE:
            return Object.assign({}, state, {
                loginMsg: Object.assign({}, state.loginMsg, {
                    status: '',
                    message: ''
                })
            });

        default:
            return state;
    }
}

export default combineReducers({
    loginInit: loginInitReducer
});

