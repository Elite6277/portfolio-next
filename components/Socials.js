import Link from "next/link"
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiGithubLine,
} from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link> */}
      <Link
        href={"https://www.instagram.com/medet__7777"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://github.com/Elite6277"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link> */}
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link> */}
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link> */}
    </div>
  )
}

export default Socials
