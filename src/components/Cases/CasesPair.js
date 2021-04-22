import React, {Component} from 'react';
import AOS from "aos";

class CasesPair extends Component {

    componentDidMount() {
        AOS.init();

    }
    render() {
        return (
            <div className="Cases">
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
                             data-aos-duration="1200" src="/img/rec73.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             src="/img/rec74.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img  data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1200" src="/img/rec75.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             src="/img/rec77.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img  data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1200" src="/img/rec76.svg" alt=""/>
                    </div>


                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             src="/img/rec1(9).svg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1200" src="/img/rec1(8).svg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             src="/img/rec1(7).svg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1200" src="/img/rec1(6).svg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             src="/img/rec1(5).svg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1200" src="/img/rec1(4).svg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img data-aos="fade-right"
                             data-aos-easing="linear"
                             data-aos-duration="1200"
                             src="/img/rec1(3).svg" alt=""/>
                    </div>

                    <div className="col-md-6">
                        <img  data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1200" src="/img/rec1(2).svg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CasesPair;