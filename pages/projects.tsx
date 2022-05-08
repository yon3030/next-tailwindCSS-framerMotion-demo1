import { ImArrowLeft2 } from 'react-icons/im'
import { MdMarkEmailRead } from 'react-icons/md'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { sanityClient, urlFor } from '../sanity'
import ProjectCard from '../components/ProjectCard'
import Seo from '../components/Seo'

interface IPost {
  _id: string
  _createdAt: string
  title: string
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  link: string
}

interface PostsProps {
  posts: IPost[]
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export default function Projects({ posts }: PostsProps) {
  return (
    <>
      <Seo
        title="Vadim Ghedreutan | Portfolio"
        description="You need a website for your startup or business?"
      />
      <motion.section
        className="min-h-screen text-gray-900"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <div className="mx-auto max-w-7xl p-5">
          <div className="relative flex items-center justify-between">
            <div>
              <div
                className="bg-red-clr absolute top-0 left-0 flex h-20 w-20 items-center justify-center  
        rounded-full sm:h-28 sm:w-28"
              >
                <MdMarkEmailRead className="h-8 w-8 cursor-pointer text-white" />
              </div>
            </div>
            <div>
              <Link href="/">
                <ImArrowLeft2 className="h-12 w-12 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="my-12 w-full text-center">
            <h1 className="text-6xl font-bold">Projects.</h1>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ProjectCard
                key={post._id}
                title={post.title}
                img={urlFor(post.mainImage).url()!}
                description={post.description}
                link={post.link}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    _createdAt,
      title,
      description,
    mainImage,
    link
}`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  }
}
