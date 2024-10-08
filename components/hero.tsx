import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div
      className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-28 px-4 sm:px-6 md:px-8 lg:flex-row lg:gap-4 xl:gap-0"
      id="hero"
    >
      <div className="ld:gap-24 flex max-w-[47.625rem] flex-1 flex-col items-center gap-16 lg:items-start">
        <div className="flex flex-col gap-8">
          <h1 className="lg:6xl text-center text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-left xl:text-7xl">
            Brighten You
            <span className="relative inline-block before:absolute before:-inset-1 before:hidden before:-rotate-3 before:bg-primary sm:-z-10 sm:py-3 sm:pr-14 sm:before:block">
              <span className="relative text-secondary">r Brand</span>
            </span>
            <br /> with Sunstream Digital
            <span className="text-primary">.</span>
          </h1>
          <h3 className="text-center text-xl lg:text-left lg:text-2xl">
            {`We specialize in creating innovative marketing strategies that drive results. Let us help you shine brighter in the digital landscape.`}
          </h3>
        </div>
        <div className="flex gap-8">
          <Button variant={'secondary'} size={'lg'}>
            Get Started
          </Button>
          <Button variant={'outline'} size={'lg'}>
            Learn More
          </Button>
        </div>
      </div>
      <div>
        <Image
          src={'/hero_image.svg'}
          alt="hero image"
          width={392}
          height={426}
          className="h-auto w-full xl:max-w-[392px]"
          priority
        />
      </div>
    </div>
  )
}

export default Hero
