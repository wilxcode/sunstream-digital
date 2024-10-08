import Image from 'next/image'

const OurServices = () => {
  return (
    <div
      className="bg-muted *:mx-auto *:max-w-screen-xl *:px-4 *:sm:px-6 *:md:px-8"
      id="services"
    >
      <div className="flex flex-col justify-between gap-y-8 lg:flex-row lg:gap-16 lg:gap-y-0 xl:gap-28">
        <div className="flex flex-1 flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-sm font-bold text-secondary">
                ILLUMINATE
              </span>
              <h2 className="lg:5xl text-2xl font-semibold tracking-tight text-black sm:text-3xl md:text-4xl xl:text-6xl">
                Our Services<span className="text-primary">.</span>
              </h2>
            </div>
            <p>{`At Sunstream Digital, we harness innovative strategies tailored to your unique needs. Our targeted marketing solutions ensure that your message reaches the right audience effectively.`}</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="size-fit">
              <Image
                src={'/our_services_img_1.jpg'}
                alt="Our services image"
                width={170}
                height={300}
              />
            </div>
            <div className="flex size-fit flex-col gap-4">
              <Image
                src={'/our_services_img_2.jpg'}
                alt="Our services image"
                width={212}
                height={140}
              />
              <Image
                src={'/our_services_img_3.jpg'}
                alt="Our services image"
                width={212}
                height={140}
              />
            </div>
            <div className="size-fit">
              <Image
                src={'/our_services_img_4.svg'}
                alt="About Us Image"
                width={210}
                height={322}
                className="relative"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-8 p-6 pl-0 lg:pl-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary p-2">
                <Image
                  src={'/our_services_svg_1.svg'}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-xl text-black lg:text-2xl">
                Data-Driven Digital Marketing
              </h3>
            </div>
            <p>{`Using the power of analytics and AI, we tailor campaigns that deliver measurable results and reach your target audience effectively.`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary p-2">
                <Image
                  src={'/our_services_svg_2.svg'}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-xl text-black lg:text-2xl">
                Creative Content Creation
              </h3>
            </div>
            <p>{`From video production to compelling copy, our creative team ensures that your brand message resonates across all platforms.`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary p-2">
                <Image
                  src={'/our_services_svg_3.svg'}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-xl text-black lg:text-2xl">
                SEO & SEM Optimization
              </h3>
            </div>
            <p>{`Boost your visibility with search engine strategies that put your business in front of the right people, at the right time.`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary p-2">
                <Image
                  src={'/our_services_svg_4.svg'}
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-xl text-black lg:text-2xl">
                Social Media Management
              </h3>
            </div>
            <p>{`Engage your audience with targeted social media campaigns designed to grow your brand’s community and influence.`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
