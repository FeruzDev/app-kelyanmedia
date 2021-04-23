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
                        <img  src="/img/rec72.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec73.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec74.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec75.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec77.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec76.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cases;