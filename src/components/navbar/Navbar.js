import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'
import { FaBars } from "react-icons/fa";
import { FiX} from "react-icons/fi";
import './Navbar.css'
import { ScrollHook } from '../../hook/ScrollHook';
import useScrollListener from '../../hook/useScrollListener';

const Navbar = () => {

  const { scrollDirection } = ScrollHook();  

  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();


//HIDE NAVIGATION BAR
const [show, setShow] = useState(true);
const [menu, setMenu] = useState(false);
const [width, setWidth] = useState(window.innerWidth);

// update classList of nav on scroll
useEffect(() => {
  const _classList = [];

  if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
    _classList.push("nav-bar--hidden");

  setNavClassList(_classList);
  console.log(_classList, 'lllll')
}, [scroll.y, scroll.lastY]);


 
// const styles = {
//   activeN: {
//     visibility: "visible",
//     transition: "all 0.5s"
//   },
//   hiddenNav: {
//     visibility: "hidden",
//     transition: "all 0.5s",
//     transform: "translateY(-100%)"
//   }
// }


  return (
    <>
    <nav className={navClassList.join(" ")}  >
        <div className="logo-container">
            <img src={logo} alt="company logo" />
        </div> 

        {menu?<FiX size={30} onClick={()=>setMenu(!menu)}/>:<FaBars className='humbuger' size={30} onClick={()=>setMenu(!menu)}/>}
        <div className={menu?"mobile-nav-menu":"links"}>
            <Link to="/">Home</Link>
            <div className='divider-nav-mobile'></div>
            <Link to="faq">FAQs</Link>
            <div className='divider-nav-mobile'></div>
            <Link to="explore">Explore our Plans</Link>

            <div className='divider-nav-mobile'></div>
            <Link to="quote">Get Instant Quote</Link>
            <div className='divider-nav-mobile'></div>
            <button className='login-btn hide-mobile'>SIGN IN</button>
            <button className='login-btn-plan-mobile'>SIGN IN</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
