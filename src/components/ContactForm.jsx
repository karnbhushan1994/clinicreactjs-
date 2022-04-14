import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Dark_logo from '../images/logo-dark-bg.svg';
import loading_Img from '../images/caution.png';
function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShow] = useState(false);
    const [showModalp, setShowp] = useState(false);
    const [thankyoumessage, setThankyoumessage] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    
    function handleClosebook(){
      setShow(false);
     }
     
    function handleSubmit(event) {
      event.preventDefault();
      setShowp(true);
      var axios = require('axios');
      var FormData = require('form-data');
      var data = new FormData();
      data.append('visitor_name', name);
      data.append('visitor_email', email);
      data.append('visitor_phone', phone);
      data.append('visitor_message', message);
     // url: 'https://struckhigh.co.in/laundryforclinics/book.php',
      var config = {
      method: 'post',
      url: 'https://struckhigh.co.in/laundryforclinics/laundary/email/mail.php',
      data : data
      };

      axios(config)
      .then(function (response) {
          setShow(true)
          setShowp(false);
         setThankyoumessage(JSON.stringify(response.data));
         //alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
      console.log(error);
      });
   
    }


  return (
    <>
            <form  onSubmit={handleSubmit}  className="form mt-4 row">

            <div className="form-group col-md-6">
            <input required
            type="text"
            name="Name"
            className="Name form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            tabIndex="1"
             placeholder="Name"/>
            </div>
            <div className="form-group col-md-6">
            <input required
            type="text"
            name="Phone"
            className="Phone form-control"
            tabIndex="3"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"/>
            </div>
            <div className="form-group col-md-12">
            <input required
            name="email"
            id="email"
            className="email form-control"
            tabIndex="2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             placeholder="Email"/>
            </div>
            <div className="form-group col-md-12">
            <textarea 
            className="message form-control"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
             placeholder="Enter your question"/>
            <div className="mt-5">
           <button type="submit" className="send btn w-100">Submit</button>
           </div>
            </div>
            
            </form>
            <Modal  className="output__modal" show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title><img src={Dark_logo} /></Modal.Title>
                </Modal.Header>
                <Modal.Body>{thankyoumessage}</Modal.Body>
             </Modal>
             <Modal  className="output__modal second_modal" show={showModalp}>
                <Modal.Body>
                  <img className='feature-img' src={loading_Img} />
                  Processing...
                </Modal.Body>
            </Modal>
    </>
  )
}

export default ContactForm;