import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MusicOps from './components/PlayingFeatures/MusicOps';
import MusicPlayingDisplay from './components/PlayingFeatures/MusicPlayingDisplay';
import MusicTrackVolume from './components/PlayingFeatures/MusicTrackVolume';
import {
   loadTrack,
} from './reducers/trackListReducer';

function App() {
   const {
      // music_lists,
      playing_music,
      success,
      isPlayingTrack,
   } = useSelector(state => state.Music)
   const dispatch = useDispatch()
   const track_index = 0
   const track_audio = useRef(null)
   // 
   // eslint-disable-next-line react-hooks/exhaustive-deps
   // const sliderHandler = () => {
   //    let seekPosition = 0
   //    if (!isNaN(track_audio.current.duration)) {
   //       seekPosition = (track_audio.current.currentTime * (100 / track_audio.current.duration)).toFixed(2)
   //       setSliderTrack(seekPosition)
   //    }
   // }
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
      <div className="App">
         <main>
            testing
         </main>
         <header className="App-header">
            <audio ref={track_audio} src={playing_music.music}></audio>
            <MusicPlayingDisplay trackDisplay={playing_music} />
            <MusicTrackVolume
               curr_track={track_audio}
            />
            <MusicOps
               curr_track={track_audio}
            />
         </header>
      </div>
   );
}

export default App;
