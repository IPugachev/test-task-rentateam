import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { throttle } from '../components/CategoryCards/utils'
import { setCategory } from '../store/actions/uiActions'

export const useCategoryTrack = ({ id }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const scrollTracker = () => {
      dispatch(setCategory(document.elementFromPoint(0, window.innerHeight / 2).id))
    }

    window.addEventListener('scroll', throttle(scrollTracker, 500))
    return () => {
      window.removeEventListener('scroll', throttle(scrollTracker, 500))
    }
  }, [id, dispatch])
}
