import React, {Component} from 'react';

class WhyWeTwo extends Component {
    render() {

        return (
            <section className="why-we bg-grey pt-125 pb-75 position-relative fix">
                <div className="common-shape-wrapper wow slideInLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                    <div className="common-shape-inner"></div>
                </div>
                <div className="container z-index">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                                <div className="section-title-wrapper">
                                    <h5 className="section-subtitle mb-20">A Family</h5>
                                    <h2 className="section-title mb-35"></h2>
                                </div>
                                <p>We are passionate about freedom, making life plans, enjoying life with what it offers, without many extras, and being able to convey that to our environment through the means we know, have experience, and also enjoy the "Van Life."</p>
                                <p>We are an adventurous and entrepreneurial family. Our initials together form the name of our fantastic team "INIK." The adults are in charge of responsibilities, and the little ones are in charge of enjoying to the fullest.</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="choose-left mb-40 mr-xs-0 mr-md-0 mr-lg-0 mr-90" data-aos="fade-up-right" data-aos-duration="1000">
                                <div className="section-title-wrapper">
                                    <h5 className="section-subtitle mb-20">Why Travel with Us?</h5>
                                    <h2 className="section-title mb-35"></h2>
                                </div>
                                <img src="assets/img/about/about-img-77.jpeg" className="img-fluid" alt="about-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyWeTwo;