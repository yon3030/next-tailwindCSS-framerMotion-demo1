import { ImArrowLeft2 } from 'react-icons/im'
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
        className="min-h-screen bg-[#3CAB87]"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <div className="mx-auto 3xl:max-w-7xl">
          <div className="grid grid-cols-4">
            <div className="sticky top-0 h-screen p-8">
              <div className="w-full text-center">
                <Link href="/">
                  <ImArrowLeft2 className="h-12 w-12 cursor-pointer" />
                </Link>
              </div>
            </div>
            <div className="col-span-3">
              <div className="grid md:grid-cols-2 xl:grid-cols-4">
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
  }
}
