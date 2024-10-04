import Link from 'next/link'
import Logo from './logo'
import { Button } from './ui/button'

const links = [
  { name: 'Home', href: '/#hero' },
  { name: 'About Us', href: '/#about' },
  { name: 'Our Services', href: '/#services' },
  { name: 'Projects', href: '#' },
]

const HeaderNav = () => {
  return (
    <nav className="flex gap-8 items-center">
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

const Header = () => {
  return (
    <header className="py-5 flex justify-between items-center max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <Logo type="link" />
      <HeaderNav />
      <Button variant={'outline'}>Contact Us</Button>
    </header>
  )
}

export default Header
