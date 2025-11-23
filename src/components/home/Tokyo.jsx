import React from 'react'
import tokyoVideo from '../../../public/assets/videos/tokyoanimate.webm'
import Button from '../Button'

const Tokyo = () => {
    return (
        <div id='tokyo'>
            <div className='content-wrap flex flex-row justify-between items-center'>
                <div className='w-2/5'>
                    <h3 className='sub-title pb-5'>Welcome to Gacha Galaxy</h3>
                    <h2 className='font-cygun font-bold text-6xl text-white leading-16 pb-10'>Immersive <br /> Neo-Tokyo <br /> Gamified City</h2>
                    <p className='font-cygun text-xl font-semibold leading-6 text-white'>Complete Quests & Earn Rewards</p>
                    <p className='font-arial text-lg font-normal leading-8 text-white py-5'>Experience addictive gameplay with Gacha Mechanics</p>
                    <div className='flex flex-row gap-5'>
                        <Button
                            text="PLAY"
                            link="#"
                            animation={true}
                        />

                        <Button
                            text="Partner With Us"
                        />
                    </div>
                </div>
                <div className='w-3/5'>
                    <video autoPlay loop muted src={tokyoVideo} type="video/webm" />
                </div>
            </div>
        </div>
    )
}

export default Tokyo