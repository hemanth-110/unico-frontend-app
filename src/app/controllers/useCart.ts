import { useAppDispatch, useAppSelector } from '../store/hooks'
import { increment, decrement, addToCart } from '../store/cartSlice'

interface AddToCartPayload {
  id: number
  quantity: number
}

export const useCart = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(state => state.cart.items)

  return {
    cartItems,
    increment: (productId: number) => dispatch(increment(productId)),
    decrement: (productId: number) => dispatch(decrement(productId)),
    addToCart: (product: AddToCartPayload) => dispatch(addToCart(product)),
  }
}
