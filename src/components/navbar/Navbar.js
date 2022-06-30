import React,{useState} from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { FaAlignJustify } from "react-icons/fa";
import { FiX} from "react-icons/fi";
import './Navbar.css'
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [menu, setMenu] = useState(false);
  const changeNavbarColor = () =>{
    if(window.scrollY >= 80){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
 };
 window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
    <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <div className="logo-container">
            <img src={logo} alt="company logo" />
        </div> 

        <button className='login-btn-mobile'>SIGN IN</button>

        {menu?<FiX size={30} onClick={()=>setMenu(!menu)}/>:<FaAlignJustify className='humbuger' size={30} onClick={()=>setMenu(!menu)}/>}

        <div className={menu?"mobile-nav-menu":"links"}>
            <Link to="/">Home</Link>
            <Link to="faq">FAQs</Link>
            <Link to="explore">Explore our Plans</Link>
            <Link to="quote">Get Instant Quote</Link>
            <button className='login-btn hide-mobile'>SIGN IN</button>
            <button className='login-btn-plan-mobile'>BEGIN WITH A PLAN</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
