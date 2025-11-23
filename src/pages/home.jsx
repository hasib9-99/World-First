import React from 'react'
import backgound from '../../public/assets/images/bg-image.webp'
import Hero from '../components/home/Hero'
import Galaxy from '../components/home/Galaxy'
import Tokyo from '../components/home/Tokyo'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='' style={{ backgroundImage: `url(${backgound})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Galaxy />
        <Tokyo />
      </div>
    </>
  )
}

export default Home