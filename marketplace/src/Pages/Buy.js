import React, { useState } from 'react'
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import userTick from "../assets/img/custom/userTick.png";
import logo from "../assets/img/icons/custom/logo.svg";
import start from "../assets/img/icons/custom/start.svg";
import topSellerUser4 from "../assets/img/custom/topSellerUser4.png";
import FinishedCollectiblePopup from '../Components/Popup/PlaceABidPopup';

const Buy = () => {
    const [singleCollectionPopup, setSingleCollectionPopup] = useState(false);

    return (
        <>

        {
            singleCollectionPopup && <FinishedCollectiblePopup setSingleCollectionPopup={setSingleCollectionPopup} />
        }
        
        <section className="buy-art-work-week">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-lg-5">
                    <img src={artWorkWeekOne} className="border-radius" width="100%" alt="" />
                </div>
                <div className="col-sm-12 col-lg-7 ">
                    <div className="buy-art-work-week-card border-radius">
                        <div className="d-flex justify-content-between">
                            <h1>Artwork of the week</h1>
                            <div className="d-flex">
                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                <div className="card-select-icon ml-2"><i className="fas fa-ellipsis-h"></i></div>
                            </div>
                        </div>

                        <div>
                            <span className="text-secondary">Highest bid </span>
                            <span className="color-ping"><b>0.066 wETH</b></span>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="w-100 d-flex">
                            <div className="d-flex flex-column">
                                <b className="text-secondary">Creator</b>
                                <div className="mt-3">
                                    <img src={userTick} width="36" alt="" />
                                    <span><b>Courtney</b></span>
                                </div>
                            </div>
                            <div className="ml-4">
                                <b className="text-secondary">Creator</b>
                                <div className="mt-3">
                                    <img src={logo} width="36" alt="" />
                                    <span><b>EdenSwap</b></span>
                                </div>
                            </div>
                        </div>


                        <button className="btn-primary-outline-responsive mt-4">
                            <img src={start} width="16" alt="" /> 10% of sales will go to creator
                        </button>


                        <div className="mt-5">
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Bids</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Details</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">History</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">No active bids yet. Be the first to make a bid!</div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">No active bids yet. Be the first to make a bid!</div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">No active bids yet. Be the first to make a bid!</div>
                            </div>

                            <div className="tab-pane-bottom-solid"></div>
                        </div>


                        <div className="d-flex mt-4 justify-content-center mt-5 buy-font">
                            <div className="pr-2 border-right">
                                <span className="text-secondary">Highest bid by </span><span><b>The first of art</b></span>
                                <div className="d-flex mt-2">
                                    <div>
                                        <img src={topSellerUser4} width="42" alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <h5 className="m-1"><b>0.066 wETH</b></h5>
                                        <div className="text-secondary">~$261</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pl-2 ">
                                <div className="text-secondary">Auction ends in</div>
                                <div className="d-flex mt-3">
                                    <div className="mr-3">
                                        <h5 className="mb-1"><b>0</b></h5>
                                        <div className="text-secondary">Days</div>
                                    </div>

                                    <div className="mr-3">
                                        <h5 className="mb-1"><b>9</b></h5>
                                        <div className="text-secondary">Hours</div>
                                    </div>

                                    <div className="mr-3">
                                        <h5 className="mb-1"><b>6</b></h5>
                                        <div className="text-secondary">Minutes</div>
                                    </div>

                                    <div className="mr-3">
                                        <h5 className="mb-1"><b>21</b></h5>
                                        <div className="text-secondary">Seconds</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center mt-5">
                            <div className="col-sm-12 col-lg-8">
                                <button className="btn-ping  w-100" onClick={() => setSingleCollectionPopup(true)}>
                                    Place a bid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
    )
}

export default Buy
