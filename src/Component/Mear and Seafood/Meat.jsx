import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgmeat from '../../assets/seafood-banner.jpg'
const Meat = () => {
  return (
    <div>
  <CategoryPage 
        title="Fruits & Veggies" 
        bgimage={Bgmeat} 
        categories={['Meat', 'Seafood' ,'Other']} 
      />    </div>
  )
}

export default Meat
