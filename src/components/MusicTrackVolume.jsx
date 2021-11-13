import React, { useState } from 'react'
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

const MusicTrackVolume = () => {
   const volumeHandler = (e) => {

   }
   const trackSlideHandler = () => {

   }
   const [isFavourite, setIsFavourite] = useState(false)
   return (
      <div>
         <div>
            <span><FontAwesomeIcon icon={faList} /></span>
            <span onClick={() => setIsFavourite(!isFavourite)}>
               <FontAwesomeIcon icon={isFavourite ? faHeartSolid : faHeart} />
            </span>
            <span><FontAwesomeIcon icon={faPlus} /></span>
         </div>
         <div>
            <input type="range" min='0' max={100} value={0} onChange={trackSlideHandler} />
         </div>
         <div><span>0:00</span>  <span>0:00</span></div>
         <div>
            <FontAwesomeIcon icon={faVolumeDown} />
            <input type="range" min='0' max={100} value={0} onChange={volumeHandler} />
            <FontAwesomeIcon icon={faVolumeUp} />
         </div>
      </div>
   )
}

export default MusicTrackVolume
