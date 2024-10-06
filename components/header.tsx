'use client'

import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

import { useState } from 'react'

const links = [
  { name: 'Home', href: '/#hero' },
  { name: 'About Us', href: '/#about' },
  { name: 'Our Services', href: '/#services' },
  { name: 'Projects', href: '#' },
]

const HeaderNav = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-8 items-start md:items-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:underline underline-offset-4"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
        <span className="sr-only">Open menu mobile</span>
      </div>
      <div
        data-open={isMenuOpen}
        className="fixed inset-0 z-10 p-8 bg-background transition-transform duration-300 ease-in-out data-[open=true]:translate-x-0 data-[open=false]:translate-x-full"
      >
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <X size={24} />
          <span className="sr-only">Close</span>
        </div>
        <div className="pt-12">
          <HeaderNav />
        </div>
      </div>
    </>
  )
}

const Header = () => {
  return (
    <header className="py-5 flex justify-between items-center max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <Logo type="link" />
      <div className="hidden md:block">
        <HeaderNav />
      </div>
      <div className="flex gap-4 items-center">
        <Button variant={'outline'}>Contact Us</Button>
        <div className="md:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
