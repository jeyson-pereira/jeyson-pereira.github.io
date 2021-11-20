import React from 'react'
import { MailIcon } from '@heroicons/react/solid'
import { SocialIcon } from 'react-social-icons'

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="container mx-auto px-5 py-10">
        <div className="text-center mb-10">
          <MailIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact
          </h1>
        </div>
        <div className="text-center mb-10">
          <a
            href="mailto:jpereiraf96@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Say Hello! 👋
          </a>
        </div>
        <div className="text-center mb-20 space-x-5">
          <SocialIcon
            className="focus:outline-none transform hover:-translate-y-1  rounded"
            url="https://github.com/jeyson-pereira"
            network="github"
            fgColor="white"
            target="_blank"
          />
          <SocialIcon
            className="focus:outline-none transform hover:-translate-y-1 rounded"
            url="https://linkedin.com/in/jeyson-alejandro-pereira/"
            network="linkedin"
            fgColor="white"
            target="_blank"
          />
        </div>
      </div>
    </section>
  )
}
