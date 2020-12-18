import React,{useState,useEffect,useReducer} from 'react';
import './index.less';
import { Table, Tag, Spin, Button,message,Carousel,Image,Card,Input} from 'antd';
import demoApi from '../../../api/index'


const myReducer = (state, action) => {
  switch(action.type) {
    case('countUp'):
    console.log('action',action)
      return {
        ...state,
        count_num: state.count_num + 1
      }
    default:
      return state
  }
}

const DetailCard = (props) => {
  const [goods_id, setGoodsId] = useState(props.goods_id);
  const [goods_detail, setGoodsDetail] = useState('');
  useEffect(() => {
    console.log('detail_card',props)
    setGoodsId(props.goods_id);
    if(props.goods_id){
      getGoodDetail(props.goods_id)
    }
    
  }, [props.goods_id]);

  function getGoodDetail(id){
    demoApi.goodDetail({goods_id:id}).then(res => {
      if(res){
        setGoodsDetail(res)
      }else{
        message.warning('无商品');
        setGoodsDetail('')
      }
    })
  }
  return(
    <Card title={goods_id ? `商品ID:${goods_id}` : '暂无商品'} style={{ width: 300 }}>
      <p>{goods_detail && goods_detail.title ? `名称:${goods_detail.title}` :'--'}</p>
      <p>{goods_detail && goods_detail.min_price ? `价格:${goods_detail.min_price}` : '--'}</p>
      <p>{goods_detail && goods_detail.code ? `编号:${goods_detail.code}` : '--'}</p>
    </Card>
  )
}

const BlackPage = () => {
  const [count, setCount] = useState(0);
  const [goods_id, setGoodsId] = useState('');
  const [detail_goods_id, setDetailGoodsId] = useState('');
  const [hot_list, setHotList] = useState([]);
  const [state, dispatch] = useReducer(myReducer, { count_num:0 });

  useEffect(() => {
    demoApi.getRecommend().then(res => {
      if(res){
        setHotList(res)
      }
    });
    console.log('componentDidMount')
  }, []);

  //每次更新打印
  useEffect(() => {console.log('render')})

  const handleClick = (val) => {
    setCount(val)
  }

  const clearCount = () => {
    setCount(0)
  }

  function reducerCount(){
    console.log('reducerCount')
    dispatch({type:'countUp'})
  }

  function handleSearch(val){
    setGoodsId(val)
  }

  function handleChangeGood(){
    console.log('goods_id',goods_id)
    if(goods_id){
      setDetailGoodsId(goods_id)
    }else{
      message.warning('请输入商品ID');
    }
  }

  return(
    <div className='warp-container'>
      <div className='content-container'>
        <h1>black</h1>
        <Button type='primary' onClick={() => handleClick(1)}>setNum</Button>
        <Button type='primary' onClick={clearCount} style={{marginLeft:'10px'}}>Clear</Button>
        <Button type='danger' onClick={reducerCount} style={{marginLeft:'10px'}}>{'Reducer +1'}</Button>
        <h1>{`value:${count}`}</h1>
        <h1>{`Reducer_count:${state.count_num}`}</h1>
        <div style={{width:"100%",padding:"20px",marginTop:'20px',border:"1px solid #000"}}>
          <div style={{marginBottom:"20px"}}>
            <Input  style={{width:"200px",marginRight:'25px'}} onChange={(e) => handleSearch(e.target.value)}/>
            <Button type='primary' onClick={handleChangeGood}>Search</Button>
            <span style={{marginLeft:'10px',color:'rgba(0,0,0,0.4)'}}>{'可选: 57,963,127,962,512,66'}</span>
          </div>
          
          <DetailCard goods_id={detail_goods_id}/>
        </div>
        
      </div>
    </div>
  )
}


export default BlackPage