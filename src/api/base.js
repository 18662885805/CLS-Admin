

var base;
if (process.env.NODE_ENV == 'development') {
  base='/v1'
} else{
  base = 'http://47.95.9.75:8080'
}

export default base;
