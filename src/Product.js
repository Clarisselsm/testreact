import React from 'react'
import './Astyle.css'

const Product = (prodprop) => {

    const products1 = prodprop.prodData
    const moreProducts = prodprop.newProdData

    const products = [...products1,...moreProducts];

  return (
    <div className="style1">
        <h1>Products</h1>
        <div class="container">
            <div class="row">
                {products.map((prodList) => {
                    return(
                        <div class="col-sm">
                            <img  style={{width:'300px', height:'300px'}} src={prodList.img} alt="products"/>
                            <h4>{prodList.name}</h4>
                            <p>{prodList.desc}</p>
                            <h4>{prodList.price}</h4>
                        </div>
                    )
                })

                }
                
            </div>
        </div>
      
    </div>
  )
}

export default Product
