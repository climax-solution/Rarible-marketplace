import React from 'react'
import collectibleSingle from "../assets/img/icons/custom/collectibleSingle.png";
import collectibleMulti from "../assets/img/icons/custom/collectibleMulti.png";
import {
    Link
  } from "react-router-dom";

const CreateCollectible = () => {
    return (
        <section className="create-collectible">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 d-flex align-items-center">
                            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 7.33341H4.55333L8.28 3.60675L7.33333 2.66675L2 8.00008L7.33333 13.3334L8.27333 12.3934L4.55333 8.66675H14V7.33341Z" fill="#141414"/>
                                </svg>
                           <Link to="/"><h5 className="ml-3 mb-0">Back</h5></Link> 
                        </div>
                       
                        <div className="col-sm-12 col-lg-6 mt-4">
                            <h1>Create Collectible</h1>

                            <div className="color-gray mt-4">
                                Choose “single” if you want your collectible to be one of a kind or ”multiple” if you want to sell one collectible multiple times
                            </div>

                            <div className="mt-4 d-flex justify-content-center create-collectible-select">
                                <div className="position-relative">
                                    <Link to="/CreateCollectibleSingle"> 
                                    <div className="create-col border-radius border d-flex justify-content-center align-items-center flex-column">
                                        <button className="single-create-collectible btn-primary-outline bg-white ">Timed Auctions</button>
                                        <img src={collectibleSingle} width="120" alt="" />
                                        <h6 className="mt-3"><b>Single</b></h6>
                                    </div>
                                    </Link>
                                </div>
                                <div>
                                <Link to="/CreateCollectibleMulti"> 
                                    <div className="create-col border-radius border d-flex justify-content-center align-items-center flex-column">
                                        <img src={collectibleMulti} width="130" alt="" />
                                        <h6 className="mt-3"><b>Multiple</b></h6>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                            <p className="color-gray mt-3">We do not own your private keys and cannot access your funds without your confirmation</p>

                        </div>
                       
                    </div>
                </div>
            </section>
    )
}

export default CreateCollectible
