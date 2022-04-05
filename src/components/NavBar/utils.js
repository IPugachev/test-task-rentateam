import { scrollTo } from '../../hooks/utils'

export const scrollToCategory = (id) => {
  const category = document.getElementById(id)
  const y = category.getBoundingClientRect().top + window.pageYOffset
  if (window.innerHeight - 64 > category.offsetHeight * 2) {
    scrollTo(category)
  } else {
    window.scrollTo({ top: y - 64, behavior: 'smooth' })
  }
}
