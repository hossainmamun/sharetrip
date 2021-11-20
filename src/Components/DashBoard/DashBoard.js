import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../StyleSheet/DashBoard.scss'
import VehicleList from './VehicleList/VehicleList.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCoins, faGem } from '@fortawesome/free-solid-svg-icons'
import bus_arrow from '../../img/bus-arrow.png'
import coin from '../../img/coin.png'


const DashBoard = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#000" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "#000" }}
                onClick={onClick}
            />
        );
    }

    const busList = [
        {
            title: 'Hanif Enterprise',
            amount: '40 Buses',
        },
        {
            title: 'Shohag Poribahan',
            amount: '40 Buses',
        },
        {
            title: 'Ena Transport Ltd',
            amount: '40 Buses',
        },
        {
            title: 'Saintmartin Travels',
            amount: '40 Buses',
        },
        {
            title: 'Soudia Paribahan',
            amount: '40 Buses',
        },
        {
            title: 'Saintmartin Hyundai',
            amount: '40 Buses',
        },
        {
            title: 'Shamoli Poribahan',
            amount: '40 Buses',
        },
        {
            title: 'Dhaka Express',
            amount: '40 Buses',
        },
        {
            title: 'London Express',
            amount: '40 Buses',
        },
        {
            title: 'Alom Asia',
            amount: '40 Buses',
        },
        {
            title: 'Shoukhin Express',
            amount: '40 Buses',
        },
    ]


    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="dashboard mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 left-side">
                        {/* empty div */}
                    </div>
                    <div className="col-lg-9 col-md-12 ps-lg-5 right-side">
                        <div>
                            <span>48 Available Buses</span>
                        </div>
                        {/* slider */}
                        <div className="rounded slider">
                            <Slider {...settings}>
                                {
                                    busList.map(bus => <VehicleList bus={bus} />)
                                }
                            </Slider>
                        </div>

                        {/* ------ */}
                        <div className="row policy-item mt-3 rounded">
                            <div className="col-md-3">
                                <FontAwesomeIcon icon={faGem} />
                                <p>earliest buses</p>
                            </div>
                            <div className="col-md-3 primary">
                                <FontAwesomeIcon icon={faCoins} />
                                <p>cheapest buses</p>
                            </div>
                            <div className="col-md-3">
                                <FontAwesomeIcon icon={faBolt} />
                                <p>available seats</p>
                            </div>
                            <div className="col-md-3">
                                <FontAwesomeIcon icon={faBolt} />
                                <p>fastest trips</p>
                            </div>
                        </div>

                        {/* --- seat details --- */}
                        <div className="row seat-detail mt-3 rounded">
                            <div className="col-md-3 start-col p-3">
                                <strong>AC</strong>
                                <div className="mt-4">
                                    <span>From</span>
                                    <p>DHAKA <span className="ms-2">11:30PM</span></p>
                                    <p className="counter">kalabagan Counter</p>
                                    <span>22 June 2021</span>
                                </div>
                            </div>

                            <div className="col-md-3 seat-detail-col text-center p-3">
                                <div>
                                    <strong>Hanif Enterprise</strong>
                                    <span>31-DHK-CHG(D)</span>
                                </div>
                                <div className="mt-4">
                                    <img src={bus_arrow} className="img-fluid" alt="" />
                                    <p className="seat-para">16 Seats Available</p>
                                    <span>6h 00m</span>
                                </div>
                            </div>

                            <div className="col-md-3 end-col p-3">
                                <div className="d-flex">
                                    <img src={coin} className="img-fluid" alt="" />
                                    <strong className="ms-3">55</strong>
                                </div>
                                <div className="mt-4">
                                    <span>To</span>
                                    <p>CHOTTOGRAM <span className="ms-2">05:30AM</span></p>
                                    <p className="counter">Dampara Counter</p>
                                    <span>23 June 2021</span>
                                </div>
                            </div>

                            <div className="col-md-3 cost-col p-3">
                                <span>Per Person</span>
                                <h4>BDT 750</h4>
                                <p>BDT 750</p>
                                <button className="btn">View Seats</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;