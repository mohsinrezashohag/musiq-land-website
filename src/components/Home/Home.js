import React, { useEffect, useState } from 'react';
import './Home.css'
import kid from '../../images/kid.png'
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';

const Home = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>



            <div className="heading-part ">
                <div className="d-md-flex">
                    <h1 className="main-heading">HELP YOUR CHILD
                        <br /> SELF-EXPRESS, FULFILL THEIR POTENTIAL,WITH OUR
                        <span className="special-text"> MUSIC LESSONS!!</span>
                    </h1>
                    <img className="img-fluid w-50 heading-image p-xs-4" src={kid} alt="" />
                </div>
            </div>









            <div className="service-section">

                <h1 className="section-heading">Our <span className="special-text">Services</span></h1>


                <div className='services'>

                    <Row xs={1} md={3} className="g-3">
                        {services.slice(0, 3).map(service => <Service key={service.id} service={service} ></Service>)}
                    </Row>

                </div>

            </div>














        </div >



    );
};

export default Home;