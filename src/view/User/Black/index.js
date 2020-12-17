import React,{useState,useEffect} from 'react';
import './index.less';
import { Table, Tag, Spin, Button,message,Carousel,Image} from 'antd';
import demoApi from '../../../api/index'




const BlackPage = () => {
  const [count, setCount] = useState(0);
  const [hot_list, setHotList] = useState([]);

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

  return(
    <div className='warp-container'>
      <div className='content-container'>
        <h1>black</h1>
        <Button type='primary' onClick={() => handleClick(1)}>setNum</Button>
        <Button type='primary' onClick={clearCount} style={{marginLeft:'10px'}}>Clear</Button>
        <h1>{`value:${count}`}</h1>

      </div>
    </div>
  )
}
// class BlackPage extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {

//     }
//   }

//   render() {
//     return(
//       <div className='warp-container'>
//           <div className='content-container'>
//           <h1>black</h1>
//           </div>
//       </div>
//     )
//   }
// }


export default BlackPage