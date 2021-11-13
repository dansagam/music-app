import React from 'react'

const MusicPlayingDisplay = ({ trackDisplay }) => {
   return (
      <div>
         <div><img src={trackDisplay.img} alt="" /></div>
         <div></div>
         <div>{trackDisplay.name}</div>
         <div>{trackDisplay.artist}</div>
      </div>
   )
}

export default MusicPlayingDisplay
