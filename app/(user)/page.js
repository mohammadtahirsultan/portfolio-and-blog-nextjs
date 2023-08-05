import Image from "next/image"
import TutorialCard from "../components/TutorialCard"
import BlogCard from "../components/BlogCard"
import { fetchHomeBlogData, fetchProjectHomeData } from "../sanity/client"
import { generateStaticParams } from "./staticPagesBuild"


export const revalidate = 30
 
export default async function Home() {

  await generateStaticParams()

  const res = await fetchHomeBlogData()
  const project = await fetchProjectHomeData()

  return (
    <>
      <section className="text-gray-600 body-font max-w-full md:mx-10 ">
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to Ghareeb Star Blog
            </h1>
            <p className="mb-8 leading-relaxed">Ghareeb Star Blog, Your Source for Programming Insights and Web Development Wonders!❤😎
              <br />
              Explore the fusion of programming brilliance and web development artistry at Ghareeb Star Blog. Join me in unraveling the complexities of coding, discovering valuable tips, and diving into the realm of crafting captivating websites. Delve into my web development projects, where innovation knows no bounds. Let&apos;s embark on this digital adventure together</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg">Projects</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Blogs</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded" alt="hero" src="/blog.jpg" width={"500"} height={"500"} />
          </div>
        </div>
      </section>

      {/* Blogs  */}

      <section className="text-gray-600 body-font max-w-full md:mx-10">
        <h2 className="text-3xl font-medium title-font text-gray-900 mb-4 text-center">Blogs</h2>
        <div className='flex justify-center items-center'>
          <hr className='py-0.5 w-20 bg-black' />
        </div>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">

            {
              res &&
              res.map((item) => {
                return <BlogCard title={item.title} description={item.description} key={item._id} mainImage={item.mainImage.asset._ref} category={item.category} slug={item.slug.current} />;
              })
            }

          </div>
        </div>
      </section>

      {/* Projects  */}
      <section className="text-gray-600 body-font max-w-full md:mx-10">
        <h3 className="text-3xl font-medium title-font text-gray-900 mb-4 text-center">Projects</h3>
        <div className='flex justify-center items-center'>
          <hr className='py-0.5 w-20 bg-black' />
        </div>
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap -m-4">

            {
              project && project.map((item) => <TutorialCard title={item.title} description={item.description} key={item._id} mainImage={item.Image.asset._ref} category={item.category} projectUrl={item.url} />)
            }


          </div>
        </div>
      </section>

      {/* Testimonials  */}


      <section className="text-gray-600 body-font max-w-full md:mx-10">
        <div className="container px-5 py-8 mx-auto">
          <h3 className="text-3xl font-medium title-font text-gray-900 mb-4 text-center">Testimonials</h3>
          <div className='flex justify-center items-center'>
            <hr className='py-0.5 w-20 bg-black mb-16' />
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h345.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h345.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">I stumbled upon Share Programming&apos;s blog and YouTube channel while learning web development. The tutorials are crystal clear, and the instructor&apos;s teaching style makes complex topics easy to grasp. This resource is a game-changer for anyone looking to excel in programming.</p>
                <a className="inline-flex items-center">
                  <Image alt="testimonial" src="/user1.jpg" width={"500"} height={"500"} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Nancy</span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h345.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h345.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">Share Programming&apos;s blog and YouTube channel are my go-to for programming knowledge. The blog&apos;s articles are insightful, and the video tutorials are fantastic. They&apos;ve elevated my skills and understanding, making me a more confident developer. Highly recommended!.</p>
                <a className="inline-flex items-center">
                  <Image height={"500"} width={"500"} alt="testimonial" src="/user2.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">Alia Khan</span>
                    <span className="text-gray-500 text-sm">Full Stack Web Developer</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
