import React from 'react';
import './index.less';
import { Button,Input,message  } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import CommonUtil from "../../utils/common";

const _util = new CommonUtil();
class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info:'login',
      account:'',
      password:'',
    }
  }


  componentDidMount(){
    //window.localStorage.removeItem('uid')
    _util.removeStorage('uid')
  }

  handleLogin = () => {
    const {account,password} = this.state;
    if(account == 'admin' && password == 'admin'){
      message.success('登陆成功');
      //window.localStorage.setItem('uid','111')
      _util.setStorage('uid','111')
      setTimeout(() => {
        this.props.history.push({ pathname: '/', state: { id: '123' }})
      },500)
    }else{
      message.error('账号密码错误');
    }
    
  }

  handleInput = (val,field) => {
    this.setState({[field]:val})
  }

  render(){
    return(
      <div>
        <div className='login'>
          <div className='login-box'>
            <p className='login-title'>Login</p>
            <Input 
              size="large" 
              placeholder="账号" 
              prefix={<UserOutlined />} 
              onChange={(e) => this.handleInput(e.target.value,'account')}
            />
            <Input.Password 
              size="large" 
              placeholder="密码" 
              prefix={<LockOutlined />} 
              onChange={(e) => this.handleInput(e.target.value,'password')}
            />
            <Button type='primary' onClick={this.handleLogin} style={{width:'200px'}}>登录</Button>
          </div>
          
        </div>
      </div>
    )
  }
}


export default Login