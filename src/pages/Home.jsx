import React from 'react'
import { Banner } from '../components/Banner'
import { Heading } from '../components/Heading'
import { Books } from '../components/Books'
import BookCards from '../components/BookCards'

export const Home = () => {
  return (
    <div>
    <Banner/> 
    <Heading 
    title='Brrowse Coffees by Category' 
    subtitle='Explore our wide range of coffee categories to find your perfect brew.'
     />
    <Books />

    
    </div>
  )
}
