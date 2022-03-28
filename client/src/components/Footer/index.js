import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
function Footer() {
    return (
        <div className='page-container'>
            <div className='content-wrap'>
                <div className='footer has-text-centered has-background-link has-text-light'>
                    <div className='content has-text-centered '>
                        <div className="columns is-mobile is-centered ">
                            <div className="column has-text-light">
                                <h4 className='title has-text-centered has-text-light'>
                                    Sparkling Spaces
                                </h4>
                                <div className='list'>
                                    <ul>
                                        <div className='list-item'>
                                            <li>407-SPA-RKLE</li>
                                            <li>123 Main St.</li>
                                            <li>Orlando, FL 32832</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                                <h4 className='title has-text-centered has-text-light'>MERN Project by</h4>
                                <div className='list'>
                                    <ul>
                                        <div className='list-item'>
                                            <li>Alexis El Armani</li>
                                            <li>Mark Dale</li>
                                            <li>Ivy Do</li>
                                            <li>Shawna Boucher</li>
                                            <li>Patricia Manneci</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="column">
                                <h4 className='title has-text-centered has-text-light'>Corporate</h4>
                                <div className='list'>
                                    <ul>
                                        <div className='list-item'>
                                            {/* Filler List Items */}
                                            <li>Customer Support</li>
                                            <li className='has-text-white'><Link to={"./maiddash"}>Employee Dashboard</Link></li>
                                            <li>Company Policies</li>
                                            <li>Contact Us</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='column has-text-is-centered'>
                            <p>
                                &copy; {new Date().getFullYear()} SPARKLING SPACES | All Rights Reserved | Terms of Service
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer