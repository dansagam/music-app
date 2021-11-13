import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faVolumeDown,
   faVolumeUp,
   // faVolumeMute, 
   // faMusic,
   faList,
   faHeart as faHeartSolid,
   faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'

const MusicTrackVolume = ({ curr_track,
   seekSlider,
   onSliderHandler,
   currMinute,
   currSec,
   totalMinute,
   totalSec

}) => {
   const { isPlayingTrack } = useSelector(state => state.Music)
   const [seek_slider, setSeekSlider] = useState(0)
   // const [currSec, setCurrSec] = useState(0)
   // const [currMinute, setCurrMinute] = useState(0)
   // const [totalSec, setTotalSec] = useState(0)
   // const [totalMinute, setTotalMinute] = useState(0)

   // function setUpdateInterval() {
   //    let seekPosition = 0
   //    if (!isNaN(curr_track.duration)) {
   //       seekPosition = curr_track.currentTime * (100 / curr_track.duration)
   //       setSeekSlider(seekPosition)

   //       let currentMinutes = Math.floor(curr_track.currentTime / 60);
   //       let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
   //       let durationMinutes = Math.floor(curr_track.duration / 60);
   //       let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

   //       if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
   //       if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
   //       if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
   //       if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
   //       setCurrSec(currentSeconds)
   //       setCurrMinute(currentMinutes)
   //       setTotalMinute(durationMinutes)
   //       setTotalSec(durationSeconds)
   //    }

   // }
   const volumeHandler = (e) => {

   }
   // const trackSlideHandler = () => {
   //    let seekPosition = 0
   //    if (!isNaN(curr_track.duration)) {
   //       seekPosition = curr_track.currentTime * (100 / curr_track.duration)
   //       setSeekSlider(seekPosition)
   //    }
   // }
   const [isFavourite, setIsFavourite] = useState(false)
   return (
      <div>
         <div>
            <span><FontAwesomeIcon icon={faList} /></span>
            <span onClick={() => setIsFavourite(!isFavourite)}>
               <FontAwesomeIcon icon={isFavourite ? faHeartSolid : faHeart} />
            </span>
            <span><FontAwesomeIcon icon={faPlus} /></span>
         </div>
         <div>
            <div>
               <input
                  type="range"
                  min={0}
                  max={100}
                  value={seekSlider}
                  onChange={onSliderHandler}
               />
            </div>
            <div>
               <span>{`${currMinute}:${currSec}`}</span> : <span> </span>
               <span>{`${totalMinute}:${totalSec}`}</span>
            </div>
         </div>
         <div>
            <FontAwesomeIcon icon={faVolumeDown} />
            <input
               type="range"
               min='0'
               max={100}
               value={0}
               onChange={volumeHandler}
            />
            <FontAwesomeIcon icon={faVolumeUp} />
         </div>
      </div>
   )
}

export default MusicTrackVolume
