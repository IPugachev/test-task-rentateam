export const throttle = (func, ms) => {
  let locked = false

  return function () {
    if (locked) return

    const context = this
    const args = arguments

    locked = true

    setTimeout(() => {
      func.apply(context, args)
      locked = false
    }, ms)
  }
}

export const scrollTo = (element) => {
  const y = element.getBoundingClientRect().top + window.pageYOffset
  window.scrollTo({ top: y - (window.innerHeight - element.offsetHeight) / 2, behavior: 'smooth' })
}
