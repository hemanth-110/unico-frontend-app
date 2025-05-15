'use client'

import React from 'react'
import { useAppSelector } from '../store/hooks'

export const CartIcon = () => {
  const cartItems = useAppSelector((state) => state.cart.items)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="fixed top-6 right-15">
      <div className="relative">
        <span className="text-2xl">🛒</span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </div>
    </div>
  )
}
