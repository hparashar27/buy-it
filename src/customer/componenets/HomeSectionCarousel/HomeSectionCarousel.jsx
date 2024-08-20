import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarousel = ({data=[]}) => {
    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 5 },
    };

    const items = data.slice(1,15).map((item,key) => (
        <HomeSectionCard product={item} key={key}/>
       ));
     
       return (
        <div className='flex flex-col'>
        <span className='text-center m-10 text-lg'> Men's Wear</span>
        <div className='relative px-4 lg:px-8'>
        <div className='flex flex-row justify-center items-center'>
        <AliceCarousel
           items={items}
           responsive={responsive}
           disableDotsControls
         />
        </div>
        </div> 
        </div>   
       );
}

export default HomeSectionCarousel