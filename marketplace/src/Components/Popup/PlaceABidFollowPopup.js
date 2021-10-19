import React from 'react'

const PlaceABidFollowPopup = (props) => {

    let {setSinglePopup} = props;

    return (
        <div className="place-a-bid-popup-container">
        <div className="border-radius bg-white p-4 popup-width">
       
            <div className="d-flex justify-content-between cursor-pointer">
                <h2><b> Follow steps</b></h2>
                <div onClick={() => {setSinglePopup(false); document.body.style.overflow = "scroll";}}>
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <div className="mb-3 mt-4">
                <div className="d-flex">
                    <div className="fallow-steps-active">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="ml-3">
                        <h6 className="mb-1"><b>Deposit wETH</b></h6>
                        <p className="color-gray">
                            <small>Send transaction to convert ETH to wETH</small>
                        </p>
                    </div>
                </div>

                <button className="btn-ping  w-100 mb-3">
                Completed
            </button>
            </div>

            <div className="mb-3">
                <div className="d-flex">
                    <div className="fallow-steps-passive">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="ml-3">
                        <h6 className="mb-1"><b>Approve asset</b></h6>
                        <p className="color-gray">
                            <small>This transaction is conducted only once per asset</small>
                        </p>
                    </div>
                </div>

                <button className="btn-gray w-100 mb-3">
                Start
            </button>
            </div>

            <div className="mb-3">
                <div className="d-flex">
                    <div className="fallow-steps-passive">
                        <i className="fas fa-check-circle"></i>
                    </div>
                    <div className="ml-3">
                        <h6 className="mb-1"><b>Place a bid</b></h6>
                        <p className="color-gray">
                            <small>Sign message to set place a bid</small>
                        </p>
                    </div>
                </div>

                <button className="btn-gray w-100 mb-3">
                    Start
                </button>
            </div>

            <button className="btn-primary-outline w-100 mb-3">
                Cancel
            </button>
        </div>
    </div>
    )
}

export default PlaceABidFollowPopup
