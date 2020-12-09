import {actionCreator} from "./actionCreator";

export const GET_APM_RECOMMEND_LIST = 'GET_APM_RECOMMEND_LIST';
export const saveRecommendList = actionCreator(GET_APM_RECOMMEND_LIST,"recommend_list");

export const GET_APM_HOT_LIST = 'GET_APM_HOT_LIST';
export const saveHotList = actionCreator(GET_APM_HOT_LIST,"hot_list");

export const CLEAR_APM_HOT_LIST = 'CLEAR_APM_HOT_LIST';
export const clearHotList = actionCreator(CLEAR_APM_HOT_LIST);