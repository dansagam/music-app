import React from 'react'
import { useSelector } from 'react-redux'
import displayStyles from '../../../cssModules/PlayingModule/MusicPlayingDisplay.module.css'

const MusicPlayingDisplay = ({ trackDisplay }) => {
   const { isPlayingTrack } = useSelector(state => state.Music)
   return (
      <div className={displayStyles.player_display_details}>
         <div className={!isPlayingTrack
            ? displayStyles.player_image_display
            : displayStyles.player_image_display + " " + displayStyles.rotate}
         >
            <img src={trackDisplay.img} alt="" />
         </div>
         <div className={displayStyles.player_detail_space}></div>
         <div className={displayStyles.player_display_name}>{trackDisplay.name}</div>
         <div className={displayStyles.player_artist_display}>{trackDisplay.artist}</div>
      </div>
   )
}

export default MusicPlayingDisplay
