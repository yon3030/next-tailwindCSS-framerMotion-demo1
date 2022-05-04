interface ProjectCardProps {
  title: string
  img: string
  description: string
  link: string
}

const ProjectCard = ({ title, img, description, link }: ProjectCardProps) => {
  return (
    <a href={link} className="bg-[whitesmoke] p-1 sm:p-2">
      <div className="card">
        <img src={img} alt="" />
        <div className="card-content">
          <div className="card-title text-sm text-gray-500">{title}</div>
          <div className="card-description truncate pt-1 text-xs text-gray-500 sm:text-sm">
            {description}
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
