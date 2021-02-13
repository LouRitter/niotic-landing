import React from "react";

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header className="fixed w-full z-40 opacity-90">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase text-white"
            >
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <img className="relative pt-0 w-16" src={require('../images/logo2.png')} alt="Niotic Logo" />

          </div>            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                  <g>
                  <title>background</title>
                  <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
                  </g>
                  <g>
                  <title>Layer 1</title>
                  <path fill="#ffffff" id="svg_1" d="m4,10l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2zm24,4l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2zm0,8l-24,0c-1.104,0 -2,0.896 -2,2s0.896,2 2,2l24,0c1.104,0 2,-0.896 2,-2s-0.896,-2 -2,-2z"/>
                  </g>
                </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase font-inter font-bold leading-snug text-white hover:opacity-75"
                  href="#services"
                >
                <span className="ml-2 ">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase font-inter font-bold leading-snug text-white hover:opacity-75"
                  href="#about"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase font-inter font-bold leading-snug text-white hover:opacity-75"
                  target="_blank" href="mailto: info@niotic.us"
                >
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
