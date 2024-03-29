// Contact.js
import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"
// import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs"
import emailjs from "@emailjs/browser"
import Modal from "../../components/Modal" // Убедитесь, что путь к Modal.js правильный

const Contact = () => {
  const form = useRef()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState("")

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_453danu",
        "template_an9gjwe",
        form.current,
        "j_i-ditFXQ4Nn3suj"
      )
      .then(
        (result) => {
          setModalContent("SUCCESS: Your message has been sent successfully!")
          setIsModalOpen(true)
          form.current.reset()
        },
        (error) => {
          setModalContent(
            "FAILED: Failed to send your message. Please try again later."
          )
          setIsModalOpen(true)
        }
      )
  }

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p className="text-accent font-bold">{modalContent}</p>
        <button className="btn mt-4" onClick={() => setIsModalOpen(false)}>
          Close
        </button>
      </Modal>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Let&apos;s <span className="text-accent">connect.</span>
            </motion.h2>
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  className="input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className="input"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="input"
              />
              <textarea
                placeholder="Message"
                name="message"
                className="textarea"
              ></textarea>
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 group-hover:text-[#F13024]">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] fill-[#F13024]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
