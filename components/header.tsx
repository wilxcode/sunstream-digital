'use client'

import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

import { Dispatch, SetStateAction, useState } from 'react'

const links = [
  { name: 'Home', href: '/#hero' },
  { name: 'About Us', href: '/#about' },
  { name: 'Our Services', href: '/#services' },
  { name: 'Projects', href: '#' },
]

type HeaderNavProps = {
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>
}

const HeaderNav = (props: HeaderNavProps) => {
  return (
    <nav className="flex flex-col items-start gap-8 md:flex-row md:items-center">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="underline-offset-4 hover:underline"
          onClick={() => props.setIsMenuOpen?.(false)}
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
        className="fixed inset-0 z-10 bg-background p-8 transition-transform duration-300 ease-in-out data-[open=false]:translate-x-full data-[open=true]:translate-x-0"
      >
        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <X size={24} />
          <span className="sr-only">Close</span>
        </div>
        <div className="pt-12">
          <HeaderNav setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </>
  )
}

const Header = () => {
  return (
    <header className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-5 sm:px-6 md:px-8">
      <Logo type="link" />
      <div className="hidden md:block">
        <HeaderNav />
      </div>
      <div className="flex items-center gap-4">
        <Button variant={'outline'}>Contact Us</Button>
        <div className="md:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}

export default Header
