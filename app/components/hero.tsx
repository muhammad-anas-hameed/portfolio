"use client";
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
const Hero = () => {
    return (
      <div id="hero">
        <section className="text-gray-600 body-font bg-fixed bg-blue-300" >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
             I am 
              <br className="hidden lg:inline-block" />
              <Typewriter
  options={{
    strings: ['Web Developer'],
    autoStart: true,
    loop: true,
  }}
/>

            </h1>
            {/* <div className="w-[300] h-[2px] bg-blue-700"></div> */}
            <p className="mb-8 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptates ducimus iure libero quod aliquam repellendus a, ut perspiciatis, dolorem, quam necessitatibus natus! Enim assumenda itaque ad exercitationem amet est!
            </p>
            <div className="flex justify-center">
                <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
                Contact
              </button>
              </Link>
             
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem]"
              alt="hero"
              width={500}
              height={100}
              src={require('../../public/a-lone-anime-girl-feeling-despondent-and-lost-wjzi0ehrc4naaz98.webp')}
            />
          </div>
        </div>
      </section>
      </div>
    )
}
export default Hero