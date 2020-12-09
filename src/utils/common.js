import {
  message,
} from "antd";
class CommonUtil{
  // 向本地存储里放数据
  setStorage(name, data) {
    let jsonString = JSON.stringify(data);
    window.localStorage.setItem(name, jsonString);
  }

  // 从本地存储获取数据
  getStorage(name) {
    let data = window.localStorage.getItem(name);
    if (data && data !== "undefined") {
      // JSON.parse
      return JSON.parse(data);
    } else {
      return "";
    }
  }

   // 删除本地存储
   removeStorage(name) {
    window.localStorage.removeItem(name);
  }

  checkLoginState(that){
    var _that = that;
    if(!window.localStorage.getItem('uid')){
      message.warning('请先登录');
      setTimeout(() => {
        _that.props.history.replace('/login')
      },500)
      
    }
  }


  updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
  };
}

export default CommonUtil;