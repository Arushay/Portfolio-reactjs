import React from 'react'
import { CodeIcon } from "@heroicons/react/solid";

const Projects = () => {
    return (
        <div>
          <section className="text-white body-font container px-5 py-24">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"> Apps I've Built</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Work I've done that resides out there, somewhere in the vast virtual space of the internet.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={require('./online store.webp').default} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">Online Store</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">E-commerce website</h1>
            <p className="leading-relaxed">Online store Django project – Creating a Basic E-commerce Website for Displaying Products.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={require('./food site.webp').default} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">Online Meal</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Food delivery</h1>
            <p className="leading-relaxed">A Django built web app where users can login to a restaurants website and order food and add to cart. </p>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={require('./varila-news.jpg').default} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">News App </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">A News App using React</h1>
            <p className="leading-relaxed">news app using React JS, You can take any API and fetch data using Axios and render it in view.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default Projects



// <div className="mt-4"><FontAwesomeIcon icon={faEnvelope} className="mx-2" />piecemaster780@gmail.com</div>
// <div className="mt-2"><FontAwesomeIcon icon={faGithub}  className="mx-2"/>  github.com/Arushay</div>
// <div className="mt-2"><FontAwesomeIcon icon={faTwitterSquare} className="mx-2"/>  twitter.com/EmanDin1</div>
// <div className="mt-2"><FontAwesomeIcon icon={faInstagramSquare} className="mx-2"/>  @Eman</div>