import React from 'react'
import './find.css'
import { Navbar } from '../components/navbar'
import { Findbar } from '../components/findbar'
import { Items } from '../components/items'

export const Find = () => {
  return (  
    <div>
      <Navbar />
      <Findbar />  
      <Items />
    </div>
  )
}
