import React from 'react'
import backgound from '../../public/assets/images/bg-image.webp'
import Hero from '../components/home/Hero'
import Galaxy from '../components/home/Galaxy'
import Tokyo from '../components/home/Tokyo'
import Journey from '../components/home/Journey'
import VideoFrame from '../components/home/VideoFrame'
import Token from '../components/home/Token'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='' style={{ backgroundImage: `url(${backgound})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Galaxy />
        <Tokyo />
        <Journey />
        <VideoFrame />
        <Token />
      </div>
    </>
  )
}

export default Home