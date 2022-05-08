import { motion } from 'framer-motion'
import { ImArrowDownLeft2 } from 'react-icons/im'

interface Project {
  title: string
  description: string
  createdYear: number
  image: string
  link: string
}

function Clients({ title, description, createdYear, image, link }: Project) {
  return (
    <a
      href={link}
      className="group mx-auto flex max-w-lg flex-col items-center justify-center py-10"
    >
      <div className="flex items-center justify-between space-x-2">
        <div>
          <span>{createdYear}</span>
        </div>
        <div className="px-2">
          <h3 className="text-2xl font-semibold sm:text-4xl">{title}</h3>
        </div>
        <motion.div
          initial={{ opacity: '0', y: '-100%' }}
          animate={{ opacity: '1', y: 0 }}
          transition={{ type: 'spring', duration: 0.8, delay: 0.3 }}
        >
          <ImArrowDownLeft2 className="h-8 w-8" />
        </motion.div>
      </div>
      <div className="py-12">
        <img
          src={image}
          alt=""
          className="h-[25vh] w-full object-contain transition-transform
        duration-500 ease-in-out group-hover:scale-105 sm:h-[35vh]"
        />
      </div>
      <div className="mx-auto max-w-sm text-center sm:max-w-lg">
        <h3 className="text-lg">{description}</h3>
      </div>
    </a>
  )
}

export default Clients
