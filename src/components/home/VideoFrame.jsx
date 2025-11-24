import React, { useState, useRef } from 'react'
import Player from '@vimeo/player';

const VideoFrame = () => {

    const iframeRef = useRef(null);
    const [isPlay, setIsPlay] = useState(false);

    const handlePlay = () => {
        setIsPlay(true);

        // Change iframe src to include autoplay + unmuted
        iframeRef.current.src =
            "https://player.vimeo.com/video/1011759662?autoplay=1&muted=0";

        // Initialize player AFTER src changes
        setTimeout(() => {
            const player = new Player(iframeRef.current);
            player.setVolume(1);
            player.play();
        }, 200);
    };

    return (
        <div id='video-frame' className='py-20 border-b border-b-[#555] mb-20'>
            <div className='content-wrap mx-auto lg:h-[670px] md:h-[560px] h-[280px] relative'>

                <iframe
                    ref={iframeRef}
                    className='w-full h-full left-0 top-0 absolute drop-shadow-[0_0_10px_rgba(255,54,215,.5019607843)]'
                    allow="autoplay; fullscreen"
                    src="https://player.vimeo.com/video/1011759662" // initial
                ></iframe>

                {!isPlay && (
                    <>
                        <div className="bg-[url('https://me3.io/video/bg.png')] w-full h-full absolute bg-center bg-no-repeat bg-cover z-1"></div>

                        <div
                            onClick={handlePlay}
                            className="w-full h-full absolute top-0 left-0 flex justify-center items-center z-2 cursor-pointer"
                        >
                            <div className='bg-[#ff36d7] rounded-full p-3 relative'>
                                <div className='absolute w-24 h-24 border-2 border-black left-1/2 top-1/2 -translate-1/2 rounded-full'></div>
                                <div className='border-[25px] border-transparent border-l-[36px] border-l-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ml-4'></div>
                                <svg className='animate-rotate' width="170" height="170" viewBox="0 0 170 170">
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M85,85 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
                                        />
                                    </defs>
                                    <text className='text-sm font-arial font-bold tracking-[3.8px] ' fontSize="12" fill="#000000">
                                        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                            PlayVideo-PlayVideo-PlayVideo-PlayVideo-
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default VideoFrame
