import React from 'react'
import { Link } from "react-router-dom";

const CreateCollectibleEdit = () => {
    return (
        <>

<section className="create-single-section-container">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 d-flex align-items-center">
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 7.33341H4.55333L8.28 3.60675L7.33333 2.66675L2 8.00008L7.33333 13.3334L8.27333 12.3934L4.55333 8.66675H14V7.33341Z" fill="#141414"/>
                        </svg>
                    <Link to="/"> <h5 className="ml-3 mb-0">Back</h5></Link>
                </div>

                <div className="col-sm-12 mt-5">
                    <h2>Edit Profile</h2>
                    <div className="color-gray">Enter price to allow user instantly purchase your NFT</div>
                </div>

                <div className="col-sm-12 col-lg-6 mobile-sm-order-right">
                    <div className="mt-5">
                        <h5><b>Display Name</b></h5>

                        <div className="prize-single-collectible">
                            <input type="text" placeholder="Taimur" />
                            <span className="text-gray ">ETH</span>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h5><b>Custom URL</b></h5>

                        <div className="prize-single-collectible">
                            ----.com/
                            <input type="text" placeholder="Enter your custom URL" />
                        </div>
                    </div>

                    <div className="mt-5">
                        <h5><b>Bio</b></h5>

                        <div className="prize-single-collectible">
                            <input type="text" placeholder="Tell about yourself" />
                        </div>
                    </div>


                    <div className="mt-5">
                        <h5><b>Twitter Username</b></h5>
                        <div className="color-gray">Link your Twitter account to gain more trust on the marketplace</div>

                        <div className="prize-single-collectible">
                            <input type="text" placeholder="10" />
                            <span className="text-gray ">%</span>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h5><b>Personal Site or Portfolio</b></h5>

                        <div className="prize-single-collectible">
                            <input type="text" placeholder="https://" />
                            <span className="text-gray ">%</span>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h5><b>Personal Site or Portfolio</b></h5>
                        <div className="color-gray">Your email for marketplace notifications</div>

                        <div className="prize-single-collectible">
                            <input type="text" placeholder="https://" />
                        </div>
                        <div className="color-gray mt-2">You must sign message to view or manage your email. <span className="color-ping"><u>Sign message</u></span></div>
                    </div>


                    <div className="mt-5">
                        <h5><b>Verification</b></h5>
                        <div className="color-gray">Proceed with verification process to get more visibility and gain trust on Rarible Marketplace. Please allow up to several weeks for the process.</div>

                    </div>


                    <div className="mt-5">
                        <button className="btn-primary-outline w-50">Get Verified</button>
                    </div>


                    <div className="mt-5">
                   <button className="btn-ping  w-100">Update Profile</button> 
                    </div>


                </div>
                <div className="col-sm-12 col-lg-4 mobile-sm-order-left">
                    <div className="border border-radius text-gray d-flex text-center justify-content-center flex-column align-items-center p-5">
                        <div className="createdCollectibleEditImage">
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 19.8C3 15.3444 4.76999 11.0712 7.9206 7.9206C11.0712 4.76999 15.3444 3 19.8 3H70.2C74.6556 3 78.9287 4.76999 82.0794 7.9206C85.23 11.0712 87 15.3444 87 19.8V70.2C87 74.6556 85.23 78.9287 82.0794 82.0794C78.9287 85.23 74.6556 87 70.2 87H19.8C15.3444 87 11.0712 85.23 7.9206 82.0794C4.76999 78.9287 3 74.6556 3 70.2V19.8Z" stroke="#0E0E0E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M30.3008 40.8C36.0998 40.8 40.8008 36.099 40.8008 30.3C40.8008 24.5011 36.0998 19.8 30.3008 19.8C24.5018 19.8 19.8008 24.5011 19.8008 30.3C19.8008 36.099 24.5018 40.8 30.3008 40.8Z" stroke="#EA39AA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M55.61 47.6083L19.8008 87.0001H70.7594C75.0668 87.0001 79.1979 85.2889 82.2438 82.2431C85.2896 79.1972 87.0007 75.0661 87.0007 70.7587V70.2001C87.0007 68.2429 86.2657 67.4911 84.9427 66.0421L68.0168 47.5831C67.2279 46.7226 66.2683 46.0359 65.1993 45.567C64.1302 45.098 62.9752 44.857 61.8078 44.8594C60.6404 44.8618 59.4864 45.1074 58.4192 45.5807C57.3521 46.054 56.3953 46.7446 55.61 47.6083V47.6083Z" stroke="#0E0E0E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                        <div className="color-gray mt-3">We recommend and image 400x400. Gifs works too!!</div>
                        <div className="mt-4">
                            <button className="btn-primary-outline w-100">Choose File</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

        </>
    )
}

export default CreateCollectibleEdit
