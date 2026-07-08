// import React from 'react'

// function Products(props) {
//   return (
//     <div>
//       <h1>Products</h1>
//       <h3>Product Name is:{props.pname}</h3>
//       <button >₹ {props.price}</button>
//     </div>
//   )
// }

// export default Products

import React, { Component } from 'react'

export class Products extends Component {
  render() {
    const { pname, price } = this.props
    return (
      <div>Products
        <h3 className='text-3xl font-bold' style={{fontFamily:'cursive'}}>Product Name is: {pname}</h3>
        <button className='bg-black text-white w-20 rounded-2xl m-1'>₹ {price}</button>
      </div>
    )

  }
}

export default Products
