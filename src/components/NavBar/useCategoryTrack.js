import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { throttle } from '../../utils/app'
import { setCategory } from '../../store/actions/uiActions'

export const useCategoryTrack = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const scrollTracker = () => {
      dispatch(setCategory(document.elementFromPoint(0, window.innerHeight / 2).id))
    }
    window.addEventListener('scroll', throttle(scrollTracker, 100))
    return () => {
      window.removeEventListener('scroll', throttle(scrollTracker, 100))
    }
  }, [dispatch])
}
