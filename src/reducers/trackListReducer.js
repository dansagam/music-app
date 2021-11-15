import { createSlice } from '@reduxjs/toolkit'

export const trackListReducer = createSlice({
   name: 'music',
   initialState: {
      music_lists: [
         {
            img: 'images/stay.png',
            name: 'Stay',
            artist: 'The Kid LAROI, Justin Bieber',
            music: 'music/stay.mp3'
         },
         {
            img: 'images/fallingdown.jpg',
            name: 'Falling Down',
            artist: 'Wid Cards',
            music: 'music/fallingdown.mp3'
         },
         {
            img: 'images/faded.png',
            name: 'Faded',
            artist: 'Alan Walker',
            music: 'music/Faded.mp3'
         },
         {
            img: 'images/ratherbe.jpg',
            name: 'Rather Be',
            artist: 'Clean Bandit',
            music: 'music/Rather Be.mp3'
         }
      ],
      playing_music: {
         img: '',
         name: '',
         artist: '',
         music: ''
      },
      success: {
         nextTrackSucccess: false,
         prevTrackSuccess: false,
         playTrackSuccess: false,
         pauseTrackSuccess: false,
         repeatTrackSuccess: false
      },
      isPlayingTrack: false,
      isRandomStatus: false
   },
   reducers: {
      clearSuccess: (state, action) => {
         return {
            ...state,
            success: {
               nextTrackSucccess: false,
               prevTrackSuccess: false,
               playTrackSuccess: false,
               pauseTrackSuccess: false,
               repeatTrackSuccess: false
            }
         }
      },
      randomTrack: (state, action) => {
         return {
            ...state,
            isRandomStatus: action.payload
         }
      },
      loadTrack: (state, action) => {
         return {
            ...state,
            playing_music: state.music_lists[action.payload]
         }
      },
      prevTrack: (state, action) => {
         return {
            ...state,
            isPlayingTrack: true,
            playing_music: state.music_lists[action.payload],
            success: {
               prevTrackSuccess: true
            }
         }
      },
      nextTrack: (state, action) => {
         return {
            ...state,
            isPlayingTrack: true,
            playing_music: state.music_lists[action.payload],
            success: {
               nextTrackSucccess: true
            }
         }
      },
      playTrack: (state, action) => {
         return {
            ...state,
            isPlayingTrack: true,
            success: {
               playTrackSuccess: true
            }
         }
      },
      repeatTrack: (state, action) => {
         return {
            ...state,
            success: {
               repeatTrackSuccess: true
            }
         }
      },
      pauseTrack: (state, action) => {
         return {
            ...state,
            isPlayingTrack: false,
            success: {
               pauseTrackSuccess: true
            }
         }
      }

   }
})


export const {
   nextTrack,
   clearSuccess,
   prevTrack,
   playTrack,
   pauseTrack,
   repeatTrack,
   loadTrack,
   randomTrack,
} = trackListReducer.actions

export default trackListReducer.reducer