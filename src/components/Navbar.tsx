import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import Logo from '../assets/Logo-3.png';
import HamburgerIcon from '../assets/HamburgerIcon';
const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  
  // Navigation links array for better maintainability
  const navLinks = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Tech", id: "tech" },
    { label: "Works", id: "works" },
    { label: "Feedback", id: "feedback" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-50 bg-black/90 backdrop-blur-sm`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo and Brand */}
        <Link 
          to='/' 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
          }}
        >
          <img src={Logo} alt='logo' className='w-8 h-8 sm:w-9 sm:h-9 object-contain' /> 
          <p className='text-white text-sm sm:text-base font-bold cursor-pointer'> 
            Shankar Ale Magar 
            <span className='sm:inline hidden ml-2'> SWE </span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-8 lg:gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${active === link.id ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors cursor-pointer text-sm lg:text-base`}
              onClick={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className='sm:hidden'>
          <HamburgerIcon 
            isOpen={toggle} 
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${!toggle ? 'hidden' : 'flex'} sm:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-gray-800`}>
        <div className='w-full max-w-7xl mx-auto px-6 py-6'>
          <ul className='list-none flex flex-col gap-4'>
            {navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`${active === link.id ? 'text-white' : 'text-gray-300'} hover:text-white transition-colors cursor-pointer text-base font-medium py-2`}
                onClick={() => {
                  setActive(link.id);
                  setToggle(false);
                }}
              >
                <a href={`#${link.id}`} className='block'>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )

}

export default Navbar