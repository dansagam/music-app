import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MusicOps from './components/MusicOps';
import MusicPlayingDisplay from './components/MusicPlayingDisplay';
import MusicTrackVolume from './components/MusicTrackVolume';
import { clearSuccess, loadTrack, nextTrack, pauseTrack, playTrack, prevTrack } from './reducers/trackListReducer';

function App() {
   const {
      music_lists,
      playing_music,
      success,
      isPlayingTrack
   } = useSelector(state => state.Music)
   const dispatch = useDispatch()
   const [track_index, setTrackIndex] = useState(0)
   const [isRandom, setIsRandom] = useState(false)
   const [isPlaying, setIsPlaying] = useState(true)
   const [sliderTrack, setSliderTrack] = useState(0)
   const [currSec, setCurrSec] = useState(0)
   const [currMinute, setCurrMinute] = useState(0)
   const [totalSec, setTotalSec] = useState(0)
   const [totalMinute, setTotalMinute] = useState(0)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   let track_audio = new Audio(playing_music.music)
   console.log(track_audio)
   function setUpdateInterval() {
      let seekPosition = 0
      if (!isNaN(track_audio.duration)) {
         seekPosition = track_audio.currentTime * (100 / track_audio.duration)
         setSliderTrack(seekPosition)

         let currentMinutes = Math.floor(track_audio.currentTime / 60);
         let currentSeconds = Math.floor(track_audio.currentTime - currentMinutes * 60);
         let durationMinutes = Math.floor(track_audio.duration / 60);
         let durationSeconds = Math.floor(track_audio.duration - durationMinutes * 60);

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
   const playTrackHandler = () => {
      dispatch(clearSuccess())
      dispatch(playTrack())
      track_audio.onplaying = (e) => {
         console.log('you pplaying')
      }
   }
   const pauseTrackHandler = () => {
      dispatch(clearSuccess())
      dispatch(pauseTrack())
      track_audio.pause()
      track_audio.onpause = (e) => {
         console.log('ejweedj')
      }

   }
   const playPauseTrackHandler = () => {
      isPlaying ? pauseTrackHandler() : playTrackHandler()
   }
   const nextTrackHandler = () => {
      let track_value = track_index
      if (track_index < music_lists.length - 1 && isRandom === false) {
         setTrackIndex(track_index + 1)
         track_value += 1
         console.log(track_value)

         dispatch(nextTrack(track_value))
      } else if (track_index < music_lists.length - 1 && isRandom === true) {
         let randomNumber = Number.parseInt(Math.random() * music_lists.length)
         setTrackIndex(randomNumber)
         track_value = randomNumber
         dispatch(nextTrack(track_value))
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
   const shuffleTrackHandler = () => {
      setIsRandom(!isRandom)

   }
   const repeatTrackHandler = () => {

   }
   const sliderHandler = () => {
      let seekPosition = 0
      if (!isNaN(track_audio.duration)) {
         seekPosition = track_audio.currentTime * (100 / track_audio.duration)
         setSliderTrack(seekPosition)
      }

   }
   // const loadTrack = (song) => {
   //    track_audio.src = song.music
   //    track_audio.load()
   // }
   useEffect(() => {
      // setInterval(setUpdateInterval, 1000)
      if (playing_music.music === '') {
         dispatch(loadTrack(track_index))
      } else {
         if (success.nextTrackSucccess
            || success.prevTrackSuccess
            || success.playTrackSuccess) {
            // loadTrack(playing_music)
            track_audio.play()
            setInterval(() => sliderHandler, 1000)
         } else {
            track_audio.pause()
         }

      }
      if (isPlayingTrack) {
         setIsPlaying(true)
      } else {
         setIsPlaying(false)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [playing_music, dispatch, track_index, track_audio, success, isPlayingTrack])
   return (
      <div className="App">
         <main>
            testing
         </main>
         <header className="App-header">
            <MusicPlayingDisplay trackDisplay={playing_music} />
            <MusicTrackVolume
               seekSlider={sliderTrack}
               curr_track={track_audio}
               onSliderHandler={sliderHandler}
               currMinute={currMinute}
               currSec={currSec}
               totalMinute={totalMinute}
               totalSec={totalSec}
            />
            <MusicOps
               onNextTrackHandler={nextTrackHandler}
               onPrevTrackHandler={prevTrackHandler}
               onShuffleTrackHandler={shuffleTrackHandler}
               onRepeatTrackHandler={repeatTrackHandler}
               onPlayTrackHandler={playTrackHandler}
               onPauseTrackHandler={pauseTrackHandler}
               onPlayPauseTrackHandler={playPauseTrackHandler}
            />
         </header>
      </div>
   );
}

export default App;
