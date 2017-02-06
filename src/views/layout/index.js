import React, {Component, PropTypes} from 'react';
import Header from '../../components/header';
import NavBar from '../../components/navbar';

import "../../statics/css/antd.css";
import "./layout.css";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        let pathname = this.props.location.pathname.split('/');
        const defaultNavItem = pathname.slice(0, 4).join('/');   //默认选中导航

        return (
            <div>

                <div className="layout-container">
                    {children}
                </div>                
            </div>
        )
    }
}

Layout.PropTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;