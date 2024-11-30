import React from "react";
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-blue-100 z-50 sticky top-0"
        ><header className="text-black-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-blue-400 mb-4 md:mb-0">
           
            <span className="ml-3 text-xl">Muhammad Anas</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#hero"} className="mr-5 hover:text-blue-300">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-300">About</Link>
            <Link href={"#skill"} className="mr-5 hover:text-blue-300">Skills</Link>
          
            <Link href={"#Contact"} className="mr-5 hover:text-blue-300">Contact</Link>
          </nav>
          <button className="inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0" >
            <a href="#"/>
            Check CV
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header></div>
    )
}
export default Navbar