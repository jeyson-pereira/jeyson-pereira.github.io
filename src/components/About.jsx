import React from 'react'
import Typical from 'react-typical'
import { phrases } from '../static/data'

import ButtonLink from './ButtonLink'

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jeyson
            <br className="hidden lg:inline-block" />
            <h1 className="flex-wrap">
              And I love
              <Typical steps={phrases} loop={Infinity} />
            </h1>
          </h1>
          <p className="mb-8 leading-relaxed">
            Student of Software Development at{' '}
            <a
              className="text-green-600 hover:text-white"
              href="https://uniminuto.edu"
              target="_blank"
              rel="noreferrer">
              UNIMINUTO
            </a>
            <br />
            I'm from Colombia! 🇨🇴
          </p>
          <div className="flex justify-center">
            <ButtonLink
              text="Contact With Me"
              section="contact"
              css="text-white bg-green-500 hover:bg-green-600"
            />
            <ButtonLink
              text="Look My Projects"
              section="projects"
              css="ml-4 text-gray-400 bg-gray-800 hover:bg-gray-700 text-white"
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            src="./assets/img/coding.svg"
            className="object-cover object-center rounded"
            alt="programmer coding"
          />
        </div>
      </div>
    </section>
  )
}
