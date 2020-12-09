import { observable, action } from "mobx";

class AccountStore {
  @observable isLoading = true;
  @observable accountList = [];
  @observable activeAccount = {};
  @observable userList = [
    {id:'1',name:'一号'},
    {id:'2',name:'二号'},
    {id:'3',name:'三号'},
  ];
  @observable activeUser = {};
  

  @action setActiveUser(id) {
    this.activeUser = this.userList.find(item => {
      return id == item.id;
    });
  }

  
}

const accountStore = new AccountStore();

export default accountStore;
