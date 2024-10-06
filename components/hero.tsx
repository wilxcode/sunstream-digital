import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-between gap-28 lg:gap-4 xl:gap-0 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:flex-row"
      id="hero"
    >
      <div className="flex flex-col items-center lg:items-start gap-16 ld:gap-24 max-w-[47.625rem] flex-1">
        <div className="flex flex-col gap-8">
          <h1 className="text-3xl text-center tracking-tight font-semibold text-black sm:text-4xl md:text-5xl lg:6xl xl:text-7xl lg:text-left">
            Brighten You
            <span className="before:hidden sm:before:block before:absolute before:-inset-1 before:-rotate-3 before:bg-primary relative inline-block sm:py-3 sm:pr-14 sm:-z-10">
              <span className="relative text-secondary">r Brand</span>
            </span>
            <br /> with Sunstream Digital
            <span className="text-primary">.</span>
          </h1>
          <h3 className="text-xl text-center lg:text-2xl lg:text-left">
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
          style={{
            width: 'auto',
            height: 'auto',
          }}
          width={392}
          height={426}
          priority
        />
      </div>
    </div>
  )
}

export default Hero
