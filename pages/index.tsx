import type { NextPage } from 'next'
import Header from '../components/Header'
import { ImArrowRight2 } from 'react-icons/im'
import Footer from '../components/Footer'
import Clients from '../components/Clients'
import Seo from '../components/Seo'
import { motion } from 'framer-motion'
import { ImArrowDownLeft2 } from 'react-icons/im'

const Home: NextPage = () => {
  return (
    <div>
      <Seo
        title="Vadim Ghedreutan | Developer"
        description="You need a website for your startup or business?"
      />
      <Header />
      <main className="mx-auto 3xl:max-w-7xl">
        <div className="mx-3">
          <div className="relative grid lg:grid-cols-2">
            <h1 className=" absolute -top-14 left-4 text-7xl font-bold text-black  sm:-top-20 sm:text-8xl">
              Projects.
            </h1>
            <div className="bg-projects-clr-first lg:col-span-2">
              <Clients
                title="tofanconsult.de"
                description="NextJS, Sass, Tailwind, Framer motion, Prismic"
                link="https://tofanconsult.de"
                createdYear={2022}
                image="/tofanwebsite.png"
              />
            </div>
            <div className="bg-projects-clr-second ">
              <Clients
                title="teemone.de"
                description="Wordpress, Sass, Gsap"
                link="https://teemone.de"
                createdYear={2021}
                image="/teemwebsite.png"
              />
            </div>
            <div className="bg-projects-clr-third text-gray-900">
              <Clients
                title="vadimghedreutan.io"
                description="NextJS, Tailwind, Sanity"
                link="https://github.com/vadimghedreutan/VGProfile2.2"
                createdYear={2022}
                image="/personalwebsite.png"
              />
            </div>
            <div className="bg-projects-clr-fourth lg:col-span-2">
              <Clients
                title="fitnesstime-pf.de"
                description="Design - Figma"
                link="https://fitnesstime-pf.de"
                createdYear={2021}
                image="/fitnesstimewebsite.png"
              />
            </div>
          </div>
        </div>

        <div className="mx-3 mb-12 mt-8 bg-[#17181C] py-12">
          {/* all projects */}
          <div className="my-10 flex justify-center">
            <a href="/projects" className="cta space-x-2 text-gray-900">
              all projects. <ImArrowRight2 />
            </a>
          </div>

          <div>
            {/* Say hi */}
            <div className="mx-auto my-5 max-w-xs sm:max-w-lg">
              <img src="/ipad_pro.png" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
