import React from 'react'
import Youtube from 'react-youtube'
import Style from './VidoPlay.module.scss'
const VidoPlay = ({id}) => {
    return (
        <div className={Style.wrap}>
            <Youtube className={Style.video} videoId={id} />
        </div>
    )
}

export default VidoPlay
