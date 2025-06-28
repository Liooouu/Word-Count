import React from 'react'

const Footer = () => {
  return (
<footer className="bg-stone-950 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
      <ul className="flex space-x-8 mb-4 md:mb-0 text-sm font-medium">
        <li>
          <a href="/about" className="hover:text-green-400 transition">About</a>
        </li>
        <li>
          <a href="/developer" className="hover:text-green-400 transition">Developer</a>
        </li>
        <li>
          <a href="/" className="hover:text-green-400 transition">Home</a>
        </li>
      </ul>

    
      <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </div>
</footer>

  )
}

export default Footer