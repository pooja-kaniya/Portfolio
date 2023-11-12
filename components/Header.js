
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/logo1.png" alt="Logo" className=" rounded-full w-18 h-10 mr-2" />
          <div className="text-white text-xl font-bold">POOJA</div>
        </div>

       
          <div className="flex space-x-4">
          <Link href="/" passHref legacyBehavior>
            <a className="text-white">Home</a>
          </Link>
            <Link href="/about" passHref legacyBehavior>
              <a className="text-white">About</a>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <a className="text-white">Projects</a>
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <a className="text-white">Contact</a>
            </Link>
          </div>
        </div>
      
    </nav>
  );
};

export default Header;
