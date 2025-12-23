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
    <nav className={
      `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black`
    }>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
     <Link to='/' className='flex items-center gap-2'
     
     onClick={() => {
      setActive("");
      window.scrollTo(0,0);
     }}>

      <img src={Logo} alt='logo' className='w-9 h-9 object-contain ' /> 
      <p className='text-white text-18px font-bold cursor-pointer flex'> Shankar Ale Magar &nbsp; <span className='sm:block hidden'> SWE </span></p>
     </Link>
     <ul className='list-none hidden sm:flex flex-row gap-10'>
      {navLinks.map((link) => (
        <li key={link.id} className={`${active === link.id ? 'text-white' : 'text-secondary'} hover:text-white transition-colors cursor-pointer`}
             onClick={() => setActive(link.id)}>
          <a href={`#${link.id}` }>
            {link.label}
          </a>
        </li>
      ))}
     </ul>
    </div>
    <div className='sm:hidden flex flex-1 justify-end items-center'>
     <HamburgerIcon isOpen={toggle} onClick={() => setToggle(!toggle)} />
     
     {/* Mobile Menu Dropdown */}
     <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
       <ul className='list-none flex justify-end items-start flex-col gap-4'>
         {navLinks.map((link) => (
           <li key={link.id} className={`${active === link.id ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(link.id);
                  setToggle(false);
                }}>
             <a href={`#${link.id}`}>
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