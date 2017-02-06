var express = require('express');
var router = express.Router();
var path = require('path');

const defaultJson = {
    "status": 200,
    "code": 0,
    "message": "success"
}

router.get('/*', function(req, res, next) {
    if (req.url.split('/')[1] == 'api') {
        next();
    }
    else if (req.url.split('/')[1] == 'statics') {
        res.sendFile(path.join(__dirname, './src' + req.url));
    }
    else {
        res.sendFile(path.join(__dirname, './src/index.html'));
    }
}).post('/api/getCityList', function(req, res) {
    return res.json({
        "status": 200,
        "code": 0,
        "message": "success",
        "data": [
            {
              id: 1,
              name: '广东省'
            },
            {
              id: 2,
              name: '湖南省'
            }
        ]
    });
}).post('/api/getTvstationList', function(req, res) {
    return res.json({
        "status": 200,
        "code": 0,
        "message": "success",
        "data": [
            {
              id: 1,
              name: '韶关'
            },
            {
              id: 2,
              name: '广州'
            },
            {
              id: 3,
              name: '深圳'
            }
        ]
    });
}).post('/api/getChannelList', function(req, res) {
    return res.json({
        "status": 200,
        "code": 0,
        "message": "success",
        "data": [
            {
              id: 1,
              name: '乐昌'
            },
            {
              id: 2,
              name: '乳源'
            },
            {
              id: 3,
              name: '南雄'
            }
        ]
    });
}).post('/api/getProgramList', function(req, res) {
    return res.json({
        "status": 200,
        "code": 0,
        "message": "success",
        "data": [
            {
              id: 1,
              name: '秀水'
            },
            {
              id: 2,
              name: '梅花'
            },
            {
              id: 3,
              name: '坪石'
            }
        ]
    });
}).post('/api/login', function(req, res) {
    console.log(req.body);
    var flag = false;
    res.json({
      status: 'ok'
    })
    // if(req.body.loginType == 1) {
    //     if(req.body.loginId == 1 && req.body.password == '123') {
    //         flag = true;
    //     }
    // }
    // else if(req.body.loginType == 2) {
    //     if(req.body.loginId == 2 && req.body.password == '123') {
    //         flag = true;
    //     }
    // }
    // else {
    //     if(req.body.loginId == 3 && req.body.password == '123') {
    //         flag = true;
    //     }
    // }
    // if(flag){
    //     return res.json({
    //         "status": 200,
    //         "code": 0,
    //         "message": "success",
    //         "data": {
    //             status: 'success',
    //             statusName: '登录成功'
    //         }
    //     });
    // }
    // else{
    //     return res.json({
    //         "status": 200,
    //         "code": 0,
    //         "message": "success",
    //         "data": {
    //             status: 'error',
    //             statusName: '密码输入不正确'
    //         }
    //     });
    // }
});

module.exports = router;