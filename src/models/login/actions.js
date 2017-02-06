import {CALL_API} from '../../contants/callapi';

export const LOGIN_CITIES_REQUEST = 'LOGIN_CITIES_REQUEST';
export const LOGIN_CITIES_SUCCESS = 'LOGIN_CITIES_SUCCESS';
export const LOGIN_CITIES_FAILURE = 'LOGIN_CITIES_FAILURE';

export const LOGIN_TVSTATION_REQUEST = 'LOGIN_TVSTATION_REQUEST';
export const LOGIN_TVSTATION_SUCCESS = 'LOGIN_TVSTATION_SUCCESS';
export const LOGIN_TVSTATION_FAILURE = 'LOGIN_TVSTATION_FAILURE';

export const LOGIN_CHANNEL_REQUEST = 'LOGIN_CHANNEL_REQUEST';
export const LOGIN_CHANNEL_SUCCESS = 'LOGIN_CHANNEL_SUCCESS';
export const LOGIN_CHANNEL_FAILURE = 'LOGIN_CHANNEL_FAILURE';

export const LOGIN_PROGRAM_REQUEST = 'LOGIN_PROGRAM_REQUEST';
export const LOGIN_PROGRAM_SUCCESS = 'LOGIN_PROGRAM_SUCCESS';
export const LOGIN_PROGRAM_FAILURE = 'LOGIN_PROGRAM_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


/**
 * [获得城市列表]
 * @param  {[type]} name [description]
 * @return {[type]} name [description]
 */
export function getCityList() {

    return {
        [CALL_API]: {
            types: [LOGIN_CITIES_REQUEST, LOGIN_CITIES_SUCCESS, LOGIN_CITIES_FAILURE],
            endpoint: '/api/getCityList'
        }
    }
}

/**
 * [获得电视台列表]
 * @param  {[int]} cityId [城市id]
 * @return {[type]} name [description]
 */
export function getTvstationList(cityId) {

    return {
        [CALL_API]: {
            types: [LOGIN_TVSTATION_REQUEST, LOGIN_TVSTATION_SUCCESS, LOGIN_TVSTATION_FAILURE],
            endpoint: '/api/getTvstationList'
        }
    }
}

/**
 * [获得频道列表]
 * @param  {[int]} tvstationId [电视台id]
 * @return {[type]} name [description]
 */
export function getChannelList(tvstationId) {

    return {
        [CALL_API]: {
            types: [LOGIN_CHANNEL_REQUEST, LOGIN_CHANNEL_SUCCESS, LOGIN_CHANNEL_FAILURE],
            endpoint: '/api/getChannelList'
        }
    }
}

/**
 * [获得节目列表]
 * @param  {[int]} channelId [频道id]
 * @return {[type]} name [description]
 */
export function getProgramList(channelId) {

    return {
        [CALL_API]: {
            types: [LOGIN_PROGRAM_REQUEST, LOGIN_PROGRAM_SUCCESS, LOGIN_PROGRAM_FAILURE],
            endpoint: '/api/getProgramList'
        }
    }
}


/**
 * [登录直播号平台]
 * @param  {[int]} loginType [登录类型]
 * @param  {[int]} loginId [登录id]
 * @param  {[string]} password [密码]
 * @return {[type]} name [description]
 */
export function login(loginType, loginId, password) {
    return {
        [CALL_API]: {
            types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
            endpoint: '/api/login',
            data: {loginType: loginType, loginId: loginId, password: password}
        }
    }
}

/**
 * [登录密码判空]
 * @param  {[type]} name [description]
 * @return {[type]} name [description]
 */
export const LOGIN_EMPTY = 'LOGIN_EMPTY';
export function loginPassEmpty() {

    return {
        type: LOGIN_EMPTY
    }
}


/**
 * [登录密码判空]
 * @param  {[type]} name [description]
 * @return {[type]} name [description]
 */
export const LOGIN_ERROR_REMOVE = 'LOGIN_ERROR_REMOVE';
export function loginErrorRemove() {

    return {
        type: LOGIN_ERROR_REMOVE
    }
}
