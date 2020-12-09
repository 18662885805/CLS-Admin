import CommonUtil from "../utils/common";
import {GET_EXCHANGE_10,GET_TRADING_10} from "../actions/stockAction"
const _util = new CommonUtil();


const initialState = {
  exchange_10_list:[],
  trading_10_list:[]
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_EXCHANGE_10:{
      return _util.updateObject(state, {exchange_10_list:action.data});
    }

    case GET_TRADING_10:{
      return _util.updateObject(state, {trading_10_list:action.data});
    }

    default:
      return state;
  }
};