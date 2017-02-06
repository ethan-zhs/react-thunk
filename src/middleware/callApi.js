import jQuery from 'jquery';
import {CALL_API} from '../contants/callapi';

function callApi(endpoint, method,  data) {
    var data = data || {};

    return jQuery.ajax({
        type: method || 'post',
        url: endpoint,
        contentType: "application/x-www-form-urlencoded",
        data: typeof data === 'function' ? {} : data
    });
}

export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let {endpoint} = callAPI;
    const {types, method, data} = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }
    const [ requestType, successType, failureType ] = types;

    next(actionWith({type: requestType}));

    return callApi(endpoint, method, data).done(
        response => {
            next(actionWith({
                response,
                type: successType
            }))
        }).fail(
        error => {
            next(actionWith({
                type: failureType
            }))
        });
}
