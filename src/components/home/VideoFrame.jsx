import React from 'react'

const VideoFrame = () => {
    return (
        <div id='video-frame' className='py-20 border-b border-b-[#555] mb-20'>
            <div className='max-w-[1200px] mx-auto h-[670px] relative'>
                <div className='bg-[url("https://me3.io/video/bg.png")] w-full h-full absolute bg-center bg-no-repeat bg-cover'></div>
                <iframe className='w-full h-full left-0 top-0 absolute drop-shadow-[0_0_10px_rgba(255,54,215,.5019607843)]' src='https://player.vimeo.com/video/1011759662' allow="" title="Gacha Galaxy Sizzle Reel"></iframe>
                <div></div>
            </div>
        </div>
    )
}

export default VideoFrame