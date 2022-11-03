import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (

<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#153462] text-gray-300'>

        <div>
            <img src={Logo} alt="Logo Image"/>
        </div>
{/* Menu */}
        <div>
            <ul className='hidden md:flex'>

                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
                <li>Contact</li>

            </ul>
        </div>

{/* Hamburger */}

    <div onClick={handleClick} className='md:hidden z-10'>

        {!nav ?<FaBars /> : <FaTimes/>}
      
    </div>

{/* Mobile Menu */}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#153462] flex flex-col justify-center items-center'}>

            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Experience</li>
            <li className='py-6 text-4xl'>Contact</li>

        </ul>

{/* Social icons */}

    <div className='hidden'></div>


</div>
  )
}

export default Navbar