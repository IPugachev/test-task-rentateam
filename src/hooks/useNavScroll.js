import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useNavScroll = () => {
  const currenCategory = useSelector((store) => store.ui.category)
  useEffect(() => {
    const navbar = document.getElementById(`navbar`)
    const categoryId = document.getElementById(`${currenCategory}NavButton`)
    const x = categoryId && categoryId.getBoundingClientRect().left
    navbar.scrollLeft += x - (navbar.offsetWidth - categoryId?.offsetWidth) / 2
  }, [currenCategory])
}
