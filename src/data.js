// товар:

// {
// "id" - идентификатор товара.
// "name" - название товара
// "price" - цена товара
// "delivery" - true - если товар доступен для доставки, false - если не доступен
// "img" - картинка товара формат разный
// }
// категория:

// {
// "id" - идентификатор категории
// "name" - название категории
// "products" - массив с ID товаров в категории
// }

export const generatorProductData = () => {
  const productData = []
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 7; j++) {
      let newProduct = {}
      newProduct.name = `Название ${i}${j}`
      newProduct.id = j + 10 * i
      newProduct.price = (j + 1) * 10
      if (j % 2 === 0) {
        newProduct.delivery = false
      } else {
        newProduct.delivery = true
      }
      if ((i + 1) % 3 === 0) {
        newProduct.img = 'stripes.png'
      } else if ((i + 1) % 2 === 0) {
        newProduct.img = 'boxmaster.png'
      } else {
        newProduct.img = 'burger.png'
      }
      productData.push(newProduct)
    }
  }
  return productData
}

export const generatorCategoryData = () => {
  const categoryData = []
  for (let i = 0; i < 10; i++) {
    let newCategory = {}
    newCategory.id = `Category${i}`
    newCategory.name = `Кат №${i}`
    newCategory.products = []
    for (let j = 0; j < 7; j++) {
      newCategory.products.push(j + 10 * i)
    }
    categoryData.push(newCategory)
  }
  return categoryData
}
