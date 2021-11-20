import React from 'react'
import { Link } from 'react-scroll'

export default function NavLinkItem(props) {
  return (
    <div className="mr-5 hover:text-white select-none cursor-pointer">
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
