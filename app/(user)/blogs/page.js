import React from 'react'
import BlogCard from '../../components/BlogCard'
import { generateStaticParams } from '../staticPagesBuild'
import { fetchBlogData } from '../../sanity/client'

export const revalidate = 30

const Blogs = async () => {

  await generateStaticParams()
  const res = await fetchBlogData()
  return (
    <>

      <section className="mt-8  text-gray-600 body-font max-w-full md:mx-10">
        <h1 className='text-center md:text-3xl text-black '>Blogs</h1>
        <div className='flex justify-center items-center'>
          <hr className='py-0.5 mt-2 w-20 bg-black' />
        </div>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">

            {
              res &&
              res.map((item) => {
                return <BlogCard title={item.title} description={item.description} key={item._id} mainImage={item.Image.asset._ref} category={item.category} slug={item.slug.current} />;
              })
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs