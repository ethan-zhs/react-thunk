import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Select, Button, Row, Col } from 'antd';
import { getCityList, getTvstationList, getChannelList, getProgramList, loginPassEmpty, login, loginErrorRemove } from '../../models/login/actions'

import './login.css';

const Option = Select.Option;
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleTvstationChange = this.handleTvstationChange.bind(this);
        this.handleChannelChange = this.handleChannelChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            selectValidateMsg: '',
        }
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.props.getCityList();
    }

    /**
     * [城市选择]
     * @param {[string]} value [城市key]
     * @return {[type]} name [description]
     */
    handleCityChange(value) {   
        this.setState(Object.assign({}, this.state, {selectValidateMsg: ''}));
        this.props.getTvstationList(value);
    }

    /**
     * [电视台选择]
     * @param {[string]} value [电视台key]
     * @return {[type]} name [description]
     */
    handleTvstationChange(value) {
        this.setState(Object.assign({}, this.state, {selectValidateMsg: ''}));
        this.props.getChannelList(value);
    }

    /**
     * [频道选择]
     * @param {[string]} value [频道key]
     * @return {[type]} name [description]
     */
    handleChannelChange(value) {
        this.props.getProgramList(value);
    }

    /**
     * [修改密码框内容]
     * @param {[type]} name [description]
     * @return {[type]} name [description]
     */
    handleInputChange() {
        this.props.loginErrorRemove();
    }

    /**
     * [提交登录信息]
     * @param {[type]} name [description]
     * @return {[type]} name [description]
     */
    handleSubmit() {
        const fieldsValue = this.props.form.getFieldsValue();
        let loginType = 1;
        let loginId = fieldsValue.tvstation;

        this.setState(Object.assign({}, this.state, {selectValidateMsg: ''}));
        if(fieldsValue.city == undefined){
            return this.setState(Object.assign({}, this.state, {selectValidateMsg: '请选择城市'}));
        }
        else if(fieldsValue.tvstation == undefined){
            return this.setState(Object.assign({}, this.state, {selectValidateMsg: '请选择一个频道'}));
        }
        else if(fieldsValue.password == undefined || fieldsValue.password == ''){
            this.props.loginPassEmpty();
        }
        else{
            if(fieldsValue.channel != undefined){
                loginType = 2;
                loginId = fieldsValue.channel;
            }
            if(fieldsValue.program != undefined){
                loginType = 3;
                loginId = fieldsValue.program;
            }
            this.props.login(loginType, loginId, fieldsValue.password);
        }
    }

    render() {
        const { city, tvstation, channel, program, loginMsg  } = this.props;
        const { getFieldProps } = this.props.form;

        const cityOption = city ? city.map(item => <Option key={item.id}>{item.name}</Option>) : null;
        const tvstationOption = tvstation ? tvstation.map(item => <Option key={item.id}>{item.name}</Option>) : null;
        const channelOption = channel ? channel.map(item => <Option key={item.id}>{item.name}</Option>) : null;
        const programOption = program ? program.map(item => <Option key={item.id}>{item.name}</Option>) : null;

        return (
            <div className="login-container">
                <div className="login-content">
                    <Form horizontal form={this.props.form}>
                        <h1>react-redux thunk</h1>
                        <div className="login-form-box">
                            <label>选择账号<span className="login-select-validate">{this.state.selectValidateMsg}</span></label>
                            <Row>
                                <Col span="12">
                                    <Select className="login-select"
                                        placeholder="一级分类"
                                        {...getFieldProps('city',{
                                            onChange: this.handleCityChange
                                        })}
                                    >
                                        {cityOption}
                                    </Select>
                                </Col>
                                <Col span="12">
                                    <Select className="login-select ml6"
                                        placeholder="二级分类"
                                        {...getFieldProps('tvstation',{
                                            onChange: this.handleTvstationChange
                                        })}
                                    >
                                        {tvstationOption}
                                    </Select>
                                </Col>
                            </Row>
                            <Row className="mt30">
                                <Col span="12">
                                    <Select className="login-select"
                                        placeholder="三级分类"
                                        {...getFieldProps('channel',{
                                            onChange: this.handleChannelChange
                                        })}
                                    >
                                        {channelOption}
                                    </Select>
                                </Col>
                                <Col span="12">
                                    <Select className="login-select ml6"
                                        placeholder="四级分类"
                                        {...getFieldProps('program')}
                                    >
                                        {programOption}
                                    </Select>
                                </Col>
                            </Row>

                            <label className="mt30">密码登录</label>
                            <FormItem
                                hasFeedback
                                validateStatus={loginMsg.status}
                                help={loginMsg.message}                                
                            >
                                <Input type="password" className="login-pass-input"  id="error" 
                                    {...getFieldProps('password',{
                                        onChange: this.handleInputChange
                                    })}
                                />
                            </FormItem>

                            <Button className="btn-red login-btn" onClick={this.handleSubmit}>登&nbsp;&nbsp;&nbsp;录</Button>
                        </div>  
                    </Form>                    
                </div>
                 
            </div>
        )
    }
}

Login = Form.create()(Login);

//组件传参验证
Login.PropTypes = {
    city: PropTypes.array.isRequired,
    tvstation: PropTypes.array.isRequired,
    channel: PropTypes.array.isRequired,
    program: PropTypes.array.isRequired,
    loginMsg: PropTypes.object.isRequired,
}

//store state to props func
function mapStateToProps(state) {
    return {
        city: state.login.loginInit.city,
        tvstation: state.login.loginInit.tvstation,
        channel: state.login.loginInit.channel,
        program: state.login.loginInit.program,
        loginMsg: state.login.loginInit.loginMsg,
    }
}

Login = connect(mapStateToProps,{
    getCityList,
    getTvstationList, 
    getChannelList, 
    getProgramList,
    loginPassEmpty,
    login,
    loginErrorRemove
})(Login);

export default Login;