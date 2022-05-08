interface ProjectCardProps {
  title: string
  img: string
  description: string
  link: string
}

const ProjectCard = ({ title, img, description, link }: ProjectCardProps) => {
  return (
    <a href={link}>
      <img src={img} alt="" className="border-[.8px] border-gray-900 p-1" />

      <div className="py-3">
        <h3 className="text-2xl">{title} - </h3>
        <p>{description}</p>
      </div>
    </a>
  )
}

export default ProjectCard
