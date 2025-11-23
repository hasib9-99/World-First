import React from 'react'
import logo from '../../public/assets/images/logo.webp'

const Header = () => {
    return (
        <header className='bg-black absolute w-full top-0 left-0 z-50'>
            <div className='content-wrap py-2 flex row justify-between items-center'>
                <div className='w-1/3'>
                    <img className='lg:w-36 md:w-20' src={logo} alt="Logo" />
                </div>
                <div className='w-1/3'>
                    <div className='w-14 h-4 mx-auto flex flex-col items-center justify-between'>
                        <div className='w-full h-[1px] bg-white'></div>
                        <div className='w-full h-[1px] bg-white'></div>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>
                </div>
                <div className=' w-1/3'>

                </div>
            </div>
        </header>
    )
}

export default Header



