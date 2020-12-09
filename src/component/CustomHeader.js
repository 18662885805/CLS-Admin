import React, { Component } from "react";
import {  Layout } from "antd";


const { Header } = Layout;
class CustomHeader extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  logout = () => {
    this.props.history.push({ pathname: '/login'})
  }

  render() {
    return (
      <Header className="header">
        <div className='h-container'>
          <div className='h-title'>
            {`CLS-Admin(Redux)`}
          </div>
          <div className='h-logout' onClick={this.logout}>
            退出登录
          </div>
        </div>
        
      </Header>
    );
  }
}



export default CustomHeader;
