import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Layout,Menu } from "antd";
import * as Icon from '@ant-design/icons';
import menu from '../utils/router'

const {Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuList:menu
    }
  }

  componentDidMount(){
    console.log(menu)
  }
  renderIcon = (name) => {
    return(
      React.createElement(Icon && Icon[name],{
        style:{fontSize:'16px'}
      })
    )
  }

  render() {
    const {menuList} = this.state;
    return (
      <Sider width={200} className="site-layout-background">
        <div style={{width:'100%',height:'40px',lineHeight:'40px',padding:'0px 34px 0px 24px',background:"#fff"}}>
          <NavLink to='/' style={{color:"#000"}}>首页</NavLink>
        </div>
        <Menu
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
        >
          {menuList&&menuList.length ?
          menuList.map((m,mIndex) => {
            return(
              <SubMenu key={m.key} icon={m.icon ? this.renderIcon(m.icon) :''} title={m.title}>
                {m.children && m.children.length ?
                  m.children.map((c,cIndex) => {
                  return (
                    <Menu.Item key={c.key}>
                      <NavLink to={c.link}>{c.title}</NavLink>
                    </Menu.Item>)
                  })
                :''}
              </SubMenu>
            )
          })
          :''}
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;
