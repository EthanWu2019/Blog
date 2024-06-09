import React from 'react';

function Nav() {
  console.log('Nav component rendered');
  return (
    <>
    <h2>老海绵的博客</h2>
      <ul>
        <li>首页</li>
        <li>聊天室</li>
        <li>时间线</li>
        <li>资源站</li>
        <li>关于我</li>
      </ul>
    </>
  );
}

export default Nav;
