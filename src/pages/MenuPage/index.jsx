import React, { useLayoutEffect, useState } from 'react'
import { connect } from 'react-redux'
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
    // fetch('http://localhost:4000/menu')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   async function postData(url = '', data = {}) {
    //     const response = await fetch(url, {
    //       method: 'POST',
    //       mode: 'cors',
    //       cache: 'no-cache',
    //       credentials: 'same-origin',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       redirect: 'follow',
    //       referrerPolicy: 'no-referrer',
    //       body: JSON.stringify(data),
    //     })
    //     return await response.json()
    //   }

    //   postData('http://localhost:4000/basket', { answer: 42 }).then((data) => {
    //     console.log(data)
    //   })
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
const mapStateToProps = (state) => {
  return {
    totalPrice: state.basket.totalPrice,
  }
}

export default connect(mapStateToProps)(Header)
