import React from "react"
import {useParams} from "react-router-dom"
import products from '../Products/db'
import './ProductItemStyle.css'

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = products.find(prod => prod.id === productId)
    return (
        
    <div class="container">
        <div class="card">
        <div class="container-fliud">
            <div class="wrapper row">
                <div class="preview col-md-6">
                    <div class="preview-pic tab-content">
                      <div class="tab-pane active" id="pic-1"><img src={thisProduct.image} alt="" /></div>
                    </div>
                    
                </div>
                <div class="details col-md-6">
                    <h1 class="product-title">{thisProduct.name}</h1>
                    <h2 class="price"><span>{thisProduct.price}</span></h2>
                    <p class="product-description">{thisProduct.description}</p>
                    <div class="action">
                        <button class="add-to-cart btn btn-default" type="button">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default ProductDetail