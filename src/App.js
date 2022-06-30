
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Privacy from './pages/privacy/Privacy';
import Terms from './pages/terms/Terms';
import Home from './pages/home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
          <Route index element={<Home/>} />
          <Route path="/privacy-policy" element={<Privacy/>} />
          <Route path="/terms" element={<Terms/>} />
       </Routes>
     <Footer/>
    </div>
  );
}

export default App;
