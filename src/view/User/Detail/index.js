import React from 'react';
import {connect} from 'react-redux';
import './index.less';
import { Table, Tag, Spin, Button,message,Carousel,Image} from 'antd';
import {clearHotList} from "../../../actions/apmAction"
import demoApi from '../../../api/index'


class GoodDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info:'login',
      tableData:[],
      loading:false,
      goodsDetail:null
    }
  }

  componentWillMount(){
    if (this.props.location.state === undefined || this.props.location.state.id === undefined) {
      message.error('商品不存在');
    } else {
      const good_id = this.props.location.state.id;
      this.getGoodDetail(good_id)
    }
  }


  componentDidMount(){

  }

  getGoodDetail = (id) => {
    demoApi.goodDetail({goods_id:id}).then(res => {
      console.log('1203',res)
      if(res){
        this.setState({goodsDetail:res})
      }
      
    })
  }

  render(){
    const {loading,goodsDetail} = this.state;
    return(
      <Spin spinning={loading}>
        <div className='warp-container'>
            <div className='content-container'>
              <div className='good-info-container'>
                {
                  goodsDetail&&goodsDetail.video?
                  <video src={goodsDetail.video} className='good-video' autoplay controls></video>:null
                }
                
                 <Carousel autoplay style={{width:'400px',height:'auto'}}>
                  {
                    goodsDetail&&goodsDetail.picture&&goodsDetail.picture.length ? 
                      goodsDetail.picture.map((g,gIndex) => {
                        return (
                          <div key={gIndex} style={{border:'1px solid #000'}}>
                            <Image src={g} width={'400px'}/>
                          </div>
                        )
                      })
                    :null
                  }
                </Carousel>
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


export default connect(mapStateToProps,mapDispatchToProps)(GoodDetail)