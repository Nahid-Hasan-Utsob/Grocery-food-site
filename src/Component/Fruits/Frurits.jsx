import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'

import Bgfruit from '../../assets/fruits-banner.jpg'

const Fruits = () => {
  return (
    <div>
      <CategoryPage 
        title="Fruits & Veggies" 
        bgimage={Bgfruit} 
        categories={['Fruit', 'Vegetable' ,'Nut']} 
      />
    </div>
  )
}

export default Fruits
