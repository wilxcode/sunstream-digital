import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const CaseStudies = () => {
  return (
    <div
      className="mx-auto flex max-w-screen-xl flex-col gap-16 px-4 sm:px-6 md:px-8"
      id="case-studies"
    >
      <div className="flex flex-col justify-between gap-y-8 lg:flex-row lg:gap-8 lg:gap-y-0 xl:gap-24">
        <div className="flex-1">
          <span className="text-sm font-bold text-secondary">CASE STUDIES</span>
          <h2 className="lg:5xl text-2xl font-semibold tracking-tight text-black sm:text-3xl md:text-4xl xl:text-6xl">
            Proven
            <span className="relative inline-block before:absolute before:-inset-1 before:hidden before:-rotate-3 before:bg-primary sm:-z-10 sm:py-3 sm:pr-14 sm:before:block">
              <span className="relative text-secondary">Expertise.</span>
            </span>
            <br /> Proven Results
            <span className="text-primary">.</span>
          </h2>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <p className="text-lg font-semibold">
            {`Our data-driven approach and innovative strategies have helped countless businesses achieve their goals. We're dedicated to delivering measurable results`}
          </p>
          <Button variant={'secondary'} size={'lg'} className="w-fit">
            Explore All Projects
          </Button>
        </div>
      </div>
      <div className="flex flex-col *:w-full xl:flex-row xl:flex-wrap xl:*:w-[50%]">
        <div className="flex flex-col items-center *:w-full sm:flex-row sm:*:w-[50%]">
          <Image
            src={'/case_studies_img_1.jpg'}
            alt="Case studies image"
            width={310}
            height={412}
            className="h-auto w-full xl:max-w-[310px]"
          />
          <div className="flex h-full flex-col justify-between gap-y-8 p-8 xl:gap-y-0">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-secondary lg:text-2xl">
                High-Performance Sneaker Brand
                <span className="text-primary">.</span>
              </h3>
              <p>{`A sneaker brand focused on high-performance shoes for athletes was struggling to differentiate its products in a saturated market and boost sales among competitive runners.`}</p>
            </div>
            <Button
              variant={'ghost'}
              className="w-fit gap-3 self-end font-bold"
            >
              <span>Read More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center *:w-full sm:flex-row-reverse sm:*:w-[50%] xl:flex-row">
          <Image
            src={'/case_studies_img_2.jpg'}
            alt="Case studies image"
            width={310}
            height={412}
            className="h-auto w-full xl:max-w-[310px]"
          />
          <div className="flex h-full flex-col justify-between gap-y-8 p-8 xl:gap-y-0">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-secondary lg:text-2xl">
                Luxury Perfume Brand
                <span className="text-primary">.</span>
              </h3>
              <p>{`A luxury perfume brand wanted to increase its online presence and attract younger, affluent customers while maintaining its exclusivity and heritage appeal.`}</p>
            </div>
            <Button
              variant={'ghost'}
              className="w-fit gap-3 self-end font-bold"
            >
              <span>Read More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center *:w-full sm:flex-row sm:*:w-[50%] xl:flex-row-reverse">
          <Image
            src={'/case_studies_img_3.jpg'}
            alt="Case studies image"
            width={310}
            height={412}
            className="h-auto w-full xl:max-w-[310px]"
          />
          <div className="flex h-full flex-col justify-between gap-y-8 p-8 xl:gap-y-0">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-secondary lg:text-2xl">
                Game Console Brand
                <span className="text-primary">.</span>
              </h3>
              <p>{`A new game console brand wanted to generate buzz and excitement ahead of its product launch, targeting both casual gamers and hardcore gaming communities.`}</p>
            </div>
            <Button
              variant={'ghost'}
              className="w-fit gap-3 self-end font-bold"
            >
              <span>Read More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center *:w-full sm:flex-row-reverse sm:*:w-[50%]">
          <Image
            src={'/case_studies_img_4.jpg'}
            alt="Case studies image"
            width={310}
            height={412}
            className="h-auto w-full xl:max-w-[310px]"
          />
          <div className="flex h-full flex-col justify-between gap-y-8 p-8 xl:gap-y-0">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-secondary lg:text-2xl">
                Canned Tomato Soup Brand
                <span className="text-primary">.</span>
              </h3>
              <p>{`A well-known canned soup brand wanted to revitalize its image and appeal to health-conscious millennials while staying true to its classic, comforting roots`}</p>
            </div>
            <Button
              variant={'ghost'}
              className="w-fit gap-3 self-end font-bold"
            >
              <span>Read More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
