import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-white">
                    <Link className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0" to="">
                        <span className="ml-3 text-2xl font-bold text-white" >Ayman</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 hover:text-white px-3 py-1 rounded hover:bg-gray-700" to="/">About</Link>
                        <Link className="mr-5 hover:text-white px-3 py-1 rounded hover:bg-gray-700" to="/skills">Skills</Link>
                        <Link className="mr-5 hover:text-white px-3 py-1 rounded hover:bg-gray-700" to="/projects">Projects</Link>
                    </nav>
                    <Link className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded mt-4 md:mt-0" to="/contact">Hire Me
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar
