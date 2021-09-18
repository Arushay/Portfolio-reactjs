import React from 'react'
import { Link } from 'react-router-dom';

// src={require('./Eman.png').default}
const About = () => {


    return (
        <>
            <section className="text-gray-600 body-font container px-5 py-15 mx-auto">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-bold text-white">I'm Arosha Ayman
                            <br className="hidden lg:inline-block font-bold" />A Full Stack Developer
                        </h1>
                        <p className="mb-2 leading-relaxed text-white">Helping people turn their ideas into sites &amp; apps that work. professional and Cost-Effective.</p>
                        <p className="mb-8 leading-relaxed text-white">Always.</p>
                        <div className="flex justify-center">
                            <Link className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" to="/projects">Past Projects</Link>
                        </div>
                    </div>

                    <div className="sm:max-w-sm lg:w-full sm:w-2/3 w-5/6">
                    <img className="girl lg:h-36 md:h-36 w-full object-cover rounded-full object-center" src={require('./Eman.jpg').default} alt=" " />
                    </div>

                </div>
            </section>
        </>
    );
}


export default About
