import React, { useEffect } from 'react'
import HomeSectionCarousel from '../../componenets/HomeSectionCarousel/HomeSectionCarousel'
import kurtaPage from '../../../Data/Kurta/kurta'
import mens_kurta  from '../../../Data/Men/men_kurta'
import sareePage from '../../../Data/Saree/page1'
import MainCarousel from '../../componenets/HomeCarousel/MainCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../store/product/Action'



const HomePage = () => {
  const dispatch =  useDispatch();
  useEffect(()=>{
   dispatch(getProducts());
  },[dispatch]);

let productsReducer = useSelector(state=>state?.CustomerProductReducer);
let productsAll = productsReducer?.products;

console.log(productsReducer);

// const filteredGirlTops = productsAll.filter((product)=>product?.category?.name === "top");
const filteredGirlTops = productsAll?.filter(product =>
  product?.category?.name === "top" && product?.category?.level === 3
);
const filteredGirlDress = productsAll?.filter(product =>product?.category?.name === "Dress"  && product?.category?.level === 3);
const filteredGirlGouns = productsAll?.filter(product =>product?.category?.name === "Gouns"  && product?.category?.level === 3);
// const filteredMensJeans = productsAll?.filter(product =>product?.category?.name === "men_jeans"  && product?.category?.level === 3);
const filteredMensShirt = productsAll?.filter(product =>product?.category?.name === "shirt"  && product?.category?.level === 3);
const filteredMensKurtas = productsAll?.filter(product =>product?.category?.name === "mens_kurta"  && product?.category?.level === 3);

const items = [filteredGirlDress,filteredMensKurtas,filteredGirlGouns,filteredMensShirt,filteredGirlTops];

  return (
    <div>
      <MainCarousel/>
      {items.map((itemGroup, index) => 
        <HomeSectionCarousel key={index} data={itemGroup} />)}
    </div>
  )
}

export default HomePage