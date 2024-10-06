import NumberTicker from './ui/number-ticker'

const Stats = () => {
  return (
    <div className="flex flex-wrap gap-12 items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 *:flex *:flex-col *:items-center *:gap-1 *:text-center lg:*:flex-row lg:*:gap-4 xl:*:text-left">
      <div>
        <span className="text-2xl text-secondary font-semibold flex items-center tracking-tight sm:text-3xl md:text-4xl lg:5xl xl:text-6xl">
          <span>$</span>
          <span className="hidden xl:inline-block w-[38px] flex-none">
            <NumberTicker value={2} />
          </span>
          <span className="xl:hidden">2</span>
          <span className="flex">
            <span>M</span>
            <span className="text-primary font-extrabold">+</span>
          </span>
        </span>
        <span className="text-lg lg:text-2xl">
          Ad Revenue <br /> Generated
        </span>
      </div>
      <div>
        <span className="text-2xl text-secondary font-semibold flex items-center tracking-tight sm:text-3xl md:text-4xl lg:5xl xl:text-6xl">
          <span className="hidden xl:inline-block w-[123px] flex-none">
            <NumberTicker value={300} />
          </span>
          <span className="xl:hidden">300</span>
          <span className="text-primary font-extrabold">+</span>
        </span>
        <span className="text-lg lg:text-2xl">
          Successful <br /> Campaigns
        </span>
      </div>
      <div>
        <span className="text-2xl text-secondary font-semibold flex items-center tracking-tight sm:text-3xl md:text-4xl lg:5xl xl:text-6xl">
          <span className="hidden xl:inline-block w-[125px] flex-none">
            <NumberTicker value={500} />
          </span>
          <span className="xl:hidden">500</span>
          <span className="text-primary font-extrabold">%</span>
        </span>
        <span className="text-lg lg:text-2xl">
          Increase in <br /> Organic Traffic
        </span>
      </div>
    </div>
  )
}

export default Stats
