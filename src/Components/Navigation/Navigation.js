import React from 'react';
import '../../StyleSheet/Navigation.scss'
import spin from '../../img/mini.png'
import logo from '../../img/logo.png'
import toggler from '../../img/toggle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-xl navigation fixed-top">
            <div class="container p-0">
                <a class="navbar-brand" href="#"><img src={logo} className="img-fluid" alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">flight</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link activate" href="#">bus</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">hotel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">holyday</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">visa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">visa guide</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">group request</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">travel advisory</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">promotion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">blog</a>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <button className="spin-btn">
                            <img src={spin} className="img-fluid" alt="" />
                            <span>Spin To Win</span>
                        </button>
                        <button className="toggle-btn">
                            <img src={toggler} className="img-fluid" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;