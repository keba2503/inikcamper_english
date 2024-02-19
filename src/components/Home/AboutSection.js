import React, {Component} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class About extends Component {

    render() {

        return (
            <section className="about-area pt-120 pb-70 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="kabout-img mb-50 mr-70" data-aos="zoom-out-up" data-swiper-autoplay="10000">
                                <img src="assets/img/about/about-img-1.jpg" className="img-fluid z-index" alt="about-img"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="kabout mb-50" data-aos="zoom-out-down" data-swiper-autoplay="10000">
                                <div className="section-title-wrapper mb-45">
                                    <h1 className="section-title mb-35">About Us <br/> InikCamper</h1>
                                    <p>We are Adventure, Moments, Experiences, and Memories.</p>
                                </div>
                                <div className="row">

                                </div>
                                <ul className="mt-20 mb-55">
                                    <li>
                                        <i><FontAwesomeIcon icon={['fas', 'check']}/></i> We are a disconnection from daily life for freedom enthusiasts.
                                    </li>
                                    <li>
                                        <i><FontAwesomeIcon icon={['fas', 'check']}/></i> We plan experiences and adventures for and with you.
                                    </li>
                                    <li>
                                        <i><FontAwesomeIcon icon={['fas', 'check']}/></i> Our Camper Van will accompany you.
                                    </li>
                                    <li>
                                        <i><FontAwesomeIcon icon={['fas', 'check']}/></i> We offer personalized and quality service.
                                    </li>
                                    <li>
                                        <i><FontAwesomeIcon icon={['fas', 'check']}/></i> We guide you on your vacations so you have no worries.
                                    </li>
                                </ul>
                                <div className="kabout-btn">
                                    <Link href="/service"><a className="theme-btn border-btn">Learn More</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default About;