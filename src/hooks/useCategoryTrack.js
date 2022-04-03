import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { throttle } from '../components/CategoryCards/utils'
import { setCategory } from '../store/actions/uiActions'

export const useCategoryTrack = ({ id }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const scrollTracker = () => {
      const categoryId = document.getElementById(id)
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio === 1) {
          dispatch(setCategory(entries[0].target.id))
        } else if (entries[0].intersectionRatio > 0.9) {
          dispatch(setCategory(entries[0].target.id))
        } else if (entries[0].intersectionRatio > 0.8) {
          dispatch(setCategory(entries[0].target.id))
          // console.log(entries[0].target.id, entries[0].intersectionRatio)
          // console.log(document.documentElement.clientWidth)
          // console.log(entries[0])
        } else if (entries[0].intersectionRatio > 0.7) {
          dispatch(setCategory(entries[0].target.id))
        } else if (entries[0].intersectionRatio > 0.6) {
          dispatch(setCategory(entries[0].target.id))
        } else if (entries[0].intersectionRatio > 0.5) {
          dispatch(setCategory(entries[0].target.id))
        }
      })
      categoryId && observer.observe(categoryId)
    }

    window.addEventListener('scroll', throttle(scrollTracker, 600))
    return () => {
      window.removeEventListener('scroll', throttle(scrollTracker, 600))
    }
  }, [id, dispatch])
}
