import React from 'react'
import './AddProduct.css'
const AddProduct = () => {
  return (
    <div className='add-product'>
       < div className='addproduct-itemfield'>
            <p>Product Title</p>
            <input type="text" name="name" placeholder="Type Here" />
        </div>
        < div className='addproduct-price'>
         < div className='addproduct-itemfield'>
            <p>Price</p>
            <input type="text" name="old_price" placeholder="Type Here" />
         </div>
         < div className='addproduct-itemfield'>
            <p>Offer Price</p>
            <input type="text" name="new_price" placeholder="Type Here" />
        </div>
        </div>
    </div>
  )
}

export default AddProduct
