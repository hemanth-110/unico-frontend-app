import React from 'react'
import { CartIcon } from './CartIcon'
import { ThemeToggle } from './ThemeToggle'

const Header = () => {
  return (
    <div className='flex flex-row '>
        <ThemeToggle />
        <CartIcon />
    </div>
  )
}

export default Header
