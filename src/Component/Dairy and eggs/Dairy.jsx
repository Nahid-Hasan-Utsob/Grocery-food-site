import React from 'react'
import Bgdairy from '../../assets/dairy-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'
const Dairy = () => {
  return (
    <div>
       <CategoryPage 
        title="Fruits & Veggies" 
        bgimage={Bgdairy} 
        categories={['Dairy', 'Grain' ,'Other']} 
      />
    </div>
  )
}

export default Dairy
