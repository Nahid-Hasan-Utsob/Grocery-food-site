import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import Bgall from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
  <CategoryPage title='All Products' bgimage={Bgall} categories={['All']}></CategoryPage>    </div>
  )
}

export default AllProducts
