import type { NextPage } from 'next'
import Header from '../components/Header'
import { ImArrowRight2 } from 'react-icons/im'
import Footer from '../components/Footer'
import Clients from '../components/Clients'
import Seo from '../components/Seo'

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Seo
        title="Vadim Ghedreutan | Developer"
        description="You need a website for your startup or business?"
      />
      <Header />
      <main>
        <div className="mx-auto max-w-7xl p-5">
          <h1 className="text-xl font-bold">Selected projects.</h1>
          <div>
            <div className="grid gap-x-6 lg:grid-cols-2">
              <Clients
                title="tofanconsult.de"
                description="NextJS, Sass, Tailwind, Framer motion, Prismic"
                link="https://tofanconsult.de"
                createdYear={2022}
                projectNumber={1}
                image="/tofanwebsite.png"
                bgColor="first"
              />
              <Clients
                title="teemone.de"
                description="Wordpress, Sass, Gsap"
                link="https://teemone.de"
                createdYear={2021}
                projectNumber={2}
                image="/teemwebsite.png"
                bgColor="second"
              />
              <Clients
                title="vadimghedreutan.io"
                description="NextJS, Tailwind, Sanity"
                link="https://github.com/vadimghedreutan/VGProfile2.2"
                createdYear={2022}
                projectNumber={3}
                image="/personalwebsite.png"
                bgColor="third"
              />
              <Clients
                title="fitnesstime-pf.de"
                description="Design - Figma"
                link="https://fitnesstime-pf.de"
                createdYear={2021}
                projectNumber={4}
                image="/fitnesstimewebsite.png"
                bgColor="fourth"
              />
            </div>
          </div>

          {/* all projects */}
          <div className="my-10 flex justify-center">
            <a href="/projects" className="cta space-x-2">
              all projects. <ImArrowRight2 />
            </a>
          </div>

          {/* Say hi */}
          <div className="mx-auto my-5 max-w-xs sm:max-w-lg">
            <img src="/ipad_pro.png" alt="" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
