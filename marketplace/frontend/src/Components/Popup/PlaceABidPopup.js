import React, { useState } from 'react'
import PlaceABidFollowPopup from './PlaceABidFollowPopup';

const PlaceABidPopup = (props) => {

    let {setSingleCollectionPopup} = props;

    const [singlePopup, setSinglePopup] = useState(false);

    return (
        <>

        {
            singlePopup && <PlaceABidFollowPopup setSinglePopup={setSinglePopup} />
        }

        <div className="place-a-bid-popup-container">
        <div className="border-radius bg-white p-4 popup-width">
            <div className="d-flex justify-content-between cursor-pointer">
                <h2><b>Place a bid</b></h2>
                <div onClick={() => {setSingleCollectionPopup(false); document.body.style.overflow = "scroll";}}>
                    <i class="fas fa-times"></i>
                </div>
            </div>

            <small>You are about to place a bid for <span><b>burning peace by OGwin</b></span></small>

            <h5 className="mt-3"><b>Your bid</b></h5>

            <div className="pt-2 pb-2 border-bottom d-flex justify-content-between">
                <div>0.2</div>
                <div><b>wETH</b> <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.666016 8.33333C0.666016 12.9358 4.39685 16.6667 8.99935 16.6667C13.6018 16.6667 17.3327 12.9358 17.3327 8.33333C17.3327 3.73083 13.6018 0 8.99935 0C4.39685 0 0.666016 3.73083 0.666016 8.33333ZM15.6657 8.33337C15.6657 12.0153 12.6809 15 8.99902 15C5.31712 15 2.33236 12.0153 2.33236 8.33337C2.33236 4.65148 5.31712 1.66671 8.99902 1.66671C12.6809 1.66671 15.6657 4.65148 15.6657 8.33337ZM9.83236 10.8334V12.5H8.16569V10.8334H9.83236ZM9.83268 9.99999V9.46249C11.2024 9.05424 12.0746 7.71384 11.8932 6.29617C11.7118 4.87849 10.53 3.80098 9.10166 3.75084C7.6733 3.7007 6.41891 4.69269 6.13851 6.09416L7.77351 6.42166C7.90257 5.77597 8.51039 5.34111 9.16316 5.42745C9.81594 5.51378 10.2898 6.09171 10.2466 6.74874C10.2033 7.40578 9.6578 7.91662 8.99934 7.91666C8.53911 7.91666 8.16601 8.28975 8.16601 8.74999V9.99999H9.83268Z" fill="black"/>
                    </svg>
                </div>
            </div>
            <div className="color-gray">
                <small>Must be atleast 0.2 wETH</small>
            </div>

            <div className="mt-3">
                <div className="d-flex justify-content-between mb-2">
                    <div className="color-gray">
                        Your bidding balance
                    </div>
                    <div><b>0 wETH</b></div>
                </div>

                <div className="d-flex justify-content-between mb-2">
                    <div className="color-gray">
                        Your balance
                    </div>
                    <div><b>0.0506518 ETH</b></div>
                </div>

                <div className="d-flex justify-content-between mb-2">
                    <div className="color-gray">
                        Service fee
                    </div>
                    <div><b>0.0005 wETH</b></div>
                </div>

                <div className="d-flex justify-content-between mb-2">
                    <div className="color-gray">
                        You will pay
                    </div>
                    <div><b>0.0205 wETH</b></div>
                </div>
            </div>

            <button className="btn-ping  w-100 mt-4 mb-3">
                Place a bid
            </button>

            <div className="text-white text-center">
                <small>0.021 ETH will be converted to 0.021 wETH</small>
            </div>
        </div>
    </div>

    </>
    )
}

export default PlaceABidPopup
