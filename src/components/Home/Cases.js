import React, {Component} from 'react';

class Cases extends Component {

    render() {
        return (
            <div className="Cases">
             <div className="container">
                 <h2 data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration="1200"

                 >Наше портфолио</h2>
                 <h3 data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration="1200"
                     data-aos-delay="300">КЕЙСЫ</h3>
             </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"

                             src="/img/rec72.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img data-aos="fade-left"
                             data-aos-easing="linear"
                             data-aos-duration="1200"src="/img/rec73.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             data-aos-delay="300"
                             src="/img/rec74.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img data-aos="fade-left"
                             data-aos-easing="linear"
                             data-aos-delay="300"
                             data-aos-duration="1200" src="/img/rec75.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-delay="600"
                             data-aos-duration="1200" src="/img/rec76.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img data-aos="fade-left"
                             data-aos-easing="linear"
                             data-aos-delay="600"
                             data-aos-duration="1200" src="/img/rec77.svg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cases;