import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/outline'

export default function goTopButton(props) {
  return (
    <div
      className="z-50 fixed right-5 bottom-5 bg-green-600 h-10 w-10 rounded-md hover:bg-gray-800 text-gray-800 hover:text-green-600"
      onClick={() => props.toTop()}>
      <ChevronUpIcon className="mx-auto p-1" />
    </div>
  )
}
