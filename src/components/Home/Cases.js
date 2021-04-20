import React, {Component} from 'react';

class Cases extends Component {
    render() {
        return (
            <div className="Cases">
             <div className="container">
                 <h2>Наше портфолио</h2>
                 <h3>КЕЙСЫ</h3>
             </div>
                
                <div className="row">
                    <div className="col-md-6">
                        <img src="/img/rec72.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec73.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec74.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec75.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec76.svg" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <img src="/img/rec77.svg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cases;