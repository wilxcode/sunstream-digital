'use client'

import Logo from './logo'
import { ArrowUp } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'
import useScrollToTop from '@/lib/hooks/use-scroll-to-top'

const links = [
  { name: 'About Us', href: '/#about' },
  { name: 'Our Services', href: '/#services' },
  { name: 'Case Studies', href: '/#case-studies' },
  { name: 'Partners', href: '/#partners' },
]
const socialMediaLinks = [
  { name: 'Facebook', href: '#' },
  { name: 'X (Twitter)', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Instagram', href: '#' },
]

const Footer = () => {
  const scrollToTop = useScrollToTop()

  return (
    <div className="bg-muted *:py-36 *:max-w-screen-xl *:mx-auto *:px-4 *:sm:px-6 *:md:px-8">
      <div className="flex justify-between">
        <div className="flex items-start gap-12">
          <Logo type="image" />
          <div className="flex flex-col gap-16 pt-2">
            <p className="text-lg">
              1234 Market St, Suite 500, <br /> San Francisco, CA
            </p>
            <div className="flex flex-col gap-4">
              <span className="underline underline-offset-4 decoration-primary">
                +1-800-123-4567
              </span>
              <span className="underline underline-offset-4 decoration-primary">
                info@sunstreamdigital.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-28 pt-2">
          <div className="flex gap-36">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4 pt-4">
              {socialMediaLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:underline underline-offset-4"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <span className="text-xs">
            © 2024 Sunstream. All rights reserved.{' '}
          </span>
        </div>
        <Button
          variant={'outline'}
          size={'icon'}
          className="size-14 rounded-full"
          onClick={() => scrollToTop()}
        >
          <ArrowUp />
        </Button>
      </div>
    </div>
  )
}

export default Footer
