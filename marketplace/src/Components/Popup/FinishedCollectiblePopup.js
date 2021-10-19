import React from 'react'

const FinishedCollectiblePopup = (props) => {

    let {setSingleCollectionPopup} = props;

    return (
        <div className="place-a-bid-popup-container">
        <div className="border-radius bg-white p-4 popup-width">
            <div className="d-flex justify-content-between cursor-pointer">
                <h2><b>Follow steps</b></h2>
                <div onClick={() => {setSingleCollectionPopup(false); document.body.style.overflow = "scroll";}}>
                    <i class="fas fa-times"></i>
                </div>
            </div>

            <div className="d-flex mt-3">
                <div className="fallow-steps-active">
                    <i className="fas fa-check-circle"></i>
                </div>
                <div className="ml-3">
                    <h6 className="mb-1"><b>Deploy contract</b></h6>
                    <p className="color-gray">
                        <small>
                            Deploy code for the new collection smart contract
                        </small>
                    </p>

                    <button className="btn-ping  w-100">Complated</button>
                </div>
            </div>

            <div className="d-flex mt-3">
                <div className="fallow-steps-passive">
                    <i className="fas fa-check-circle"></i>
                </div>
                <div className="ml-3">
                    <h6 className="mb-1"><b>Sign message</b></h6>
                    <p className="color-gray">
                        <small>
                            Sign message with new collection preferences
                        </small>
                    </p>
                </div>
            </div>

            <button className="btn-gray w-100 mt-4">
                Start
            </button>



            <button className="btn-primary-outline w-100 mt-4 mb-3 ">
                Cancel
            </button>

        </div>
    </div>
    )
}

export default FinishedCollectiblePopup
