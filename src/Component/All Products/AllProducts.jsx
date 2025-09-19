import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgall from '../../assets/all-banner.jpg'
import { useLocation } from 'react-router-dom'

const AllProducts = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("search") || "";

  // AllProducts কে searchTerm পাঠানো হবে
  return (
    <div>
      <CategoryPage 
        title='All Products' 
        bgimage={Bgall} 
        categories={['All']}
        searchTerm={searchTerm}
      />
    </div>
  )
}

export default AllProducts
