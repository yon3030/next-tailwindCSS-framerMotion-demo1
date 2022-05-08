import { motion } from 'framer-motion'
import { MdMarkEmailRead } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-first-clr">
      <div className="relative mx-auto flex h-[70vh] max-w-7xl flex-col items-center justify-center p-5">
        <a
          href="mailto:vadim.ghedreutan@gmail.com"
          className="bg-red-clr absolute top-8 left-4 flex h-20 w-20 items-center justify-center  
        rounded-full sm:h-28 sm:w-28"
        >
          <MdMarkEmailRead className="h-8 w-8 cursor-pointer text-white" />
        </a>
        <div>
          <h1 className="flex flex-col text-6xl font-bold text-gray-900 lg:text-8xl">
            <motion.span
              initial={{ transform: 'scale(0)' }}
              animate={{ scale: [0, 1.1, 1] }}
              transition={{ type: 'spring', duration: 0.6, delay: 0.3 }}
            >
              Vadim
            </motion.span>
            <motion.span
              initial={{ transform: 'scale(0)' }}
              animate={{ scale: [0, 1.1, 1] }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.4 }}
            >
              Ghedreutan
            </motion.span>
          </h1>
          <motion.h3
            className="mt-3 flex items-center justify-end space-x-4 text-sm text-gray-900"
            initial={{ transform: 'scale(0)' }}
            animate={{ scale: [0, 1.1, 1] }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
          >
            <span className="w-8 border-t-4 border-[#F41E1D]"></span>
            <span className="text-base">Web dev</span>
          </motion.h3>
        </div>
        <div className="absolute top-8 right-8">
          <div className="flex flex-col items-center space-y-4">
            <motion.a
              href="https://github.com/vadimghedreutan"
              whileTap={{ scale: 0.9 }}
              initial={{ transform: 'scale(0)' }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.6 }}
            >
              <FaGithub
                className="h-9 w-9 cursor-pointer text-gray-900 
              transition-all duration-500 ease-out hover:scale-125"
              />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/vadimghedreutan"
              whileTap={{ scale: 0.9 }}
              initial={{ transform: 'scale(0)' }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.7 }}
            >
              <FaLinkedin
                className="h-9 w-9 cursor-pointer text-gray-900
              transition-all duration-500 ease-out hover:scale-125"
              />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/vadim_ghedreutan/"
              whileTap={{ scale: 0.9 }}
              initial={{ transform: 'scale(0)' }}
              animate={{ scale: [0, 1, 1.1, 1] }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.8 }}
            >
              <FaInstagram
                className="h-9 w-9 cursor-pointer text-gray-900
              transition-all duration-500 ease-out hover:scale-125"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
