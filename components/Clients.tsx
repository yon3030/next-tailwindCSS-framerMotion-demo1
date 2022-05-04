import { motion } from 'framer-motion'
import { ImArrowDownLeft2 } from 'react-icons/im'

interface Project {
  title: string
  description: string
  createdYear: number
  projectNumber: number
  image: string
  link: string
  bgColor: string
}

function Clients({
  title,
  description,
  projectNumber,
  createdYear,
  image,
  link,
  bgColor,
}: Project) {
  return (
    <div className="mt-12 px-5 lg:px-0">
      <a href={link} className="group">
        <div className="mb-4 grid grid-cols-[45px_1fr_auto]">
          <div className="flex flex-col justify-between text-xs">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white p-2">
              {projectNumber}
            </span>
            <span className="text-gray-500">{createdYear}</span>
          </div>
          <div className="px-2">
            <h3>{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
          <motion.div
            className="flex flex-col justify-end"
            initial={{ opacity: '0', y: '-100%' }}
            animate={{ opacity: '1', y: 0 }}
            transition={{ type: 'spring', duration: 0.8, delay: 0.3 }}
          >
            <ImArrowDownLeft2 className="h-8 w-8" />
          </motion.div>
        </div>

        <div className={`bg-projects-clr-${bgColor} aspect-video p-2`}>
          <img
            src={image}
            alt=""
            className="h-[25vh] w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
      </a>
    </div>
  )
}

export default Clients
