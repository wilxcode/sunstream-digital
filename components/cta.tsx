import Image from 'next/image'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <div className="flex items-center justify-between gap-28 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-start gap-16 flex-1">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-sm text-secondary font-bold">BRIGHT</span>
            <h2 className="text-6xl font-semibold text-black">
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
      <Image src={'/cta_image.jpg'} alt="CTA image" width={392} height={514} />
    </div>
  )
}

export default CTA
