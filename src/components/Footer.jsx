
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Light_logo from '../images/logo-light-bg.svg';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import FaqFooter  from "./FaqFooter"
import HomeFooter from "./HomeFooter"
function Footer() {
  const location = useLocation();
  if(location.pathname == "/help"){
    return <FaqFooter />;
  }else if(location.pathname == "/howitworks"){
    return <FaqFooter />;
  }else{
    return <HomeFooter />;
  }
  }
  
  export default Footer;