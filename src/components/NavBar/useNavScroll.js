import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useNavScroll = () => {
  const currentCategory = useSelector((store) => store.ui.category)
  useEffect(() => {
    const navbar = document.getElementById(`navbar`)
    const categoryId = document.getElementById(`${currentCategory}NavButton`)
    const x = categoryId && categoryId.getBoundingClientRect().left
    navbar.scrollLeft += x - (navbar.offsetWidth - categoryId?.offsetWidth) / 2
  }, [currentCategory])
}
