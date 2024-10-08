import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import AnimatedLogoCloud from './ui/animated-logo-cloud'

const Partners = () => {
  return (
    <div
      className="overflow-hidden bg-muted *:mx-auto *:max-w-screen-xl *:px-4 *:sm:px-6 *:md:px-8"
      id="partners"
    >
      <div className="flex flex-col gap-16 pb-12">
        <div className="flex flex-col gap-8 self-center *:text-center">
          <div>
            <span className="text-sm font-bold text-secondary">CLIENT</span>
            <h2 className="lg:5xl text-2xl font-semibold tracking-tight text-black sm:text-3xl md:text-4xl xl:text-6xl">
              Official Partners<span className="text-primary">.</span>
            </h2>
          </div>
          <AnimatedLogoCloud />
        </div>
        <div className="flex flex-col justify-between gap-8 gap-y-28 *:flex-1 md:flex-row md:gap-y-0">
          <div className="flex flex-col">
            <Image
              src={'/partners_img_1.jpg'}
              alt="Official partners image"
              width={420}
              height={240}
              className="self-center"
            />
            <div className="relative before:absolute before:inset-2 before:block before:translate-y-8 before:rotate-6 before:bg-primary">
              <Card className="relative max-w-[34.375rem] rounded-none">
                <CardHeader>
                  <CardTitle className="text-lg text-black">{`"Their approach to social media marketing completely transformed our brand’s online presence. We couldn’t be happier with the results."`}</CardTitle>
                </CardHeader>
                <CardContent>— Sarah Johnson, CEO, TechPulse</CardContent>
              </Card>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={'/partners_img_2.jpg'}
              alt="Official partners image"
              width={420}
              height={240}
              className="self-center"
            />
            <div className="relative before:absolute before:inset-2 before:block before:translate-y-8 before:rotate-6 before:bg-primary">
              <Card className="relative max-w-[34.375rem] rounded-none">
                <CardHeader>
                  <CardTitle className="text-lg text-black">{`"Sunstream Digital helped us increase our web traffic by 300% in just six months! Their team is responsive, creative, and truly invested in our success."`}</CardTitle>
                </CardHeader>
                <CardContent>
                  — Mark Thompson, Founder, GreenLeaf Co.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
