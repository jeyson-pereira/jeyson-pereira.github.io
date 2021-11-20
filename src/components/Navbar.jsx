import React from 'react'

import NavLinkItem from './NavLinkItem'
import { animateScroll as scroll } from 'react-scroll'

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <header className="bg-gray-800 top-0 z-10 md:sticky">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <div
            className="text-xl select-none cursor-pointer hover:text-green-600"
            onClick={scrollToTop}>
            Jeyson Pereira
          </div>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <NavLinkItem text="Projects" section="projects" />
          <NavLinkItem text="Skills" section="skills" />
          <NavLinkItem text="Contact" section="contact" />
        </nav>
      </div>
    </header>
  )
}
