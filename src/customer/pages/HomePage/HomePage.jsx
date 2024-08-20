import React from 'react'
import HomeSectionCarousel from '../../componenets/HomeSectionCarousel/HomeSectionCarousel'
import kurtaPage from '../../../Data/Kurta/kurta'
import mens_kurta  from '../../../Data/Men/men_kurta'
import sareePage from '../../../Data/Saree/page1'
import MainCarousel from '../../componenets/HomeCarousel/MainCarousel'


const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
    <HomeSectionCarousel data={kurtaPage}/>
    <HomeSectionCarousel data={mens_kurta}/>
    <HomeSectionCarousel data={sareePage}/>
    <HomeSectionCarousel data={kurtaPage}/>
    </div>
  )
}

export default HomePage