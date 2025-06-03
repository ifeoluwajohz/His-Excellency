"use client"
import React from 'react'
import Link from 'next/link'
import { NavigationMenuDemo } from './desktopNav'
import { SheetDemo } from './mobileNav'

const Nav = () => {
  return (
    <div className='flex flex-row flex-wrap justify-between mb-5 '>
      <div className="logo">
        <Link href="/" className="text-3xl font-bold">
          Pso
        </Link>
      </div>
      <div className="navbar hidden sm:block">
        <NavigationMenuDemo />
      </div>
      <div className="mobile-view visible sm:hidden">
        <SheetDemo />
      </div>
    </div>
  )
}

export default Nav
