import Image from "next/image"

import Link from "next/link"

import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 max-sm:py-0 max-sm:flex-col max-sm:gap-0">
          <Link href={"/"}>
            {/* <Image
              className="animate-spin-slow "
              src={"./logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            /> */}
            <h3 className="text-[26px] font-thin max-sm:flex max-sm:gap-2">
              medet
              <span className="font-bold"> nurmyradov</span>
              <span className="text-accent">.</span>
            </h3>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  )
}

export default Header
