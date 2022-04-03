import React, { useLayoutEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CategoryCards } from '../../components/CategoryCards'

export const MenuPage = () => {
  const [categories, setCategories] = useState([])
  console.log('page render')

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await fetch('http://localhost:4000/menu')
        const data = await jsonData.json()
        setCategories(data.categories)
      } catch (e) {
        console.log('something wrong, check backend')
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <Header categories={categories} />
      {categories.map((category, index) => {
        return <CategoryCards category={category} categoryStyleProp={index} key={category.id} />
      })}
      <Footer />
    </>
  )
}
