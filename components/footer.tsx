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
    <div className="bg-muted *:mx-auto *:max-w-screen-xl *:px-4 *:py-24 *:sm:px-6 *:sm:py-28 *:md:px-8 *:md:py-32 xl:*:py-36">
      <div className="flex flex-col justify-between gap-y-16 lg:flex-row lg:gap-y-0">
        <div className="flex flex-col items-start gap-12 sm:flex-row">
          <Logo type="image" />
          <div className="flex flex-col gap-16 pt-2">
            <p className="text-lg">
              1234 Market St, Suite 500, <br /> San Francisco, CA
            </p>
            <div className="flex flex-col gap-4">
              <span className="underline decoration-primary underline-offset-4">
                +1-800-123-4567
              </span>
              <span className="underline decoration-primary underline-offset-4">
                info@sunstreamdigital.com
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-28 pt-2">
          <div className="flex flex-col gap-36 gap-y-8 sm:flex-row">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="underline-offset-4 hover:underline"
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
                  className="underline-offset-4 hover:underline"
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
