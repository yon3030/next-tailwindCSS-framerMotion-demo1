import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ProjectCardProps {
  title: string
  img: string
  description: string
  link: string
}

const cardVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', duration: 2, delay: 0.1 },
  },
  hidden: { opacity: 0, scale: 0.9 },
}

const ProjectCard = ({ title, img, description, link }: ProjectCardProps) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.a
      href={link}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
    >
      <img src={img} alt="" className="border-[.8px] border-gray-900 p-1" />

      <div className="py-3">
        <h3 className="text-2xl">{title} - </h3>
        <p>{description}</p>
      </div>
    </motion.a>
  )
}

export default ProjectCard
