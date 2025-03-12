import React from 'react'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem'

const TopMenu = () => {
  return (
    <div className='h-14 flex flex-row-reverse items-center p-2 bg-orange-200 gap-4'>
        <Image src={'/img/logo.png'} alt='logo' width={44} height={44} className='object-cover'/>
        <TopMenuItem title='Booking' pageRef='/booking'/>
    </div>
  )
}

export default TopMenu