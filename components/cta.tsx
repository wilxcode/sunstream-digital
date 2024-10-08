import Image from 'next/image'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-start justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 md:px-8 lg:gap-12 xl:gap-28">
      <div className="flex max-w-[37.125rem] flex-col items-start gap-8">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-sm font-bold text-secondary">BRIGHT</span>
            <h2 className="lg:5xl text-2xl font-semibold tracking-tight text-black sm:text-3xl md:text-4xl xl:text-6xl">
              Ready to Light
              <br /> Up Your Marketing
              <span className="text-primary">?</span>
            </h2>
          </div>
          <p className="text-lg">
            {`We’re here to help you take your brand to the next level. Let’s craft a strategy that’s as bright as your future.`}
          </p>
        </div>
        <Button variant={'secondary'} size={'lg'}>
          Book a Free Consultation
        </Button>
      </div>
      <div>
        <Image
          src={'/cta_image.jpg'}
          alt="CTA image"
          width={392}
          height={514}
          className='w-full h-auto max-w-[392px]'
        />
      </div>
    </div>
  )
}

export default CTA
