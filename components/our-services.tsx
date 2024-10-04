import Image from 'next/image'

const OurServices = () => {
  return (
    <div
      className="bg-muted *:py-20 *:max-w-screen-xl *:mx-auto *:px-4 *:sm:px-6 *:md:px-8"
      id="services"
    >
      <div className="flex justify-between gap-28">
        <div className="flex-1 flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-sm text-secondary font-bold">
                ILLUMINATE
              </span>
              <h2 className="text-5xl font-semibold text-black">
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
            <div className="flex flex-col gap-4 size-fit">
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
        <div className="flex flex-col gap-8 p-6 flex-1">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <Image
                src={'/our_services_svg_1.svg'}
                alt=""
                width={40}
                height={40}
              />
              <h3 className="text-2xl text-black">
                Data-Driven Digital Marketing
              </h3>
            </div>
            <p>{`Using the power of analytics and AI, we tailor campaigns that deliver measurable results and reach your target audience effectively.`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <Image
                src={'/our_services_svg_2.svg'}
                alt=""
                width={40}
                height={40}
              />
              <h3 className="text-2xl text-black">Creative Content Creation</h3>
            </div>
            <p>{`From video production to compelling copy, our creative team ensures that your brand message resonates across all platforms.`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <Image
                src={'/our_services_svg_3.svg'}
                alt=""
                width={40}
                height={40}
              />
              <h3 className="text-2xl text-black">SEO & SEM Optimization</h3>
            </div>
            <p>{`Boost your visibility with search engine strategies that put your business in front of the right people, at the right time.`}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <Image
                src={'/our_services_svg_4.svg'}
                alt=""
                width={40}
                height={40}
              />
              <h3 className="text-2xl text-black">Social Media Management</h3>
            </div>
            <p>{`Engage your audience with targeted social media campaigns designed to grow your brand’s community and influence.`}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
