
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Light_logo from '../images/logo-dark-bg.svg';
import { Link } from "react-router-dom";
  
function FaqFooter() {
  const [data, setData] = useState("Test");
  const getChckeboxValue = (event) =>{
     const checkValue = event.target.value;
     setData(event.target.value)
  }

  const d = new Date();
    return (
      <footer className="main_footer dark_footer">
        <div className="container-fluid">
        <Link to='/' className="logo footer_logo"><img src={Light_logo} alt="" /></Link>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-7 col-7">
          <div className="widget_title">REFERENCE</div>
            <ul className="footer-menu pl-0">
                <li><Link to="/howitworks">How it Works</Link></li>
                <li><Link to="/help">FAQs</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-5 col-5">
          <div className="widget_title">SOCIALS</div>
            <ul className="footer-menu pl-0">
                <li><a target="_blank" href="https://www.facebook.com/laundrytogo.ca/">Facebook</a></li>
                <li><a target="_blank" href="https://www.instagram.com/laundrytogo.ca/">Instagram</a></li>
                <li><a  target="_blank" href="https://twitter.com/laundrytogo_ca/">Twitter</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-7 col-7">
           <div className="widget_title">OFFICE</div>
            <p>25 Telegram Mews, <br/>Toronto, ON, M5V 3Z1 <br/>(416) 984-4659</p>
          </div>
        </div>
        <div className="d-flex justify-content-between copyright align-items-center">
        <div className="copyright_text">© {d.getFullYear()} laundryforclinic, Inc.</div>
        <ul className="social_menu list-inline mb-0">
          <li className="list-inline-item"><a target="_blank"  href="https://www.facebook.com/laundrytogo.ca/"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a></li>
          <li className="list-inline-item"><a target="_blank" href="https://www.instagram.com/laundrytogo.ca/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
          <li className="list-inline-item"><a target="_blank" href="https://twitter.com/laundrytogo_ca/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
        </ul>
        </div>
        </div>
      </footer>
    );
  }
  
  export default FaqFooter;