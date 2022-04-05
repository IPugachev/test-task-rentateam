import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeaderPosition } from '../store/actions/uiActions'

export const useShowBasket = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    window.addEventListener('scroll', () => dispatch(setHeaderPosition(window.scrollY)))
    return () => {
      window.removeEventListener('scroll', dispatch(setHeaderPosition(window.scrollY)))
    }
  }, [dispatch])
}
