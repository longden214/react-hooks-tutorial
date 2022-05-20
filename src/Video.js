import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from './videos/video-1.mp4'

function Video(props,ref) {

    const vRef = useRef();

    // chỉ lấy ra 2 method play và pause
    useImperativeHandle(ref,()=>({
        play(){
            vRef.current.play();
        },
        pause(){
            vRef.current.pause();
        }
    }))

    return (
      <video 
        ref={vRef}
        src={video1}
        width='200px'
       ></video>
    );
  }
  
  export default forwardRef(Video);