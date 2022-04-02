export const scrollToCategory = (id) => {
  const category = document.getElementById(id)

  const y = category.getBoundingClientRect().top + window.pageYOffset - 64

  window.scrollTo({ top: y, behavior: 'smooth' })
}
