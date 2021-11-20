import React from 'react';
import '../../StyleSheet/ShowSearch.scss'
import bus_right from '../../img/bus-right.png'
import bus_left from '../../img/bus-left.png'
import left_arrow from '../../img/left-arrow.png'
import right_arrow from '../../img/right-arrow.png'

const ShowSearch = () => {
    return (
        <div className="search-nav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 onward rounded">
                        <div className="d-flex align-items-center">
                            <img src={bus_right} className="img-fluid" alt="" />
                        </div>
                        <div>
                            <p>onward journey</p>
                            <strong>Dhaka-Chottogram</strong>
                            <p>22 June, 2021 (Tuesday)</p>
                        </div>
                    </div>
                    <div className="col-lg-3 arrows d-flex justify-content-center align-items-center">
                        <div>
                            <img src={right_arrow} className="img-fluid" alt="" />
                            <img src={left_arrow} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-3 return rounded">
                        <div className="d-flex align-items-center">
                            <img src={bus_left} className="img-fluid" alt="" />
                        </div>
                        <div>
                            <p>return journey</p>
                            <strong>Chottogram-Dhaka</strong>
                            <p>24 June, 2021 (Thursday)</p>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex align-items-center">
                        <button className="modify-btn rounded">modify search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowSearch;