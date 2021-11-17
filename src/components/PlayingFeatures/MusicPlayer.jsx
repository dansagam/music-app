import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MusicOps from './playerComponents/MusicOps'
import MusicPlayingDisplay from './playerComponents/MusicPlayingDisplay'
import MusicTrackVolume from './playerComponents/MusicTrackVolume'
import {
   loadTrack,
} from '../../reducers/trackListReducer';
import playerStyles from '../../cssModules/PlayingModule/MusicPlayer.module.css'

const MusicPlayer = () => {
   const {
      playing_music,
      success,
      isPlayingTrack,
   } = useSelector(state => state.Music)
   const dispatch = useDispatch()
   const track_index = 0
   const track_audio = useRef(null)
   useEffect(() => {
      let intervalId
      if (playing_music.music === '') {
         dispatch(loadTrack(track_index))
      } else {

         // if (
         //    success.nextTrackSucccess
         //    || success.prevTrackSuccess
         //    || success.playTrackSuccess) {
         // loadTrack(playing_music)
         // setInterval(sliderHandler, 1000)
         // } else {
         // clearInterval(setUpdateInterval)
         //    }
      }
      return () => clearInterval(intervalId)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [playing_music, dispatch, track_index, track_audio, success, isPlayingTrack])

   return (
      <div className={playerStyles.player_wrapper}>
         <audio ref={track_audio} src={playing_music.music}></audio>
         <MusicPlayingDisplay trackDisplay={playing_music} />
         <MusicTrackVolume
            curr_track={track_audio}
         />
         <MusicOps
            curr_track={track_audio}
         />
      </div>
   )
}

export default MusicPlayer
