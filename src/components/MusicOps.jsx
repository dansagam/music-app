import {
   faFastBackward,
   faFastForward,
   faPlayCircle,
   faRandom,
   faPauseCircle,
   faCircleNotch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom as faRandomRegular } from '@fortawesome/free-regular-svg-icons'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const MusicOps = () => {

   const music = useSelector(state => state.Music)
   console.log(music)
   const [isRandom, setIsRandom] = useState(false)
   const [isPlaying, setIsPlaying] = useState(false)
   const nextTrack = () => {

   }
   const prevTrack = () => {

   }
   const playTrack = () => {
      setIsPlaying(true)

   }
   const pauseTrack = () => {
      setIsPlaying(false)

   }
   const shuffleTrack = () => {
      setIsRandom(!isRandom)

   }
   const repeatTrack = () => {

   }
   const pausePlayTrack = () => {
      isPlaying ? pauseTrack() : playTrack()
   }
   return (
      <div>
         <span onClick={shuffleTrack}>
            <FontAwesomeIcon icon={faRandom} />
         </span>
         <span onClick={prevTrack}>
            <FontAwesomeIcon icon={faFastBackward} />
         </span>
         <span onClick={pausePlayTrack}>
            <FontAwesomeIcon icon={isPlaying ? faPauseCircle : faPlayCircle} />
         </span>
         <span onClick={nextTrack}>
            <FontAwesomeIcon icon={faFastForward} />
         </span>
         <span onClick={repeatTrack}>
            <FontAwesomeIcon icon={faCircleNotch} />
         </span>
         <span></span>
         <span></span>
         <audio src="">ddd</audio>
      </div>
   )
}

export default MusicOps
