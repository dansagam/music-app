import React, { useEffect, useState } from 'react'
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
import sliderStyles from '../../../cssModules/PlayingModule/MusicTrackVolume.module.css'

const MusicTrackVolume = ({ curr_track,
   // seekSlider,
   // onSliderHandler,
   // currMinute,
   // currSec,
   // totalMinute,
   // totalSec
}) => {
   // let timerValue = null
   // let timerValue
   const { /**isPlayingTrack, */ success } = useSelector(state => state.Music)
   const [isFavourite, setIsFavourite] = useState(false)
   const [volume, setVolume] = useState(30)
   const [seekSlider, setSliderTrack] = useState(0)
   const [currSec, setCurrSec] = useState(0)
   const [currMinute, setCurrMinute] = useState(0)
   const [totalSec, setTotalSec] = useState(0)
   const [totalMinute, setTotalMinute] = useState(0)

   /**set the slider updater o the volume and the track slide */
   function setUpdateInterval() {
      let seekPosition = 0
      if (!isNaN(curr_track.current.duration)) {
         seekPosition = (curr_track.current.currentTime * (100 / curr_track.current.duration)).toFixed(2)
         setSliderTrack(seekPosition)

         let currentMinutes = Math.floor(curr_track.current.currentTime / 60);
         let currentSeconds = Math.floor(curr_track.current.currentTime - currentMinutes * 60);
         let durationMinutes = Math.floor(curr_track.current.duration / 60);
         let durationSeconds = Math.floor(curr_track.current.duration - durationMinutes * 60);

         if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
         if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
         if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
         if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
         setCurrSec(currentSeconds)
         setCurrMinute(currentMinutes)
         setTotalMinute(durationMinutes)
         setTotalSec(durationSeconds)
      }
   }
   function volumeHandler(e) {
      setVolume(e.target.value)
      curr_track.current.volume = e.target.value / 100
   }
   function volumeIncreaseHandler(e) {
      e.stopPropagation()
      let volumeValue = volume === 100 ? 100 : volume + 4 > 100 ? 100 : volume + 4
      setVolume(volumeValue)
      curr_track.current.volume = volumeValue / 100
   }
   function volumeDecreaseHandler(e) {
      e.stopPropagation()
      let volumeValue = volume === 0 ? 0 : volume - 4 < 0 ? 0 : volume - 4
      setVolume(volumeValue)
      curr_track.current.volume = volumeValue / 100
   }
   const onSliderHandler = (e) => {
      setSliderTrack(e.target.value)
      curr_track.current.currentTime = Number(e.target.value) * (curr_track.current.duration / 100)
   }

   // function cancelTimer() {
   //    if (timerValue !== null) {
   //       clearInterval(timerValue)
   //       timerValue = null
   //    }
   // }
   // function continousVolumeIncrease(e) {
   //    // e.stopPropagation()
   //    const timeValue = setInterval(volumeIncreaseHandler, 1000)
   //    setTimeout(() => { clearInterval(timeValue); alert('dkd') }, 5000)
   // }
   useEffect(() => {
      let intervalId
      if (
         success.nextTrackSucccess
         || success.prevTrackSuccess
         || success.playTrackSuccess) {
         // loadTrack(playing_music)
         intervalId = setInterval(setUpdateInterval, 1000)
      } else {
         clearInterval(setUpdateInterval)

      }
      return () => clearInterval(intervalId)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [success])
   return (
      <div className={sliderStyles.slider_wrapper}>
         <div className={sliderStyles.top_slider}>
            <span><FontAwesomeIcon icon={faList} /></span>
            <span onClick={() => setIsFavourite(!isFavourite)}>
               <FontAwesomeIcon icon={isFavourite ? faHeartSolid : faHeart} />
            </span>
            <span><FontAwesomeIcon icon={faPlus} /></span>
         </div>
         <div className={sliderStyles.timer_slider_container}>
            <div className={sliderStyles.timer_slider}>
               <input
                  type="range"
                  min={0}
                  max={100}
                  value={seekSlider}
                  // readOnly
                  onChange={onSliderHandler}
               />
            </div>
            <div className={sliderStyles.timer_slider_display}>
               <span>{`${currMinute}:${currSec}`}</span>  <span> </span>
               <span>{`${totalMinute}:${totalSec}`}</span>
            </div>
         </div>
         <div className={sliderStyles.slider_container}>
            <span
               onClick={volumeDecreaseHandler}
            >
               <FontAwesomeIcon icon={faVolumeDown} />
            </span>
            <input
               type="range"
               min={0}
               max={100}
               value={volume}
               onChange={volumeHandler}
            />
            <span
               onClick={volumeIncreaseHandler}
            >
               <FontAwesomeIcon icon={faVolumeUp} />
            </span>
         </div>
      </div>
   )
}

export default MusicTrackVolume
