import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <Container>

                <div className="footer-inside">


                    <div className="logo-slogan">
                        <img className='logo' src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque distinctio doloribus, modi earum nam, adipisci dolor odio voluptatibus quidem </p>
                    </div>



                    <div className="contact-section">
                        <p><i className="fas fa-map-marker-alt"></i> Dhaanmondi 32 st-12/4 - Dhaka</p>

                        <p><i className="fas fa-mobile"></i> 01629365037</p>

                        <p><i className="fas fa-envelope"></i> reza@gmail.com</p>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Footer;