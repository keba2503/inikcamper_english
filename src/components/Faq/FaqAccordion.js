import React, {Component} from 'react';

class FaqAccordion extends Component {

    render() {

        return (
            <section className="faq-area pt-120 pb-100 bg-grey fix">
                <div className="container z-index">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="faq-wrapper">
                                <h2>About the Reservation</h2>
                                <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                        aria-expanded="true" aria-controls="collapseOne">
                                                    What is the purpose of the €600 deposit?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>The CamperVan has comprehensive insurance with a €500 excess; therefore, if any damage occurs to the motorhome, exterior, or interior, with a value below this amount, it will be the responsibility of the customer, unless a third party is at fault. In this case, coverage is complete, provided that the accident report is correctly completed.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                        aria-expanded="false" aria-controls="collapseTwo">
                                                    Can I travel outside Gran Canaria with the CamperVan?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse"
                                                 aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Yes, you can travel to any island in the Canary archipelago without any problems. However, to leave the Canary Islands, you need special authorization from Inikcamper.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                        aria-expanded="false" aria-controls="collapseThree">
                                                    Can someone else drive even if they are not listed in the contract?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse"
                                                 aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>Yes, as long as they meet the minimum insurance requirements: be at least 23 years old and have a minimum of 2 years of driving experience. The person listed in the contract must travel in the vehicle even if they are not driving.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                        aria-expanded="false" aria-controls="collapseFour">
                                                    Is the motorhome delivered clean and ready to use? And how should it be returned?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse"
                                                 aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>The motorhomes are delivered completely clean and sanitized, with the wastewater tanks completely empty and clean. Upon return, they must be in the same condition as when they were delivered.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-wrapper-2">
                                <h2>About the CamperVan</h2>
                                <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="accordion" id="accordionExample2">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingNine">
                                                <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#collapseNine"
                                                        aria-expanded="false" aria-controls="collapseNine">
                                                    Coming Soon
                                                </button>
                                            </h2>
                                            <div id="collapseNine" className="accordion-collapse collapse"
                                                 aria-labelledby="headingNine" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>Coming Soon</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqAccordion;
