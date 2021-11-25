import React, { useState, useEffect } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import GoTopButton from './components/goTopButton'

import { animateScroll as scroll } from 'react-scroll'

function App() {
  const scrollToTop = () => scroll.scrollToTop()

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar toTop={scrollToTop} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      {scrollPosition > 500 && <GoTopButton toTop={scrollToTop} />}
    </main>
  )
}

export default App
