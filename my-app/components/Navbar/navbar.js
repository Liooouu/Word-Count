'use client'
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-stone-950 text-white h-16 px-6 flex items-center justify-between">

      <div className="text-2xl font-bold">
        <Link href="/">WC</Link>
      </div>

  
      <ul className="flex gap-10 text-sm font-medium">
        <li className='hover:scale-3d hover:z-10 hover:translate-y-3 transition ease-in duration-200 hover:font-extrabold '>
          <Link href="/Intro-page">Home</Link>
        </li>
        <li className='hover:scale-3d hover:z-10 hover:translate-y-3 transition ease-in duration-200 hover:font-extrabold '>
          <Link href="/About-page">About</Link>
        </li>
        <li className='hover:scale-3d hover:z-10 hover:translate-y-3 transition ease-in duration-200 hover:font-extrabold '>
          <Link href="/Developers-page">Developers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
