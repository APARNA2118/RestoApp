// import React from 'react';
// import list from '../data';
// import '../styles/CartAdd.css';
// import Cards from './CartCards';

// const CartAdd = ({handleClick}) => {
//   return (
//     <section>
//         {
//             list.map((item)=>(
//                 <Cards item={item} key={item.id} handleClick={handleClick} />
//             ))
//         }
//     </section>
//   )
// }

// export default CartAdd

import React from 'react'
import CartCards from './CartCards'
import '../styles/CartAdd.css'
import list from '../data';

const CartAdd = ({ items, handleClick }) => {
  return (
    <div className="cart_add">
      <div className="cart_add_title">
        <h1>My Cart</h1>
      </div>
      <div className="cart_add_cards">
        {items && items.map((item, index) => (
          <CartCards key={index} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  )
}

export default CartAdd