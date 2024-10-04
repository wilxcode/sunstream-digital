const logos = [
  {
    name: 'Skoda',
    url: '/partners_logo_1.svg',
  },
  {
    name: 'S',
    url: '/partners_logo_2.svg',
  },
  {
    name: 'KN',
    url: '/partners_logo_3.svg',
  },
  {
    name: 'Nokia',
    url: '/partners_logo_4.svg',
  },

  {
    name: 'Intel',
    url: '/partners_logo_5.svg',
  },
  {
    name: 'Mahindra',
    url: '/partners_logo_6.svg',
  },
  {
    name: 'Oppo',
    url: '/partners_logo_7.svg',
  },
  {
    name: 'Fils',
    url: '/partners_logo_8.svg',
  },
]

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-16"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-10 w-28 px-2"
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AnimatedLogoCloud