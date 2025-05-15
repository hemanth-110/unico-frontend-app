import React, { useState }from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addToCart, increment, decrement } from '../store/cartSlice'
import { Product } from '../modals/product'

interface Props {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch()

  // Local quantity before adding to cart
  const [quantity, setQuantity] = useState(1)

  const incrementQty = () => setQuantity((prev) => prev + 1)
  const decrementQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, quantity }))
  }

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <img src={product.image} alt={product.title} className="h-48 object-contain mx-auto mb-2" />
      <h2 className="font-semibold text-lg dark:text-white">{product.title}</h2>
      <p className="text-gray-700 dark:text-gray-300">${product.price.toFixed(2)}</p>

      <div className="mt-2 flex items-center space-x-4">
        <button onClick={decrementQty} className="text-xl px-2">➖</button>
        <span className="text-lg font-bold text-gray-800 dark:text-white">{quantity}</span>
        <button onClick={incrementQty} className="text-xl px-2">➕</button>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  )
}
