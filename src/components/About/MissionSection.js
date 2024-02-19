import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Mission extends Component {

    render() {
        return (
            <section className="mission-area pt-120 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="kintro-text mr-xs-0 mr-md-0 mr-lg-0 mr-70 mb-30" data-aos="fade-left" data-aos-duration="1000">
                                <div className="section-title-wrapper mb-25">
                                    <h5 className="section-subtitle mb-20">Our Concept</h5>
                                    <h2 className="section-title mb-35">What InikCamper is About</h2>
                                    <p>We are an escape from daily life for freedom enthusiasts. We plan experiences and adventures for you while our Camper Van accompanies you.</p>
                                </div>
                                <p className="mb-45">Mission:
                                    Provide a personalized and quality service for tourist experiences in a camper van.
                                </p>
                                <p className="mb-45">Vision:
                                    Conquer this branch of tourism in Spain and Europe with our concept.
                                </p>
                                <p className="mb-45">Values:
                                    <ul className="mt-20 mb-55" id='lista'>
                                        <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Transparency.</li>
                                        <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Quality service.</li>
                                        <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Teamwork.</li>
                                        <li><i><FontAwesomeIcon icon={['fas', 'check']}/></i> Sustainability.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                        <div className="kintro-img mb-30" data-aos="fade-right" data-aos-duration="1000">
                                <img src="assets/img/about/about-img-6.jpg" className="img-fluid" alt="about-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Mission;