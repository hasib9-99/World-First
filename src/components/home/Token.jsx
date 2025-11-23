import React from 'react'

const Token = () => {
    return (
        <div id='token'>
            <div className='content-wrap md:pt-36 md:pb-16 pt-20 pb-9  flex flex-col lg:flex-row gap-6 flex-no-wrap justify-between items-center'>
                <div className='w-full lg:w-1/2'>
                    <h3 className='sub-title pb-5'>Our Token</h3>
                    <h2 className='section-title'>$ME3 Token</h2>
                    <p className='text-arial text-base md:text-2xl text-[#d5d5d5]'>The $ME3 Token is the cornerstone of both governance and utility within our ecosystem, playing a central role in our gamified token economy and incentivizing users for engaging in activities such as staking, referrals, and gameplay usage.
                        <br />
                        <br />
                        $ME3 Token holders also get rewards in the form of fee discounts, and $ME3 Token stakers earn 20% of platform revenues.</p>
                </div>
                <div className='w-full lg:w-1/2 p-14'>
                    <img className='w-full h-full object-cover ' src="../../../public/assets/images/tokenstatic.webp" alt="tokenstatic" />
                </div>
            </div>
        </div>
    )
}

export default Token