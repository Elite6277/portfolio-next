import ServiceSlider from "../../components/ServiceSlider"
import Circles from "../../components/Circles"
import Bulb from "../../components/Bulb"

import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex item-center">
      <Circles />
      <div className="container mx-auto flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              className="h2 xl:mt-8"
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              In the world of web development, where technology is changing at
              an incredible speed, I offer my services as an experienced
              Frontend Developer. My goal is to create not only visually
              appealing, but also functionally rich websites and applications
              that provide a seamless user experience.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {/* slider */}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Services
