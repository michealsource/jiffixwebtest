import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa";
import { FiX} from "react-icons/fi";
import './Navbar.css'
import { ScrollHook } from '../../hook/ScrollHook';

const Navbar = () => {

  const { y, x, scrollDirection } = ScrollHook();  
//HIDE NAVIGATION BAR
const [show, setShow] = useState(true);
const [menu, setMenu] = useState(false);
const [width, setWidth] = useState(window.innerWidth);

window.addEventListener('resize',function(){
  setWidth(window.innerWidth)
})
 
const styles = {
  activeN: {
    visibility: "visible",
    transition: "all 0.5s"
  },
  hiddenNav: {
    visibility: "hidden",
    transition: "all 0.5s",
    transform: "translateY(-100%)"
  }
}

  return (
    <>
    <div className="navbar" style={scrollDirection === "down" ? styles.activeN: styles.hiddenNav} >
        <div className="logo-container">
            <img src={logo} alt="company logo" />
        </div> 

        {/* <button className='login-btn-mobile'>SIGN IN</button> */}

        {menu?<FiX size={30} onClick={()=>setMenu(!menu)}/>:<FaBars className='humbuger' size={30} onClick={()=>setMenu(!menu)}/>}

        <div className={menu?"mobile-nav-menu":"links"}>
            <Link to="/">Home</Link>
            <div className='divider-nav-mobile'></div>
            <Link to="faq">FAQs</Link>
            <div className='divider-nav-mobile'></div>
            <Link to="explore">Explore our Plans</Link>

            {/* <Link to="explore mobile-plan">Explore our Plans</Link> */}

            <div className='divider-nav-mobile'></div>
            <Link to="quote">Get Instant Quote</Link>
            <div className='divider-nav-mobile'></div>
            <button className='login-btn hide-mobile'>SIGN IN</button>
            <button className='login-btn-plan-mobile'>SIGN IN</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
