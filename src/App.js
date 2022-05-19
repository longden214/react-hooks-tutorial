import {useState,useRef, useEffect } from "react"
import './App.css';

function App() {
  const [count,setCount] = useState(60)

  const timeId = useRef();
  const h1Ref = useRef();

  useEffect(() =>{
    console.log(h1Ref.current)
  })

  const handleStart = () =>{

    timeId.current && clearInterval(timeId.current)

    timeId.current = setInterval(() =>{
      setCount(prevState => prevState - 1)
    },1000)
  }

  const handleStop = () =>{
    clearInterval(timeId.current);
  }

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button 
      onClick={handleStart}
      >Start</button>

      <button
       onClick={handleStop}
       >Stop</button>
    </div>
  );
}

export default App;
