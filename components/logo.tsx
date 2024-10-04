import Image from 'next/image'
import Link from 'next/link'

type LogoProps = {
  type: 'link' | 'image'
}

const Logo = (props: LogoProps) => {
  return (
    <>
      {props.type === 'link' ? (
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/logo.svg"
            alt="Sunstream Digital Logo"
            width={48}
            height={48}
          />
          <span className="font-semibold text-black">
            Sunstream <br /> Digital
          </span>
        </Link>
      ) : (
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.svg"
            alt="Sunstream Digital Logo"
            width={48}
            height={48}
          />
          <span className="font-semibold text-black">
            Sunstream <br /> Digital
          </span>
        </div>
      )}
    </>
  )
}

export default Logo
