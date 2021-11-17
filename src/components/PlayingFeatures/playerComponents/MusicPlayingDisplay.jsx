import React from 'react'
import displayStyles from '../../../cssModules/PlayingModule/MusicPlayingDisplay.module.css'

const MusicPlayingDisplay = ({ trackDisplay }) => {
   return (
      <div className={displayStyles.player_display_details}>
         <div className={displayStyles.player_image_display}>
            <img src={trackDisplay.img} alt="" />
         </div>
         <div className={displayStyles.player_detail_space}></div>
         <div className={displayStyles.player_display_name}>{trackDisplay.name}</div>
         <div className={displayStyles.player_artist_display}>{trackDisplay.artist}</div>
      </div>
   )
}

export default MusicPlayingDisplay
