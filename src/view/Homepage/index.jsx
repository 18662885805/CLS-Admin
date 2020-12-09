import React from 'react';
import { Button,Card } from 'antd';
import './index.less';
//引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
//引入折线图,折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/chart/line'; 
//引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
import CommonUtil from "../../utils/common";

const _util = new CommonUtil();

class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      info:'login'
    }
  }

  componentWillMount(){
    _util.checkLoginState(this);
  }


  componentDidMount(){
  }

  getOption =()=> {
    let option = {
      title:{
        text:'折线图',
        x:'center'
      },
      tooltip:{
        trigger:'axis',
      },
      xAxis:{
        data:['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'OFO订单量',
          type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
          data:[1000,2000,1500,3000,2000,1200,800]
        }
      ]
    }
   return option
  }

  chooseUser = () => {
    
  }

  render(){
    return(
      <div className='warp-container'>
        <h1>homepage</h1>
        <p>{`当前环境:${process.env.NODE_ENV}`}</p>
        <Button onClick={this.chooseUser}>Mobx</Button>
        <Card title="折线图表" bodyStyle={{width:'100%'}} style={{width:'900px'}}>
            <ReactEcharts option={this.getOption()} theme="Imooc"  style={{height:'400px'}}/>
        </Card>

      </div>
    )
  }
}


export default Homepage