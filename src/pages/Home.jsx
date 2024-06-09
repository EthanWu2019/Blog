import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicBackground from '../components/DynamicBackground';
import '../styles/Home.css'; // 导入CSS文件

function Home() {
  const [isActive, setIsActive] = useState(false);
  const [clickPosition, setClickPosition] = useState({ top: '50%', left: '50%' });
  const tiaoZhuan = useNavigate();

  function handleClick(event) {
    const clickX = event.clientX;
    const clickY = event.clientY;
    setClickPosition({ top: `${clickY}px`, left: `${clickX}px` });

    setIsActive(true);
    setTimeout(() => {
      tiaoZhuan('/guangchang'); // 确保路径以 '/' 开头
    }, 650); // Match this timeout with the transition duration
  }

  return (
    <div className="center-container">
      <DynamicBackground />
      <div
        className={`overlay ${isActive ? 'active' : ''}`}
        style={{ top: clickPosition.top, left: clickPosition.left }}
      ></div>
      <div className="glass-container">
        <h1 className="white-text">欢迎来到老海绵的博客~~</h1>
      </div>
      <button 
        className="homeButton" 
        onClick={handleClick}
      >
        <p>到我的世界来</p>
      </button>
    </div>
  );
}

export default Home;
