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

export default function Projects({ posts }: PostsProps) {
  return (
    <>
      <Seo
        title="Vadim Ghedreutan | Portfolio"
        description="You need a website for your startup or business?"
      />
      <section className="min-h-screen text-gray-900">
        <div className="mx-auto max-w-7xl p-5">
          <div className="relative flex items-center justify-between">
            <div>
              <motion.a
                href="mailto:vadim.ghedreutan@gmail.com"
                className="bg-red-clr group absolute top-0 left-0 flex h-20 w-20 items-center justify-center  
        rounded-full sm:h-28 sm:w-28"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ type: 'spring', duration: 2 }}
              >
                <MdMarkEmailRead
                  className="h-8 w-8 cursor-pointer text-white transition-transform
        duration-500 ease-in-out group-hover:scale-150"
                />
              </motion.a>
            </div>
            <div>
              <Link href="/">
                <ImArrowLeft2 className="h-12 w-12 cursor-pointer" />
              </Link>
            </div>
          </div>
          <div className="my-20 w-full text-center">
            <motion.h1
              className="text-6xl font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: 'spring', duration: 2 }}
            >
              Projects.
            </motion.h1>
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
      </section>
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
