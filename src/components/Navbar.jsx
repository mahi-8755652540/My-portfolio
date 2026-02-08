import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full grid grid-cols-3 items-center max-w-7xl mx-auto'>
        {/* Left: Text */}
        <div className='flex items-center'>
          <p className='text-white text-[18px] font-bold hidden lg:block'>
            MS Bhartiya <span className='text-secondary'>| Web & Graphic Designer</span>
          </p>
        </div>
        
        {/* Center: Logo ONLY */}
        <Link
          to='/'
          className='flex justify-center'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-24 h-24 object-contain' />
        </Link>

        {/* Right: Navigation */}
        <ul className='list-none hidden lg:flex flex-row gap-4 items-center justify-end'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[15px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(nav.title);
                const element = document.getElementById(nav.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {nav.title}
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download="MS_Bhartiya_Resume.pdf"
              className='bg-tertiary py-2 px-5 rounded-xl text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors text-[13px]'
            >
              Resume
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    const element = document.getElementById(nav.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {nav.title}
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download="MS_Bhartiya_Resume.pdf"
                  className='font-poppins font-medium cursor-pointer text-[16px] bg-tertiary py-2 px-6 rounded-lg text-white hover:bg-[#915EFF] transition-colors block text-center'
                  onClick={() => setToggle(!toggle)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
