import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import AnimatedLogoCloud from './partners-logo'

const Partners = () => {
  return (
    <div
      className="bg-muted *:py-20 *:max-w-screen-xl *:mx-auto *:px-4 *:sm:px-6 *:md:px-8 overflow-hidden"
      id="partners"
    >
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 self-center *:text-center">
          <div>
            <span className="text-sm text-secondary font-bold">CLIENT</span>
            <h2 className="text-6xl font-semibold text-black">
              Official Partners<span className="text-primary">.</span>
            </h2>
          </div>
          <AnimatedLogoCloud />
        </div>
        <div className="flex gap-8 justify-between *:flex-1">
          <div className="flex flex-col">
            <Image
              src={'/partners_img_1.jpg'}
              alt="Official partners image"
              width={420}
              height={240}
              className="self-center"
            />
            <div className="before:block before:absolute before:translate-y-8 before:inset-2 before:rotate-6 before:bg-primary relative">
              <Card className="rounded-none relative max-w-[34.375rem]">
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
            <div className="before:block before:absolute before:translate-y-8 before:inset-2 before:rotate-6 before:bg-primary relative">
              <Card className="rounded-none relative max-w-[34.375rem]">
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
