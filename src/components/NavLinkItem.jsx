import React from 'react'
import { Link } from 'react-scroll'

export default function NavLinkItem(props) {
  return (
    <div className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4 select-none cursor-pointer">
      <Link
        className="flex"
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
