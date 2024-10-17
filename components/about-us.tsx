import Image from 'next/image'

const AboutUs = () => {
  return (
    <div
      className="bg-muted *:max-w-screen-xl *:mx-auto *:px-4 *:sm:px-6 *:md:px-8"
      id="about"
    >
      <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-12">
        <div className="flex-1 flex flex-col gap-8 max-w-[37.125rem]">
          <div>
            <span className="text-sm text-secondary font-bold">ABOUT US</span>
            <h2 className="text-2xl tracking-tight font-semibold text-black sm:text-3xl md:text-4xl lg:5xl xl:text-6xl">
              Who We Are<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p>{`At Sunstream Digital, we’re all about illuminating your brand with bold, innovative marketing strategies. Our team combines creativity with cutting-edge technology to craft digital campaigns that captivate and convert. Whether you’re looking to grow your online presence or launch a new product, we’re here to help you shine.`}</p>
            <p>{`At Sunstream Digital, our success is defined by the results we deliver. From innovative campaigns to record-breaking growth, we’ve partnered with brands to help them reach new height`}</p>
          </div>
        </div>
        <div>
          <Image
            src={'/about_image.png'}
            alt="About Us Image"
            style={{
              width: 'auto',
              height: 'auto',
            }}
            width={498}
            height={334}        
            className="relative w-full h-auto xl:max-w-[498px]"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
