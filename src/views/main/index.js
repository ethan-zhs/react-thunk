import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { children } = this.props;
        
        return (
            <div>
                {children}
            </div>
        )
    }
}

//组件传参验证
Main.PropTypes = {
    children: PropTypes.node.isRequired
}

//store state to props func
function mapStateToProps(state) {
    return {
        
    }
}

Main = connect(mapStateToProps,{

})(Main);

export default Main;