import React, {Component} from 'react';

class Guie extends Component {
    state = {
        guideData: []
    }

    fetchGuideData = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/admin') ;
            const data = await response.json();
            this.setState({guideData: data});
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount() {
        await this.fetchGuideData();
    }

    render() {

        return (
            <section className="faq-area pt-120 pb-100 bg-grey fix">
                <div className="container z-index">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-wrapper">
                                <h2>Guía de usuario</h2>
                                <br/>
                                <div className="choose-right" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="accordion" id="accordionExample">
                                        {this.state.guideData.map(guide => (
                                            <div className="accordion-item" key={guide["id"]}>
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={"#collapse" + guide.id}
                                                            aria-expanded="false" aria-controls="collapseTwo">
                                                        {guide.nombre}
                                                    </button>
                                                </h2>
                                                <div id={"collapse" + guide.id} className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        <p className='Text-guie'>
                                                            {guide.texto_inicial}
                                                        </p>
                                                        <p className='Text-guie'>
                                                            {guide.texto_adicional}
                                                        </p>
                                                        <p className='Text-guie'>
                                                            {guide.texto_adicional2}
                                                        </p>
                                                        <p className='Text-guie'>
                                                            {guide.texto_adicional3}
                                                        </p>
                                                        <a href={guide.link_reference} target="_blank">{guide.link_reference}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

export default Guie;