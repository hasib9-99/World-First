import React from 'react';

import IconTwitter from './Icons/IconTwitter';
import IconTelegram from './Icons/IconTelegram';
import IconDiscord from './Icons/IconDiscord';
import IconHelp from './Icons/IconHelp';
import IconGithub from './Icons/IconGithub';
import IconYoutube from './Icons/IconYoutube';
import IconMail from './Icons/IconMail';


const Footer = () => {
    return (
        <div id='footer' className='bg-black'>
            <div className='content-wrap md:pt-24 pb-8 pt-16'>
                <div className='flex flex-col md:flex-row text-white justify-between w-full gap-6'>
                    <div className='w-full md:w-8/12'>
                        <div className='flex flex-row flex-wrap items-center justify-start gap-3'>
                            <img className='w-[140px] block' src="../../public/assets/images/logo.webp" alt="logo" />
                            <div className='flex flex-row flex-wrap items-center justify-start gap-3'>
                                <a className='hover:underline text-arial text-sm leading-6' href="#">Terms of Use</a>
                                <a className='hover:underline text-arial text-sm leading-6' href="#">Privacy Policy</a>
                                <a className='hover:underline text-arial text-sm leading-6' href="#">Risk Disclaimers & Disclosure</a>
                            </div>
                        </div>
                        <div className='flex items-center justify-start gap-4 my-4'>
                            <a href="#"><img className='h-10' src='../../public/assets/images/footer1.svg' alt="footer1" /></a>
                            <a href="#"><img className='h-10' src='../../public/assets/images/footer2.webp' alt="footer2" /></a>
                            <a href="#"><img className='h-10' src='../../public/assets/images/footer3.svg' alt="footer3" /></a>
                        </div>
                    </div>
                    <div className='w-full md:w-4/12'>
                        <div className='flex items-center gap-3'>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="#"><IconTwitter /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="#"><IconTelegram /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="#"><IconDiscord /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="#"><IconHelp /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="#"><IconGithub /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="#"><IconYoutube /></a>
                            <a className='text-[#C588F9] text-2xl lg:text-4xl' href="#"><IconMail /></a>
                        </div>
                        <p className='sub-title pt-3'>© 2024 ME3 LABS INC | ALL RIGHTS RESERVED</p>
                    </div>
                </div>
                <div className='bg-[url("../../public/assets/images/footer-bar.svg")] bg-no-repeat bg-contain w-full h-2.5 md:mt-16 mt-8 mb-8'>
                </div>
            </div>
        </div>
    )
}

export default Footer