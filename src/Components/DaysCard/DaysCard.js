import React from 'react';
import img1 from '../../assets/card-vec1.png';
import img2 from '../../assets/card-vec2.png';
import img3 from '../../assets/card-vec3.png';
import SingleDayCard from '../SingleDayCard/SingleDayCard';

const DaysCard = () => {
    const daysCard = [
        {
            id: 1,
            title: 'Get that 11 line in 30 days',
            description: 'Learn more',
            img: img1
        },
        {
            id: 2,
            title: '14 Days sherd challenge',
            description: 'Learn more',
            img: img2
        },
        {
            id: 3,
            title: 'Get flat belly in 30 days',
            description: 'Learn more',
            img: img3
        },
    ]
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 lg:mt-28 mt-12 lg:p-20 p-7 rounded-3xl' style={{background: '#7473ED'}}>
            {
                daysCard.map(item => <SingleDayCard key={item.id} item={item} />)
            }
        </div>
    );
};

export default DaysCard;