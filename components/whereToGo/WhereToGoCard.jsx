import Link from 'next/link'
import React from 'react'

const WhereToGoCard = ({ link, image }) => {
  return (
    <Link href={link}>
      <div
        className='flex-1 h-[12vh] md:h-[40vh] bg-cover bg-[#0cceff] rounded-2xl cursor-pointer font-extrabold'
        style={{ backgroundImage: `url("${image}")` }}
      >
        <span className='h-full text-white flex items-center justify-center text-[10px] sm:text-lg lg:text-3xl'>
          {image ? '' : 'VIEW MORE'}
        </span>
      </div>
    </Link>
  )
}

export default WhereToGoCard
