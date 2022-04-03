export const scrollToCategory = (id) => {
  const category = document.getElementById(id)
  const y = category.getBoundingClientRect().top + window.pageYOffset
  if (window.innerHeight - 64 > category.offsetHeight * 2) {
    window.scrollTo({ top: y - (window.innerHeight - category.offsetHeight) / 2, behavior: 'smooth' })
  } else {
    window.scrollTo({ top: y - 64, behavior: 'smooth' })
  }
}
