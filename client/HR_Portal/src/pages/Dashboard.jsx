import React from 'react'
import Products from './Products'
import Sate from './Sate'
import GetData from './GetData'

export default function Dashboard() {
    const product=[
        {
            productname:"Headphone",
            price:25000
        }
    ]
    return (
    <div>
        <Products pname={product[0].productname} price={product[0].price}/>
        <Sate/>
        <GetData/>
    </div>
  )
}



