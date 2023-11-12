
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const Home = () => {
  return (
    <section className="lg:py-16 flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mb-4 lg:mb-0">
        <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            Hello, IAM POOJA    </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A Full-Stack Developer & Design Enthusiast.
        </p>
          
          <br />
        
        <div className="text-center lg:text-left">
          <Link
            href="/contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white  block bg-[purple]"
          >
            Hire Me
          </Link>
          <Link
            href="/files/Pooja_Kania_Resume.pdf"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
          >
            <span className="block bg-[purple] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
        <Image
          src="/images/hero-image.png"
          alt="hero image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};


export default Home;

// export default Home;