// react 以及 react-dom 通过配置别名引入压缩后的文件，
// 使用 uglify-js@2.6.3 进行压缩，效率大大提升
// #issue : https://github.com/mishoo/UglifyJS2/pull/1024
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <span>Hello World</span>,
  document.getElementById('app')
);
