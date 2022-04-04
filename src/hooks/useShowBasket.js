import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setHeaderBasketPosition } from '../store/actions/uiActions'

export const useShowBasket = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    window.addEventListener('scroll', () => dispatch(setHeaderBasketPosition(window.scrollY)))
    return () => {
      window.removeEventListener('scroll', dispatch(setHeaderBasketPosition(window.scrollY)))
    }
  }, [dispatch])
}
