import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { animateScroll as scroll } from 'react-scroll'

function App() {
  const scrollToTop = () => scroll.scrollToTop()

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar toTop={scrollToTop} />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
