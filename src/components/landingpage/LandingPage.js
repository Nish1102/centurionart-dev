import { useState } from "react";
import { Modal} from "@mui/material";
import LoginModal  from '../loging/LoginPage';
import Navbar from './Navbar';
import HeroSec from "./HeroSec";
import './landingstyle.css';
import FeaturedSec from "./FeaturedSec";
import GallerySec from "./GallerySec";
import FeatureCarousel from "./FeatureCarousel";
import ExpertAdvisor from "./ExpertAdvisor";
import Navigation from "./Navigation";
import Footer from "./Footer";
// import ProductDetail from "../productPage/ProductDetail";



export default function ArtGalleryLanding() {

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Top header */}
        <Navigation setIsLoginOpen={setIsLoginOpen} />
      {/* Nav Bar */}
       <Navbar />
      {/* Hero sec */}
        <HeroSec/>
      {/* featured sec */}
       <FeaturedSec/>
      {/* gallery sec */}
       <GallerySec/>
      {/* Feature Carousel */}
        <FeatureCarousel/>
      {/* expert advisors */}
        <ExpertAdvisor/>
      {/* footer-sec */}
        <Footer/>


    {/* start roughling uI */}


     {/* <ProductDetail/> */}

    {/* end roughling ui */}

      {/* Login Modal */}
      <Modal open={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
       <LoginModal  open={isLoginOpen} onClose={() => setIsLoginOpen(false)}/>
      </Modal>
    </div>
  );
}
