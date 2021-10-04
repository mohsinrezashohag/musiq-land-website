import React from 'react';
import { Container } from 'react-bootstrap';
import studentImg from '../../images/student.jpeg'
import './About.css'

const About = () => {
    return (
        <div className="about-header">

            <Container>

                <div className="mission-section d-md-flex text-white" >

                    <img src={studentImg} alt="" />
                    <div className="mission-text p-5">
                        <h3>OUR <span className="special-text">MISSION:</span></h3>
                        <p> To provide quality music education for financially disadvantaged, at-risk youth.</p>

                        <h3>OUR VISION:</h3>
                        <p> Broader lives through music for all financially disadvantaged children and teens.</p>

                        <h3>OUR <span className="special-text">VALUES:</span></h3>
                        <p> We put students first – Children deserve joy and opportunity.
                            We love volunteers – Mentors transform lives.
                            We develop minds and build character through music.
                            We set high standards and provide challenges that foster discipline and self-esteem.
                            We reward commitment, respect and accountability.
                            We embrace family and community relationships – Trust ensures support.
                            We believe inclusiveness and diversity enrich learning.
                            We innovate in order to inspire –  and it is free.</p>

                    </div>


                </div>

            </Container>
        </div>

    );
};

export default About;