import {useRef, useEffect} from "react"
import './App.css';
import Video from "./Video";

function App() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef)
  })
  
  const handlePlay = () =>{
    videoRef.current.play();
  }

  const handlePause = () =>{
    videoRef.current.pause();
  }

  return (
    <div>
      <Video ref={videoRef}/>
      <button
      onClick={handlePlay}
      >Play</button>

      <button
      onClick={handlePause}
      >Pause</button>
    </div>
  );
}

export default App;
