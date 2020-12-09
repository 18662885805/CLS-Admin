const menu = [
  {
    key:1,
    title:'人员管理',
    icon:'GithubOutlined',
    children:[
      {key:'11',title:'数据列表',link:'/worker'},
      {key:'12',title:'Redux',link:'/redux'},
      {key:'13',title:'黑名单',link:'/homepage'}
    ]
  },
  {
    key:2,
    title:'项目管理',
    icon:'SlackSquareOutlined',
    children:[
      {key:'21',title:'项目列表',link:'/homepage'},
      {key:'22',title:'项目配置',link:'/homepage'},
    ]
  }
];

export default menu;