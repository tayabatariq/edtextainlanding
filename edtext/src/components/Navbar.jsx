import React from 'react'
import Button from './Button'
import logo from '../assests/logo.png'

const Navbar = () => {
  return (
    <>
    <nav className='w-full px-20 py-3  flex justify-between items-center '>
<div className="logo ">
  <img src={logo} className='w-44' alt="logo img" />

</div>
<div className="links font-title flex items-center justify-center gap-10">
  <a href="#" className=' '>Home</a>
  <a href="#about">About</a>
  <a href="#news">News</a>
  <a href="#project">Project</a>
  <a href="">Publication</a>
</div>
<Button navbtn="Donate Now"/>
    </nav>
    </>
  )
}

export default Navbar