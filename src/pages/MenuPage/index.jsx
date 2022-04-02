import React, { useEffect, useLayoutEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { store } from '../../store'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { CategoryCards } from '../../components/CategoryCards'

export const MenuPage = () => {
  const category = useSelector((store) => store.category)
  const products = useSelector((store) => store.product)
  // useLayoutEffect(() => {
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
  // }, [])
  return (
    <>
      <Header />
      {category.map((list, index) => {
        let productData = products.filter((product) => {
          let arr = []
          for (let i = 0; i < list.products.length; i++) {
            if (product.id === list.products[i]) {
              return arr
            }
          }
          return null
        })
        return <CategoryCards category={list} categoryStyleProp={index} productData={productData} key={list.id} />
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
