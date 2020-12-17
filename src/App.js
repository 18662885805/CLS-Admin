import React from 'react';
import { Layout } from "antd";
import {
  Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import './App.less';
import Login from './view/Login'
import Homepage from './view/Homepage'
import Worker from './view/User/Worker'
import GoodDetail from './view/User/Detail'
import ReduxPage from './view/User/ReduxPage'
import BlackPage from './view/User/Black'
import { createBrowserHistory,createHashHistory } from 'history';
import CustomHeader from "./component/CustomHeader";
import SideBar from "./component/SideBar";
import {Provider} from 'react-redux';
import store from './reducers/index';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
const { Content, Footer } = Layout;

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
  // Key can be whatever you want
  routing: routingStore,
  // ...other stores
};

const history = syncHistoryWithStore(browserHistory, routingStore);


class App extends React.Component {
  componentDidMount(){

  }

  logout = () => {
    this.props.history.push({ pathname: '/login'})
  }

  render(){
    //浏览器路由模式
    //const history = createBrowserHistory();
    //Hash路由模式
    //const history = createHashHistory();

    return(
      <Provider store={store}>
        <Router history={history}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path="/"   render={()=> (
            <Layout>
              <CustomHeader history={history}/>
              <Layout>
                <SideBar />
                <Layout style={{ padding: '0' }}>
                  <Content style={{background:'ghostwhite'}}>
                    <Switch>
                      <Route path='/' component={Homepage} exact/>
                      <Route path='/worker' component={Worker} exact/>
                      <Route path='/redux' component={ReduxPage} exact/>
                      <Route path='/good_detail' component={GoodDetail} exact/>
                      <Route path='/black' component={BlackPage} exact/>
                    </Switch> 
                  </Content>
                  <Footer style={{ textAlign: 'center' }}>CLS-Admin ©2020 Created by JiangMinYu@cls</Footer>
                </Layout>
              </Layout>
            </Layout>
          )}
          />
        </Switch>
      </Router>
    </Provider>
      
    )
  }
}

export default App;