
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity/client'

const ProjectCard = ({title, description, mainImage, category,projectUrl}) => {
  return (
    <>
         <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 roundedLg overflow-hidden">
          <Image height={"500"} width={"500"} className="lg:h-48 md:h-36 w-full object-cover object-center" src={urlFor(mainImage).url()} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
            <h1 className="title-font textLg font-medium text-gray-900 mb-3">{title}</h1>
            <p className="leading-relaxed mb-3">{description}</p>
            <div className="flex items-center flex-wrap">
              <a className="text-black inline-flex items-center md:mb-2 lg:mb-0 font-extrabold" href={projectUrl}>Live Demo
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            
           
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard