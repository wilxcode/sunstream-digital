import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const CaseStudies = () => {
  return (
    <div
      className="flex flex-col gap-16 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8"
      id="case-studies"
    >
      <div className="flex justify-between gap-24">
        <div className="flex-1">
          <span className="text-sm text-secondary font-bold">CASE STUDIES</span>
          <h2 className="text-6xl font-semibold text-black">
            Proven
            <span className="before:block before:absolute before:-inset-1 before:-rotate-3 before:bg-primary relative inline-block py-3 pr-14 -z-10">
              <span className="relative text-secondary">Expertise.</span>
            </span>
            <br /> Proven Results
            <span className="text-primary">.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-8 flex-1">
          <p className="text-lg font-semibold">
            {`Our data-driven approach and innovative strategies have helped countless businesses achieve their goals. We're dedicated to delivering measurable results`}
          </p>
          <Button variant={'secondary'} size={'lg'} className="w-fit">
            Explore All Projects
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap *:w-[50%]">
        <div className="flex items-center *:w-[50%]">
          <Image
            src={'/case_studies_img_1.jpg'}
            alt="Case studies image"
            width={310}
            height={412}
          />
          <div className="p-8 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-secondary font-semibold">
                High-Performance Sneaker Brand
                <span className="text-primary">.</span>
              </h3>
              <p>{`A sneaker brand focused on high-performance shoes for athletes was struggling to differentiate its products in a saturated market and boost sales among competitive runners.`}</p>
            </div>
            <Button
              variant={'ghost'}
              className="w-fit gap-3 font-bold self-end"
            >
              <span>Read More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex items-center *:w-[50%]">
          <Image
            src={'/case_studies_img_2.jpg'}
            alt="Case studies image"
            width={310}
            height={412}
          />
          <div className="p-8 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-secondary font-semibold">
                Luxury Perfume Brand
                <span className="text-primary">.</span>
              </h3>
              <p>{`A luxury perfume brand wanted to increase its online presence and attract younger, affluent customers while maintaining its exclusivity and heritage appeal.`}</p>
            </div>
            <Button
              variant={'ghost'}
              className="w-fit gap-3 font-bold self-end"
            >
              <span>Read More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex items-center flex-row-reverse *:w-[50%]">
          <Image
            src={'/case_studies_img_3.jpg'}
            alt="Case studies image"
            width={310}
            height={412}
          />
          <div className="p-8 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-secondary font-semibold">
                Game Console Brand
                <span className="text-primary">.</span>
              </h3>
              <p>{`A new game console brand wanted to generate buzz and excitement ahead of its product launch, targeting both casual gamers and hardcore gaming communities.`}</p>
            </div>
            <Button
              variant={'ghost'}
              className="w-fit gap-3 font-bold self-end"
            >
              <span>Read More</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="flex items-center flex-row-reverse *:w-[50%]">
          <Image
            src={'/case_studies_img_4.jpg'}
            alt="Case studies image"
            width={310}
            height={412}
          />
          <div className="p-8 flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-secondary font-semibold">
                Canned Tomato Soup Brand
                <span className="text-primary">.</span>
              </h3>
              <p>{`A well-known canned soup brand wanted to revitalize its image and appeal to health-conscious millennials while staying true to its classic, comforting roots`}</p>
            </div>
            <Button
              variant={'ghost'}
              className="w-fit gap-3 font-bold self-end"
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
