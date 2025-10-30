'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import '../style/Navbar.css'
import { color } from "framer-motion"
export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navigation = [
    { title: "Home", path: "/", style: `${color}` },
    { title: "Portfolio", path: "#Portfolio" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "#contact" },
  ]

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest(".menu-btn") && !target.closest(".menu-content")) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <nav className="fixed w-full  top-0 left-0 right-0 z-50 bg-gray-700 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-[18px] font-bold myColor text-gray-900">
            <span className="border-green-700 text-green-700 border-r-4  p-2 rounded-full">O</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className={`text-gray-100 hover:text-white text-[14px] transition-colors ${item.title === "Home" ? "text-green-700" : ""
                    }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex text-[14px] items-center space-x-4">
            <Link href="/login" className="text-gray-900 bg-white px-3 py-2 rounded-md hover:text-gray-800">
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-green-700 text-gray-100 px-3 py-2 text-[14px] rounded-md hover:bg-green-800 transition"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="menu-btn md:hidden cursor-pointer  rounded-full border p-2 text-white hover:text-gray-500 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 myColor text-green-700" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`menu-content md:hidden transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <ul className="flex flex-col mt-3 space-y-3">
            {navigation.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.path}
                  className={`${item.title === 'Home' ? 'text-green-700': ''} block text-gray-400 hover:text-white transition-colors`}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="my-4 space-y-2">
            <Link href="/login" className="block text-gray-400 hover:text-green-600">
              Log in
            </Link>
            <Link
              href="/signup"
              className="block bg-green-700 text-white text-center px-4 py-2 rounded-full hover:bg-green-800 transition"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>


      
    </nav>
  )
}
