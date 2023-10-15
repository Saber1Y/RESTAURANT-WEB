import React, { useRef, useState } from 'react'
import { images  } from '../../constants';
// import { BsFillPlayFill, BsPauseFill } from 'react-icons';
import { meal } from '../../constants';


const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef();

  const handleVideo = () => {
      setPlayVideo((prevplayVideo) => !prevplayVideo)

      if (playVideo) {
        vidRef.current.pause()
      } else {
        vidRef.current.play()
      }
  }

  return (
    <div>
        <video 
        src={meal} 
        type='video/mp4'
        ref={vidRef}
        loop
        controls={false}
        muted
        /> 

        <div className="app__video-overlay flex__center">
          <div className="app__video-overlay_circle flex__center"  onClick={handleVideo} >

          </div>
        </div>
    </div>
  )
}

export default Intro
