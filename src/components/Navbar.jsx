import React, { useState } from 'react'
import { HeartIcon, MenuIcon, XIcon } from '@heroicons/react/solid'

import NavLinkItem from './NavLinkItem'

export default function Navbar(props) {
  // const scrollToTop = () => scroll.scrollToTop()
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const navbarItemsStyle = `w-full ${
    isNavbarOpen ? 'block' : 'hidden'
  } flex-grow lg:flex lg:items-center lg:w-auto px-2 py-2`

  return (
    <header className="sticky top-0 z-20 bg-gray-800">
      <nav className="flex items-center justify-between flex-wrap p-4">
        <div
          className="flex items-center py-2 px-8 cursor-pointer select-none"
          onClick={() => props.toTop()}>
          <HeartIcon className="h-6 w-6 mr-1 text-green-600" />
          <span className="text-white font-semibold text-xl tracking-tight">
            Jeyson Pereira
          </span>
        </div>
        <div className="block lg:hidden">
          <div
            className="px-2 lg:hidden flex items-center cursor-pointer"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ? (
              <XIcon className="w-6 h-6 hover:text-green-600" />
            ) : (
              <MenuIcon className="w-6 h-6 hover:text-green-600" />
            )}
          </div>
        </div>
        <div className={navbarItemsStyle}>
          <div className="text-base lg:flex-grow">
            <NavLinkItem text="About" section="about" />
            <NavLinkItem text="Projects" section="projects" />
            <NavLinkItem text="Skills" section="skills" />
            <NavLinkItem text="Contact" section="contact" />
          </div>
        </div>
      </nav>
    </header>
  )
}
