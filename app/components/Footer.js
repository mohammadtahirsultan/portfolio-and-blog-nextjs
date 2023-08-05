import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font md:mx-10">
        <div className="container py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 place-items-center">


    {/* 1st div  */}
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Link
              href="/"
              className="rounded-full shadow-md"
            >

              <Image
                className="rounded-full object-cover"
                width={50}
                height={50}
                src={"/logo.png"}
                alt="brand logo" />
            </Link>

            <span className="ml-3 text-xl">Ghareeb Star Blog</span>
          </div>


          {/* 2nd div  */}
        <div className='flex pl-24 sm:pl-20 md:ml-12 items-center'>
        <p className="text-sm text-gray-500 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {new Date().getFullYear()} Ghareeb Star Blog -
            <a href="https://twitter.com/knyttneve" className="text-gray-600 " rel="noopener noreferrer" target="_blank">tahirsultanofficial@gmail.com</a>
          </p>
        </div>




     {/* 3rd Div  */}
          <div className="grid grid-cols-5 gap-2">
              <a href="https://www.linkedin.com/in/ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/linkedin.png"}
                  alt="brand logo" />
              </a>

              <a href="https://instagram.com/ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/instagram.png"}
                  alt="brand logo" />
              </a>
              <a href="https://github.com/ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/github.png"}
                  alt="brand logo" />
              </a>
              <a href="https://youtube.com/@ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/youtube.png"}
                  alt="brand logo" />
              </a>

              <a href="https://facebook.com/ghareebstar" target="blank">
                <Image
                  className="rounded-full object-cover"
                  width={35}
                  height={35}
                  src={"/facebook.png"}
                  alt="brand logo" />
              </a>

            </div>

        </div>
      </footer>
    </>
  )
}

export default Footer