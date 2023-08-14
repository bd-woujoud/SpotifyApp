import React from 'react'
import "../assets/css/priminuim.css"
import bloc1 from "../assets/images/ImageP1.png"
import bloc2 from "../assets/images/ImageP2.png"
import bloc3 from "../assets/images/ImageP3.png"
import bloc4 from "../assets/images/ImageP4.png"
import Footer from '../layouts/Footer'
const Premium: React.FC = () => {

    return (
        <div className='blue bg-white' >



            <div className="container-fluid header  ">
                <div className="titre">
                    <div className="premium">
                        Get Premium free for 1 month </div>
                    <div className="titre-h2">
                        Just ₹119/month after. Debit and credit cards accepted. Cancel anytime. </div>
                    <div className="auto-btn">
                        <div className="auto-button">
                            <div className="btn get-started">
                                Get started </div>
                        </div>
                        <div className="auto-primary">
                            <div className="btn-other-plans">
                                See other plans </div>
                        </div>
                    </div>
                    <div className="terme">
                        <div className="condition">
                            <span>
                                <span className="conditions-apply1">Terms
                                    and conditions apply</span>
                                <span className="conditions-apply-2">.
                                    1 month free not available for users who have already tried Premium.</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container bd-white">
                <h2 className="section-title m-5 mb-5 ">The power of Premium</h2>
                <div className="row mt-5">
                    <div className="  col-md-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bloc1} className="card-img-top" alt="..." />
                            <div className="card-body mt-3">
                                <h5 className="card-title text-center">Ad-free music listening</h5>
                                <p className="card-text">Enjoy uninterrupted music.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-3">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bloc2} className="card-img-top" alt="..." />
                            <div className="card-body mt-3">
                                <h5 className="card-title text-center">Offline playback</h5>
                                <p className="card-text">Enjoy uninterrupted music.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-3">
                        <div className="card ">
                            <img src={bloc3} className="card-img-top" alt="..." />
                            <div className="card-body mt-3">
                                <h5 className="card-title text-center">Play everywhere</h5>
                                <p className="card-text">Enjoy uninterrupted music.</p>
                            </div>
                        </div>
                    </div>
                    <div className="  col-md-3 ">
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={bloc4} className="card-img-top" alt="..." />
                            <div className="card-body mt-3">
                                <h5 className="card-title text-center">Pay your way</h5>
                                <p className="card-text">Enjoy uninterrupted music.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Premium