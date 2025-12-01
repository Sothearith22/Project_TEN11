import React from 'react'
import Slidebar from '../components/Slidebar'
import Product from '../components/Main/Product'
import ProductCard from '../components/KickoffStyle/ProductCard'


const Home = () => {
  return (
    <div>
      <Slidebar/>
      <Product/>
      <ProductCard/> 
    </div>
  )
}

export default Home