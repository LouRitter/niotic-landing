import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Video() {
const [playing, setPlaying] = useState(true);

const hideVideo = () => (setPlaying(false));

    return (
        <div>
            {
                playing ? (
                    <div className="w-full h-full videocover" >
                        <video playsInline defaultMuted webkit-playsinline autoPlay autoplay="autoplay" muted onEnded={() => hideVideo()}  className="animVideo" >
                            <source src={require('../images/niotic.mp4')} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                    </div>
                ) 
            : "" }
        </div>    
  );
}

export default Video;