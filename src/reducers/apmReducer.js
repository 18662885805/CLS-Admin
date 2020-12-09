import CommonUtil from "../utils/common";
import {GET_APM_RECOMMEND_LIST,GET_APM_HOT_LIST,CLEAR_APM_HOT_LIST} from "../actions/apmAction"
const _util = new CommonUtil();


const initialState = {
  recommend_list:[],
  hot_list:[]
};

export const apmReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_APM_RECOMMEND_LIST:{
      return _util.updateObject(state, {recommend_list:action.recommend_list});
    }

    case GET_APM_HOT_LIST:{
      return _util.updateObject(state, {hot_list:action.hot_list});
    }

    case CLEAR_APM_HOT_LIST:{
      return _util.updateObject(state, {hot_list:[]});
    }

    default:
      return state;
  }
};