import React, { useRef } from 'react';
import { useElementSize } from './hooks/useElementSize';
import './App.css'; 

const App = () => {
  const boxRef = useRef(null);
  const size = useElementSize(boxRef);

  return (
    <div className="container">
      <h1 className="title">useElementSize Hook</h1>
      <div ref={boxRef} className="box">
        Resize me!
      </div>
      <p className="info">
        Width: {size.width}px, Height: {size.height}px
      </p>
    </div>
  );
};

export default App;
