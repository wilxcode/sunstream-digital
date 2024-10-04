import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div
      className="flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
      id="hero"
    >
      <div className="flex flex-col items-start gap-24 flex-1 max-w-[47.625rem]">
        <div className="flex flex-col gap-8">
          <h1 className="text-7xl tracking-tight font-semibold text-black">
            Brighten You
            <span className="before:block before:absolute before:-inset-1 before:-rotate-3 before:bg-primary relative inline-block py-3 pr-14 -z-10">
              <span className="relative text-secondary">r Brand</span>
            </span>
            <br /> with Sunstream Digital
            <span className="text-primary">.</span>
          </h1>
          <h3 className="text-2xl">
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
  )
}

export default Hero
