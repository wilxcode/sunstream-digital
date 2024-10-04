import NumberTicker from './ui/number-ticker'

const Stats = () => {
  return (
    <div className="grid grid-cols-3 items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 *:grid *:grid-cols-[30%_auto_1fr] *:gap-2 *:items-center">
      <div>
        <span className="text-6xl text-secondary font-semibold grid grid-cols-[auto_1fr_auto]">
          $<NumberTicker value={2} />M
        </span>
        <span className="text-6xl text-primary font-extrabold">+</span>
        <span className="text-2xl">
          Ad Revenue <br /> Generated
        </span>
      </div>
      <div>
        <span className="text-6xl text-secondary font-semibold">
          <NumberTicker value={300} />
        </span>
        <span className="text-6xl text-primary font-extrabold">+</span>
        <span className="text-2xl">
          Successful <br /> Campaigns
        </span>
      </div>
      <div>
        <span className="text-6xl text-secondary font-semibold">
          <NumberTicker value={500} />
        </span>
        <span className="text-6xl text-primary font-extrabold">%</span>
        <span className="text-2xl">
          Increase in <br /> Organic Traffic
        </span>
      </div>
    </div>
  )
}

export default Stats
