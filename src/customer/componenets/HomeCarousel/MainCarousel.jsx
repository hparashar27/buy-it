import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainPageCarouselItems } from './MainCarouselData';
// import imageone from "../public/Carousel/imgfour.jpg"


const MainCarousel = () => {
  const items = MainPageCarouselItems.map((item) => (
    <img className="cursor-pointer -z-10 flex justify-center items-center" src={item.img} key={item.item_no} alt={item.imgName} />
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      infinite
    />
  );
};

export default MainCarousel;
