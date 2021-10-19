import React from 'react'

const CreateCollectibleMultiplePopup = (props) => {

    let {setSingleCollectionPopup} = props;

    return (
        <div className="place-a-bid-popup-container">
        <div className="border-radius bg-white p-4 popup-width">
            <div className="d-flex justify-content-between cursor-pointer">
                <h2><b>Collection</b></h2>
                <div onClick={() => {setSingleCollectionPopup(false); document.body.style.overflow = "scroll";}}>
                    <i class="fas fa-times"></i>
                </div>
            </div>

            <div className="d-flex mt-3">
                <div className="fallow-steps-active">
                    <i className="fas fa-check-circle"></i>
                </div>
                <div className="ml-3">
                    <h6 className="mb-1"><b>Deposit wETH</b></h6>
                    <p className="color-gray">
                        <small>
                            We recommend an image of atleast 400x400. Gifs work too.
                        </small>
                    </p>

                    <button className="btn-primary-outline w-100">Choose File</button>
                </div>
            </div>


            <div className="mt-4">
                <div className="d-flex">
                    <h5><b>Display name</b></h5> <span className="color-gray ml-2">(Optional)</span>
                </div>

                <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
                    <input type="text" placeholder="Enter token name" className="w-100" />
                </div>
                <div className="color-gray">
                    <small>Token name cannot be changed in future</small>
                </div>
            </div>


            <div className="mt-2">
                <div className="d-flex">
                    <h5><b>Symbol</b></h5> <span className="color-gray ml-2">(Required)</span>
                </div>

                <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
                    <input type="text" placeholder="Enter token symbol" className="w-100" />
                </div>
            </div>

            <div className="mt-3">
                <div className="d-flex">
                    <h5><b>Description</b></h5> <span className="color-gray ml-2">(Optional)</span>
                </div>

                <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
                    <input type="text" placeholder="Some words about token collection" className=" w-100 " />
                </div>
            </div>


            <div className="mt-3">
                <div className="d-flex">
                    <h5><b>Short URL</b></h5> <span className="color-gray ml-2">(Optional)</span>
                </div>

                <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
                    <input type="text" placeholder="----.com/  " className=" w-100 " />
                </div>
                <p className="color-gray">
                    <small>Will be used as public profile</small>
                </p>
            </div>


            <button className="btn-ping  w-100 mt-2 mb-3 ">
                Create Collection
            </button>

        </div>
    </div>
    )
}

export default CreateCollectibleMultiplePopup
