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
import React from 'react'
import { useSelector } from 'react-redux'
// import { nextTrack } from '../reducers/trackListReducer'

const MusicOps = ({
   onNextTrackHandler,
   onPrevTrackHandler,
   onShuffleTrackHandler,
   onRepeatTrackHandler,
   onPlayTrackHandler,
   onPauseTrackHandler,
   onPlayPauseTrackHandler

}) => {
   // let track_index = 0
   // const dispatch = useDispatch()
   const {  /**music_lists, playing_music, success, */
      isPlayingTrack
   } = useSelector(state => state.Music)
   // console.log(playing_music)
   // const [isRandom, setIsRandom] = useState(false)
   // const [isPlaying, setIsPlaying] = useState(false)
   // let track_audio = new Audio(playing_music.music)
   // const nextTrackHandler = () => {
   //    if (track_index < music_lists.length - 1 && isRandom === false) {
   //       track_index += 1
   //       console.log(track_index)
   //       dispatch(nextTrack(track_index))
   //    } else if (track_index < music_lists.length - 1 && isRandom === true) {
   //       let randomNumber = Number.parseInt(Math.random() * music_lists.length)
   //       track_index = randomNumber
   //       dispatch(nextTrack(track_index))
   //    }
   // }
   // const loadTrack = (song) => {
   //    track_audio.src = song.music
   //    track_audio.load()
   //    // track_audio.onended = nextTrackHandler

   // }
   // const playTrack = () => {
   //    track_audio.play()
   //    setIsPlaying(true)

   // }
   // const pauseTrack = () => {
   //    track_audio.pause(true)
   //    setIsPlaying(false)
   // }
   // const pausePlayTrack = () => {
   //    // setIsPlaying(!isPlaying)
   //    isPlaying ? pauseTrack() : playTrack()
   //    // isPlaying ? track_audio.play() : track_audio.pause()
   // }

   // loadTrack(playing_music)
   // useEffect(() => {
   //    if (success.nextTrackSucccess) {

   //       playTrack()
   //    }
   //    if (!isPlaying) {
   //       pauseTrack()
   //    }
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [isPlaying])
   return (
      <div>
         <span onClick={onShuffleTrackHandler}>
            <FontAwesomeIcon icon={faRandom} />
         </span>
         <span onClick={onPrevTrackHandler}>
            <FontAwesomeIcon icon={faFastBackward} />
         </span>
         <span onClick={onPlayPauseTrackHandler}>
            <FontAwesomeIcon icon={isPlayingTrack ? faPauseCircle : faPlayCircle} />
         </span>
         <span onClick={onNextTrackHandler}>
            <FontAwesomeIcon icon={faFastForward} />
         </span>
         <span onClick={onRepeatTrackHandler}>
            <FontAwesomeIcon icon={faCircleNotch} />
         </span>
         <span></span>
         <span></span>
         {/* <audio
            src={playing_music.music}
            onLoad={true}>
         </audio> */}
      </div>
   )
}

export default MusicOps
