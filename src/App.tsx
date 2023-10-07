import React, { useEffect, useRef, useState } from 'react';

import './App.css';

import Category from './components/CategoryComponent/Category';
import Header from './components/HeaderComponent/Header';

function App() {

  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number,
    startY: number,
    lastX: number,
    lastY: number
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  })
  const [style, setStyle] = useState({})


  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current;


    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    }

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    }

    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    const cleanup = () => {
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }

    return cleanup;
  }, [])


  const handleScale = (scale: number) => {
    setStyle({ ...style, transform: `scale(${scale})` })

  };

  const handleCenter = () => {
    boxRef.current?.style.setProperty('top', '50%')
    boxRef.current?.style.setProperty('left', '50%')

  };


  return (
    <>
      <div ref={containerRef} className="main" >
        <Header onScale={handleScale} onCenter={handleCenter} />
        <div ref={boxRef} className="box" style={style}>
          <Category name='categories' level={0} />
        </div>
      </div>
    </>

  );
}

export default App;
