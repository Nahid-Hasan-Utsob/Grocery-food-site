import React from 'react'
import Banner from '../Banner/Banner'
import ProductList from '../ProductsList/ProductList'
import ProductsCard from '../ProductCards/ProductsCard'


      
  const CategoryPage = ({title, bgimage, categories =[]}) =>{



      let filteredItems = categories.includes("All") ? ProductList : ProductList.filter(item => categories.includes(item.category))

    const renderProduct = filteredItems.map(product=>{

      return (
       
            <ProductsCard image={product.image} title={product.title} price={product.price}></ProductsCard>
      )
    })


  return (
    <div>
      <Banner title={title} bgimage={bgimage} ></Banner>

              <div className=" py-20 mx-auto max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">{renderProduct}</div>
    </div>
  )

  }





export default CategoryPage
