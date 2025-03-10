import React from "react";
const Contact =() => {
    return(
        <div id="Contact">
          <section className="text-black-600 body-font relative bg-blue-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black-900">
        Contact Us
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Feel free to contact me For any inquiries or collaborations, you can reach out to me at [anas.email@gmail.com] or connect with me on LinkedIn at [anas-hameed]. I'm looking forward to hearing from you!
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-black-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-black-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-black-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-blue-100 bg-opacity-50 rounded border border-blue-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-black-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Button
          </button>
        </div>
      
      </div>
    </div>
  </div>
</section>

      </div>
    )
}
export default Contact
