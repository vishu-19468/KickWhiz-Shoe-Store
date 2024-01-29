import { useState } from "react";

import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

import { AiOutlineClose } from 'react-icons/ai';
import { SlEnergy } from 'react-icons/sl';

const Nav = () => {
    const [toggel, setToggel] = useState(false);
  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        {/* Logo */}
        <a className="flex gap-1 items-baseline" href='/'>
         <SlEnergy className="text-coral-red w-[28px] h-[28px]" />
         <h1 className="text-coral-red font-bold text-[40px]">Kick<span className="text-black">whiz</span></h1>
        </a>

        {/* Navbar-Links */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className="hover:scale-125">
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg font-medium text-black'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 hover:scale-110'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>

        {/* Hamburger Menu */}
        <div className='hidden max-lg:block'>
          <img 
          src={hamburger} 
          alt='hamburger icon' 
          width={30} 
          height={30}
          onClick={() => setToggel(!toggel)}
          />
          {toggel && (
            <div className='absolute top-0 right-0 min-h-screen w-screen bg-white z-20'>
              <div className="absolute top-7 right-11">
                <AiOutlineClose
                  className="w-[28px] h-[28px]"
                  onClick={() => setToggel(!toggel)}
                />
              </div>

              <div className="">
                <ul className="w-full min-h-screen flex flex-col flex-1 justify-center items-center gap-8">
                 {navLinks.map((item) => (
                    <li key={item.label} className='hover:scale-110'>
                      <a
                        href={item.href}
                        className='font-montserrat font-bold leading-normal text-3xl tracking-widest text-black hover:text-coral-red'
                        onClick={() => setToggel(!toggel)}
                      >
                        {item.label}
                      </a>
                    </li>
                 ))}
                </ul>
              </div>
            </div>
          )
          }

        </div>
      </nav>
    </header>
  );
};

export default Nav;
