import React from 'react'
import { Link } from 'react-scroll'

export default function ButtonLink(props) {
  const styleButton = `inline-flex select-none border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-pointer ${props.css}`
  return (
    <div className={styleButton}>
      <Link
        activeClass="active"
        to={props.section}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        {props.text}
      </Link>
    </div>
  )
}
