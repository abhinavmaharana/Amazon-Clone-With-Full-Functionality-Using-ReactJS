import React from 'react';
import VideoPlayer from 'react-video-js-player';
import "./Trailer"

function Trailer() {
    const videoSrc = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4";
    return (
        <div className="trailer">
            <VideoPlayer
                src={videoSrc}
                width="1499"
                height="420"
                autoplay="true"
            />
        </div>
    )
}

export default Trailer
