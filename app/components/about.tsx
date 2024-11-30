import Link from "next/link";
import React from "react";
import Image from "next/image";
const About = ()=> {
    return (
        <div id="about"><section className="text-gray-600 body-font bg-blue-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400]"
              alt="hero"
              width={200}
              height={200}
              src={require("../../public/a-lone-anime-girl-feeling-despondent-and-lost-wjzi0ehrc4naaz98.webp")}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About
            </h1>
            <p className="mb-5 leading-relaxed">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore tenetur debitis culpa alias facilis adipisci! Maiores excepturi, corrupti laudantium magnam possimus voluptatibus velit nisi sapiente. Sunt distinctio tenetur officia!
            </p>
            <div className="flex justify-center">
                
              <button className="inline-flex text-white bg-blue-500 border-0 py- px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                View CV
              </button>
             
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}
export default About