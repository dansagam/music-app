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
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
   clearSuccess,
   nextTrack,
   pauseTrack,
   playTrack,
   prevTrack,
   randomTrack
} from '../../../reducers/trackListReducer'
// import { nextTrack } from '../reducers/trackListReducer'

const MusicOps = ({
   onNextTrackHandler,
   onPrevTrackHandler,
   onShuffleTrackHandler,
   onRepeatTrackHandler,
   onPlayTrackHandler,
   onPauseTrackHandler,
   onPlayPauseTrackHandler,
   curr_track

}) => {
   const dispatch = useDispatch()
   const {  /** playing_music,  */
      success,
      music_lists,
      isRandomStatus,
      isPlayingTrack
   } = useSelector(state => state.Music)
   const [isRandom, setIsRandom] = useState(false)
   const [isPlaying, setIsPlaying] = useState(false)
   const [track_index, setTrackIndex] = useState(0)
   const shuffleTrackHandler = () => {
      setIsRandom(!isRandom)
      dispatch(randomTrack(!isRandom))
   }
   const playTrackHandler = () => {
      dispatch(clearSuccess())
      dispatch(playTrack())
   }
   const pauseTrackHandler = () => {
      dispatch(clearSuccess())
      dispatch(pauseTrack())
      curr_track.current.pause()
   }
   const playPauseTrackHandler = () => {
      isPlaying ? pauseTrackHandler() : playTrackHandler()
   }
   const nextTrackHandler = () => {
      dispatch(clearSuccess())
      let track_value = track_index
      if (track_index < music_lists.length - 1 && isRandomStatus === false) {
         setTrackIndex(track_index + 1)
         track_value += 1
         dispatch(nextTrack(track_value))
      } else if (track_index < music_lists.length - 1 && isRandomStatus === true) {
         let randomNumber = Number.parseInt(Math.random() * music_lists.length)
         while (randomNumber === track_index) {
            randomNumber = Number.parseInt(Math.random() * music_lists.length)
         }
         setTrackIndex(randomNumber)
         track_value = randomNumber
         dispatch(nextTrack(track_value))
      } else {
         track_value = 0
         setTrackIndex(0)
         dispatch(nextTrack(0))
      }
   }
   const prevTrackHandler = () => {
      let track_value = track_index
      if (track_index > 0) {
         setTrackIndex(track_index - 1)
         track_value -= 1
         dispatch(prevTrack(track_value))
      } else {
         track_value = music_lists.length - 1
         setTrackIndex(track_value)
         dispatch(prevTrack(track_value))
      }
   }
   const repeatTrackHandler = () => {

   }
   useEffect(() => {
      if (success.nextTrackSucccess
         || success.prevTrackSuccess
         || success.playTrackSuccess) {
         // loadTrack(playing_music)
         curr_track.current.play()
         curr_track.current.onended = nextTrackHandler
      } else {
         curr_track.current.pause()

      }
      if (isPlayingTrack) {
         setIsPlaying(true)
      } else {
         setIsPlaying(false)
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isPlayingTrack, success])
   return (
      <div>
         <span onClick={shuffleTrackHandler}>
            <FontAwesomeIcon icon={faRandom} />
         </span>
         <span onClick={prevTrackHandler}>
            <FontAwesomeIcon icon={faFastBackward} />
         </span>
         <span onClick={playPauseTrackHandler}>
            <FontAwesomeIcon icon={isPlayingTrack ? faPauseCircle : faPlayCircle} />
         </span>
         <span onClick={nextTrackHandler}>
            <FontAwesomeIcon icon={faFastForward} />
         </span>
         <span onClick={repeatTrackHandler}>
            <FontAwesomeIcon icon={faCircleNotch} />
         </span>
         <span></span>
         <span></span>
      </div>
   )
}

export default MusicOps
