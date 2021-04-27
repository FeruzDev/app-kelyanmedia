import React, {Component} from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="Loader overflow-hidden">

                <img src="/img/reaceta.png" className="raceta" alt="" />


                    <div className="kImg">
                        <img src="/img/k.png" alt="" />

                            <svg viewBox="0 0 1320 300">
                                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                    KELYANMEDIA
                                </text>
                            </svg>
                    </div>
                    <div className="kF">



                        <svg className="media" viewBox="0 0 1320 300">
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                KELYAN
                            </text>
                        </svg>
                    </div>

                    <div className="mF">



                        <svg className="kelyan" viewBox="0 0 1320 300">
                            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                                MEDIA
                            </text>
                        </svg>
            </div>
            </div>
        );
    }
}

export default Loader;