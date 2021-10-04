import React from 'react';
import { Container, Button } from 'react-bootstrap';
import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <Container>
                <div className="footer-inside">

                    <div className="logo-slogan">
                        <img className='logo' src={logo} alt="" />
                        <h6 className="my-2">BOOST BRAINPOWER WITH MUSIC. FROM ANYWHERE.</h6>
                        <p className="footer-p">Music Land is the world’s leading provider of music-based education for children from birth through age seven. We use the power and joy of music-making to help children learn and grow during the years most critical to brain development. Since 1978, Music Land has helped millions of children around the world build a strong foundation for a lifetime love of learning.</p>
                    </div>


                    <div className="contact-section">
                        <div>
                            <p><i className="fas fa-map-marker-alt"></i> Dhaanmondi 32 st-12/4 - Dhaka</p>

                            <p><i className="fas fa-mobile"></i> 01629365037</p>

                            <p><i className="fas fa-envelope"></i> reza@gmail.com</p>
                        </div>

                        <div >
                            <input className="sub-input" type="text" placeholder="Enter Your Email" />
                            <br />
                            <Button className="details-btn">Subscribe</Button>
                        </div>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Footer;