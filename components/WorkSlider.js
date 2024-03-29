// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/1.png",
          link: "https://react-turkmen-music-app.vercel.app/",
        },
        {
          title: "title",
          path: "/9.png",
          link: "https://mntn-landing-eta.vercel.app/",
        },
        {
          title: "title",
          path: "/3.png",
          link: "https://portfolio-site-black-ten.vercel.app/",
        },
        {
          title: "title",
          path: "/4.png",
          link: "https://my-netflix-deploy.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/5.png",
          link: "https://myonline-chat-client.vercel.app/",
        },
        {
          title: "title",
          path: "/7.png",
          link: "https://nike-five-beta.vercel.app/",
        },
        {
          title: "title",
          path: "/8.png",
          link: "https://hookbank-three.vercel.app/",
        },
        {
          title: "title",
          path: "/10.png",
          link: "https://medet-online-shop.vercel.app/",
        },
      ],
    },
  ],
}

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { Pagination } from "swiper"

// icons
import { BsArrowRight } from "react-icons/bs"

import Image from "next/image"
import Link from "next/link"

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[300px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              key={index}
              className=" grid grid-cols-2 max-sm:fix gap-4 cursor-pointer"
            >
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    {/* image */}
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Link href={image.link}>
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        {/* <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"> */}
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center transition-all duration-300">
                          <div className="flex items-center gap-x-2  text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="translate-y-[600%] group-hover:translate-y-0 transition-all duration-300 delay-50">
                              LIVE
                            </div>
                            {/* title part 2 */}
                            <div className="translate-y-[600%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[600%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default WorkSlider
