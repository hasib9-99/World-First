import React from 'react'
import { GALAXY_DATA } from '../../lib/data/galaxyData'

const Galaxy = () => {

    const [activeIndex, setActiveIndex] = React.useState(1);

    return (
        <div id='galaxy'>
            <div className='content-wrap py-36'>
                <h3 className='sub-title pb-5'>Dive into Gacha Galaxy</h3>
                <div className='flex flex-wrap'>
                    {
                        GALAXY_DATA.map((item, index) => (
                            <div
                                key={item.id}
                                className={`w-full md:w-1/2 lg:w-1/3 mb-12 last:mb-0 p-10 flex flex-col items-center text-center relative card-overlay ${activeIndex === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(1)}
                            >
                                <img src={item.imageUrl} alt={item.title} className='w-auto h-[260px] pb-5 animate-blink' />
                                <h4 className='card-title'>{item.title}</h4>
                                <p className='card-discription'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Galaxy