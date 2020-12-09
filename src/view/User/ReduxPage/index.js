import React from 'react';
import {connect} from 'react-redux';
import './index.less';
import { Table, Tag, Spin, Button} from 'antd';
import {clearHotList} from "../../../actions/apmAction"








class ReduxPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info:'login',
      tableData:[],
      loading:false,
    }
  }


  componentDidMount(){

  }

  getApm = () => {
    const {apm} = this.props;
    console.log('123',apm.recommend_list)
  }

  getApmHot = () => {
    const {apm,hot_2} = this.props;
    console.log('123','apm.hot_list---',apm.hot_list)
    console.log('123','hot_2---',hot_2)
  }

  getExchange10 = () => {
    const {stock} = this.props;
    console.log('123',stock.exchange_10_list)
  }

  getTrading10 = () => {
    const {stock} = this.props;
    console.log('123',stock.trading_10_list)
  }

  clearHot = () => {
    this.props.clearHotList();
  }



 

  render(){
    const {loading} = this.state;
    return(
      <Spin spinning={loading}>
        <div className='warp-container'>
            <div className='content-container'>
              <h1>{`Redux Data`}</h1>
              <div className='worker-header'>
                <Button type='primary' onClick={this.getExchange10} style={{marginRight:'10px'}}>换手前10</Button>
                <Button type='primary' onClick={this.getTrading10} style={{marginRight:'10px'}}>股东增持</Button>
                <Button type='primary' onClick={this.getApm} style={{marginRight:'10px'}}>APM Recommend</Button>
                <Button type='primary' onClick={this.getApmHot} style={{marginRight:'10px'}}>APM Hot</Button>
                <Button type='primary' onClick={this.clearHot} style={{marginRight:'10px'}}>清空Hot</Button>
              </div>
            </div>
        </div>
      </Spin>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    hot_2:state.apm.hot_list
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearHotList: () => {
        dispatch(clearHotList())
    },
  }
};


export default connect(mapStateToProps,mapDispatchToProps)(ReduxPage)