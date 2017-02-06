import React, {Component, PropTypes} from 'react';
import { browserHistory } from 'react-router';
import { Menu,Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);        
    }

    handleClick(e) {        
        browserHistory.push(e.key);
        this.props.defaultNavItem = e.key;   
    }

    render() {
        const { defaultNavItem } = this.props;

        return (
            <div>
                <Menu onClick={this.handleClick}
                  className="navbar-menu"
                  style={{background:'none', color:'#aaa', border:'0',marginTop:'10px'}}
                  onOpen={this.onToggle}
                  onClose={this.onToggle}
                  defaultOpenKeys={['sub']}
                  selectedKeys={[defaultNavItem]}
                  mode="inline"
                >
                    <Menu.Item key="/home" style={{height:'50px',lineHeight:'50px',border:0}}>
                        <Icon type="home" />
                        <span style={{marginLeft:'8px'}}>节目清单</span>
                    </Menu.Item>
                    <SubMenu key="sub" title={<span><Icon type="setting" /><span style={{marginLeft:'8px'}}>系统设置</span></span>}>
                        <Menu.Item key="/accoutsetting" style={{height:'50px',lineHeight:'50px',border:0}}>
                            <span style={{marginLeft:'20px'}}>账号设置</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                    
                
            </div>
        )
    }
}

NavBar.PropTypes = {
    defaultNavItem: PropTypes.string.isRequired
}

export default NavBar;