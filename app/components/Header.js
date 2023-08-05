import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font max-w-full shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
            <span className="ml-3 md:text-xl">Ghareeb Star Blog</span>
          </div>

          <nav className=" md:ml-auto grid grid-cols-5 place-items-center text-base ">
            <Link href='/' className="md:mr-5 hover:text-gray-900 hover:font-semibold">Home</Link>
            <Link href='/blogs' className="mr-5 hover:text-gray-900 hover:font-semibold">Blogs</Link>
            <Link href='/projects' className="mr-5 hover:text-gray-900 hover:font-semibold">Projects</Link>
            <Link href='/about' className="mr-5 hover:text-gray-900 hover:font-semibold">About</Link>
            <Link href='/contact' className=" mr-5 hover:text-gray-900 hover:font-semibold">Contact</Link>
          </nav>

        </div>
      </header>
    </>
  )
}

export default Header