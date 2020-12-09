import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import './index.less';
import { Table, Tag, Spin, Button} from 'antd';
import demoApi from '../../../api/index'
import {saveRecommendList,saveHotList} from "../../../actions/apmAction"
import {saveExchange10,saveTrading10} from "../../../actions/stockAction"

const cls_columns = [
  {
    title: '名称',
    dataIndex: 'secu_name',
    key: 'secu_name',
    render: text => <a>{text}</a>,
  },
  {
    title: '代码',
    dataIndex: 'secu_code',
    key: 'secu_code',
  },
  {
    title: '市场',
    dataIndex: 'secu_type',
    key: 'secu_type',
    render: text => <Tag color={'green'}>{text}</Tag>,
  },

];

const apm_columns = [
  {
    title: '商品名称',
    dataIndex: 'title',
    key: 'title',
    render: (text,record,index) => {
      const id = record.id ? record.id : null;
      let path = {
        pathname:"/good_detail",
        state:{id:id}
      }
      return(
        <Link to={path}>{text}</Link>
      )
      
    } 
  },
  {
    title: '商品编码',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '最低价',
    dataIndex: 'min_price',
    key: 'min_price',
    render: text => <Tag color={'green'}>{text}</Tag>,
  },

];



class WorkerPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info:'login',
      tableData:[],
      loading:false,
      columns:cls_columns
    }
  }


  componentDidMount(){
    // this.setState({loading:true})
    // demoApi.getstocks({ids:'46097',way:'last_px'}).then(res => {
    //   this.setState({loading:false})
    //   if(res.data&&res.data.length){
    //     this.setState({tableData:res.data})
    //   }
    // })
  }


  getInfo = () => {
    this.setState({loading:true,tableData:[]})
    demoApi.getstocks({ids:'46097',way:'last_px'}).then(res => {
      this.setState({loading:false})
      if(res.data&&res.data.length){
        this.setState({tableData:res.data,columns:cls_columns})
      }
    })
  }

  getApm = () => {
    const {dispatch} = this.props;
    this.setState({loading:true,tableData:[]})
    demoApi.getRecommend().then(res => {
      this.setState({loading:false})
      if(res){
        this.setState({tableData:res,columns:apm_columns})
        dispatch(saveRecommendList(res));
      }
    })
  }

  getApmHot = () => {
    const {dispatch} = this.props;
    this.setState({loading:true,tableData:[]})
    demoApi.getHot().then(res => {
      this.setState({loading:false})
      if(res){
        this.setState({tableData:res,columns:apm_columns})
        dispatch(saveHotList(res));
      }
    })
  }

  getExchange10 = () => {
    const {dispatch} = this.props;
    this.setState({loading:true,tableData:[]})
    demoApi.getExchange10({ids:'19',way:'last_px'}).then(res => {
      this.setState({loading:false})
      if(res.data&&res.data.length){
        this.setState({tableData:res.data,columns:cls_columns})
        dispatch(saveExchange10(res.data));
      }
    })
  }

  getTrading10 = () => {
    const {dispatch} = this.props;
    this.setState({loading:true,tableData:[]})
    demoApi.getTrading10({ids:'16',way:'last_px'}).then(res => {
      this.setState({loading:false})
      if(res.data&&res.data.length){
        this.setState({tableData:res.data,columns:cls_columns})
        dispatch(saveTrading10(res.data));
      }
    })
  }

  render(){
    const {tableData,loading,columns} = this.state;
    return(
      <Spin spinning={loading}>
        <div className='warp-container'>
            <div className='content-container'>
              <h1>数据列表</h1>
              <div className='worker-header'>
                <Button type='primary' onClick={this.getExchange10} style={{marginRight:'10px'}}>换手前10</Button>
                <Button type='primary' onClick={this.getTrading10} style={{marginRight:'10px'}}>股东增持</Button>
                <Button type='primary' onClick={this.getApm} style={{marginRight:'10px'}}>APM Recommend</Button>
                <Button type='primary' onClick={this.getApmHot} style={{marginRight:'10px'}}>APM Hot</Button>
              </div>
              <Table columns={columns} dataSource={tableData} rowKey={record=>record.id} />
            </div>
        </div>
      </Spin>
      
    )
  }
}

const mapStateToProps = (state) => {
  return state
};


export default connect(mapStateToProps)(WorkerPage)