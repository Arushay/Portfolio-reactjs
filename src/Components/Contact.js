import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faGithub, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <div>
      <section  className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-12 ">
          <h1 className="sm:text-3xl text-4xl font-bold mb-4 mt-4 text-center text-white">Contact Me</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-center mb-4 text-base">Please feel free to contact me for additional information.</p>

          <form
            netlify="true"
            name="contact"
            onSubmit={handleSubmit}
            className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
             />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
             />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
             />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </form>
          <div className="p-2 w-full pt-8 mt-8 text-center">
            <div className="mt-4"><FontAwesomeIcon icon={faEnvelope} className="mx-2" />piecemaster780@gmail.com</div>
            <div className="mt-2"><FontAwesomeIcon icon={faGithub} className="mx-2" />  github.com/Arushay</div>
            <div className="mt-2"><FontAwesomeIcon icon={faTwitterSquare} className="mx-2" />  twitter.com/EmanDin1</div>
            <div className="mt-2"><FontAwesomeIcon icon={faInstagramSquare} className="mx-2" />  @Eman</div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Contact
