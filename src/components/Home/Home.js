import React, { useEffect, useState } from 'react';
import './Home.css'
import kid from '../../images/kid.png'
import Service from '../Service/Service';
import { Container, Row, Button } from 'react-bootstrap';
import studentImg from "../../images/student.png"
import volentiarImg from "../../images/volentiar.png"
import { Link } from 'react-router-dom';



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

                    <Link to="/services"><Button className="details-btn" variant="success">See More Services</Button></Link>
                </div>
            </div>




            <div className="welcome-part">
                <h1>WELCOME TO THE JOY OF MUSIC </h1>

                <div className="welcome-section">

                    <div className="student ">
                        <img src={studentImg} alt="" />
                        <h3 className="special-text">BE A STUDENT</h3>
                        <p>The Music Land School proudly provides free music lessons & instruments to children and teens who have the talent & desire, but who lack the means.</p>
                    </div>


                    <div className="Volentiar">
                        <img src={volentiarImg} alt="" />
                        <h3 className="special-text">VOLUNTEER
                            TO TEACH</h3>
                        <p>Become a Volunteer Teacher. Give back. Share your musical gifts mentoring young people from your community who need it most.</p>
                    </div>




                </div>

            </div>












        </div >



    );
};

export default Home;