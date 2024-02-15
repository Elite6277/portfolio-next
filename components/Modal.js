// Modal.js
import React from "react"
import { motion, AnimatePresence } from "framer-motion"

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.75 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.75 }}
            className="bg-[#140f26] text-white p-6 rounded-lg shadow-lg max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
