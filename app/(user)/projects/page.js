import { fetchProjectData } from '../../sanity/client'
import TutorialCard from "../../components/TutorialCard";

import { generateStaticParams } from './generateStaticPages';

export const revalidate = 30

const Tutorials = async () => {
  await generateStaticParams()
  const project = await fetchProjectData()
  return (
    <section className="mt-8 text-gray-600 body-font max-w-full md:mx-10">
      <h1 className='text-center md:text-3xl text-black '>Tutorials</h1>
      <div className='flex justify-center items-center'>
        <hr className='py-0.5 mt-2 w-20 bg-black' />
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">

          {
            project && project.map((item) => <TutorialCard title={item.title} description={item.description} key={item._id} mainImage={item.Image.asset?._ref} category={item.category} projectUrl={item.url} />)
          }

        </div>
      </div>
    </section>
  )
}

export default Tutorials