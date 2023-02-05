import Image from 'next/image';
import React from 'react';

const SingleDayCard = ({item}) => {
    const {title, img, description} = item;
    return (
        <div className='flex' style={{fontFamily: 'poppins'}}>
            <div className='w-24 h-24 flex justify-center items-center' style={{background: '#8987F2', borderRadius: '20px'}}>
                <Image src={img} alt={title}/>
            </div>
            <div className='ml-7'>
                <h3 className='text-xl text-white mb-4'>{title}</h3>
                <div>
                    <p className='text-white'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleDayCard;