import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductsList/ProductList'
import ProductsCard from '../ProductCards/ProductsCard'
const CategoryPage = ({title, bgimage, categories =[], searchTerm=""}) =>{
  let filteredItems = categories.includes("All") ? ProductList : ProductList.filter(item => categories.includes(item.category))

  // search filter
  if(searchTerm){
    filteredItems = filteredItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const renderProduct = filteredItems.map(product=>{
    return <ProductsCard key={product.id} image={product.image} title={product.title} price={product.price}></ProductsCard>
  })

  return (
    <div>
      <Banner title={title} bgimage={bgimage}></Banner>
      <div className="py-20 mx-auto max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderProduct}
      </div>
    </div>
  )
}





export default CategoryPage
