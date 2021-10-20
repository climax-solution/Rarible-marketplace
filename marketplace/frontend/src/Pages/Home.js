import React, { useContext, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper/core";
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import artWorkWeek5 from "../assets/img/custom/artWorkWeek5.png";
import artWorkWeek6 from "../assets/img/custom/artWorkWeek6.png";
import topSeller1 from "../assets/img/custom/topSeller1.png";
import topSeller2 from "../assets/img/custom/topSeller2.png";
import topSeller3 from "../assets/img/custom/topSeller3.png";
import topSeller4 from "../assets/img/custom/topSeller4.png";
import topSeller5 from "../assets/img/custom/topSeller5.png";
import topSeller6 from "../assets/img/custom/topSeller6.png";
import topSeller7 from "../assets/img/custom/topSeller7.png";
import topSeller8 from "../assets/img/custom/topSeller8.png";
import topSeller9 from "../assets/img/custom/topSeller9.png";
import topSeller10 from "../assets/img/custom/topSeller10.png";
import topSellerUser1 from "../assets/img/custom/topSellerUser1.png";
import topSellerUser2 from "../assets/img/custom/topSellerUser2.png";
import topSellerUser3 from "../assets/img/custom/topSellerUser3.png";
import topSellerUser4 from "../assets/img/custom/topSellerUser4.png";
import topSellerUser5 from "../assets/img/custom/topSellerUser5.png";
import topSellerUser6 from "../assets/img/custom/topSellerUser6.png";
import topSellerUser7 from "../assets/img/custom/topSellerUser7.png";
import topSellerUser8 from "../assets/img/custom/topSellerUser8.png";
import topSellerUser9 from "../assets/img/custom/topSellerUser9.png";
import topSellerUser10 from "../assets/img/custom/topSellerUser10.png";
import shape from "../assets/img/icons/custom/Shape.svg";
import { Menu, Dropdown, Select } from 'antd';
import { Link } from "react-router-dom";
import { GlobalSettingsContext } from '../Contexts/GlobalSettingsContext';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const { Option } = Select;

SwiperCore.use([Keyboard, Pagination, Navigation]);

const Home = () => {

    let { mobile } = useContext(GlobalSettingsContext)

    const menu = (
        <Menu>
            <Menu.Item>
                Change Price
            </Menu.Item>
            <Menu.Item>
                Transfer Token
            </Menu.Item>
            <Menu.Item>
                Burn Token
            </Menu.Item>
            <Menu.Item>
                Report
            </Menu.Item>
        </Menu>
    );


    const dayMenu = (
        <Menu>
            <Menu.Item>
                This week
            </Menu.Item>
            <Menu.Item>
                This month
            </Menu.Item>
            <Menu.Item>
                Last 6 months
            </Menu.Item>
            <Menu.Item>
                Last 1 year
            </Menu.Item>
        </Menu>
    );

    return (
        <>

            <section className="nft-start">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 pb-5">
                            <h1 className="section-title">
                                Bravado - the <br /> <span className="color-orange">NFT</span> Governance Token
                            </h1>

                            <p>
                                A perfect place for Buy and sell digital art, Also you can get updated NFT collection
                            </p>

                            <button className="btn-primary mt-3">Explore all</button>

                            <div className="d-flex mt-4 nft-start-counter">
                                <div className="border-right pl-4 pr-4">
                                    <h4 className="m-0 p-0 text-center"><b>123k</b></h4>
                                    <small className="pl-2">User</small>
                                </div>

                                <div className="pl-4 pr-4">
                                    <h4 className="m-0 p-0 text-center"><b>123k</b></h4>
                                    <small className="pl-2">User</small>
                                </div>

                                <div className="border-left pl-4 pr-4">
                                    <h4 className="m-0 p-0 text-center"><b>123k</b></h4>
                                    <small className="pl-2">User</small>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-6">
                            <div className="bg-lines"></div>

                            <Swiper
                                style={{ marginTop: 15 }}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={true}
                            >
                                <SwiperSlide>
                                    <img src={artWorkWeek1} width="100%" />
                                    <div className="slider-content">
                                        <img src={topSellerUser1} width="52px" height="52px" />
                                        <div className="slider-conter-absolute d-flex">
                                            <div className="d-flex flex-column">
                                                <small>Current Bid</small>
                                                <div className="d-flex">
                                                    <h6>2.20 ETH</h6>
                                                    <small className="ml-2">($3,321,45)</small>
                                                </div>
                                            </div>
                                            <div className="ml-2">
                                                <small>Remaining time</small>
                                                <h6>23H : 11M: 32S</h6>
                                            </div>
                                        </div>
                                        <div className="ml-3 d-flex flex-column position-relative">
                                            Liquid Abstract Painting
                                            <small>@gshsj56</small>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={artWorkWeek2} width="100%" />
                                    <div className="slider-content">
                                        <img src={topSellerUser1} width="52px" height="52px" />
                                        <div className="slider-conter-absolute d-flex">
                                            <div className="d-flex flex-column">
                                                <small>Current Bid</small>
                                                <div className="d-flex">
                                                    <h6>2.20 ETH</h6>
                                                    <small className="ml-2">($3,321,45)</small>
                                                </div>
                                            </div>
                                            <div className="ml-2">
                                                <small>Remaining time</small>
                                                <h6>23H : 11M: 32S</h6>
                                            </div>
                                        </div>
                                        <div className="ml-3 d-flex flex-column position-relative">
                                            Liquid Abstract Painting
                                            <small>@gshsj56</small>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={artWorkWeek3} width="100%" />
                                    <div className="slider-content">
                                        <img src={topSellerUser1} width="52px" height="52px" />
                                        <div className="slider-conter-absolute d-flex justify-content-between">
                                            <div className="d-flex flex-column">
                                                <small>Current Bid</small>
                                                <div className="d-flex">
                                                    <h6>2.20 ETH</h6>
                                                    <small className="ml-2">($3,321,45)</small>
                                                </div>
                                            </div>
                                            <div className="ml-2">
                                                <small>Remaining time</small>
                                                <h6>23H : 11M: 32S</h6>
                                            </div>
                                        </div>
                                        <div className="ml-3 d-flex flex-column position-relative">
                                            Liquid Abstract Painting
                                            <small>@gshsj56</small>
                                        </div>

                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={artWorkWeek4} width="100%" />
                                    <div className="slider-content">
                                        <img src={topSellerUser1} width="52px" height="52px" />
                                        <div className="slider-conter-absolute d-flex">
                                            <div className="d-flex flex-column">
                                                <small>Current Bid</small>
                                                <div className="d-flex">
                                                    <h6>2.20 ETH</h6>
                                                    <small className="ml-2">($3,321,45)</small>
                                                </div>
                                            </div>
                                            <div className="ml-2">
                                                <small>Remaining time</small>
                                                <h6>23H : 11M: 32S</h6>
                                            </div>
                                        </div>
                                        <div className="ml-3 d-flex flex-column position-relative">
                                            Liquid Abstract Painting
                                            <small>@gshsj56</small>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>


            <section className="artWorkWeekSection">
                <div className="container-fluid">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <h3><b>Artwork of the week</b></h3>
                        <button className="btn-primary-outline">View All</button>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-5 col-lg-5 position-relative mt-3">
                            <img src={artWorkWeekOne} width="95%" alt="" />
                            <div className="art-work-description-container">
                                <h4 className="mb-0">The Black</h4>
                                <small>Original Series</small>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-7 col-lg-7 position-relative">
                            <div className="d-flex overflow-auto">
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek1} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek2} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek3} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex overflow-auto">
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek4} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek5} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                                <div className="position-relative mr-3 mt-3">
                                    <img src={artWorkWeek6} width="230" alt="" />
                                    <div className="art-work-description-container">
                                        <small>Butterfly</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







            <section className="topSeller">
                <div className="container-fluid">
                    <div className="w-100 headerSelect">
                        <h3><b>Top Sellers</b></h3>
                        <Select className="section-select-filter" defaultValue="day" >
                            <Option value="day">Today</Option>
                            <Option value="week">This week</Option>
                            <Option value="month">This month</Option>
                            <Option value="sixYear">Last 6 months</Option>
                            <Option value="year">Last 1 year</Option>
                        </Select>
                    </div>

                    <div className="topSellerContent mt-5">
                        <div className="d-flex overflow-auto mb-4">
                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller6} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser1} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller2} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser2} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller3} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser3} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller4} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser4} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller5} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser5} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                        </div>

                        <div className="d-flex overflow-auto">
                            <div className="d-flex overflow-auto">
                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller6} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser6} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>

                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller7} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser7} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>

                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller8} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser8} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>

                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller9} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser9} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>

                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller10} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser10} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="topSeller">
                <div className="container-fluid">
                    <div className="w-100 headerSelect">
                        <h3><b>Top Buyers</b></h3>
                        <Select className="section-select-filter" defaultValue="day">
                            <Option value="day">Today</Option>
                            <Option value="week">This week</Option>
                            <Option value="month">This month</Option>
                            <Option value="sixYear">Last 6 months</Option>
                            <Option value="year">Last 1 year</Option>
                        </Select>
                    </div>

                    <div className="topSellerContent mt-5">
                        <div className="d-flex overflow-auto mb-4">
                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller4} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser1} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller2} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser2} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller3} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser3} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller4} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser4} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller5} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser5} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                        </div>

                        <div className="d-flex overflow-auto">
                            <div className="d-flex overflow-auto">
                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller6} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser6} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>

                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller7} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser7} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>

                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller8} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser8} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>

                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller9} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser9} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>

                                <div className="topSellerCard mr-3">
                                    <img className="seller-banner-image" src={topSeller10} width="240" alt="" />
                                    <div className="topSellectProfilePicture">
                                        <img src={topSellerUser10} width="100%" alt="" />
                                        <div className="confirmation">
                                            <i className="fas fa-check"></i>
                                        </div>
                                    </div>
                                    <div className="topSellerUserInfo">
                                        <h5><b>Courtney Henry</b></h5>
                                        <small>$1,403</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className="liveAuction live-auction-none-mobile proile-liked-filter">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Live Auction</b></h3>
                    </div>

                    <div className="row mt-5">
                        <div className="col-sm-12 col-lg-3">
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek1} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser1} width="36px" alt="" />
                                        <img src={topSellerUser2} width="36px" alt="" />
                                        <img src={topSellerUser3} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3">
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek1} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser1} width="36px" alt="" />
                                        <img src={topSellerUser2} width="36px" alt="" />
                                        <img src={topSellerUser3} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3">
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek1} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser1} width="36px" alt="" />
                                        <img src={topSellerUser2} width="36px" alt="" />
                                        <img src={topSellerUser3} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3">
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek1} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser1} width="36px" alt="" />
                                        <img src={topSellerUser2} width="36px" alt="" />
                                        <img src={topSellerUser3} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="liveAuction-web-none liveAuction proile-liked-filter mobile-filter-live-auc">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Live Auction</b></h3>
                    </div>
                    <Swiper
                        style={{ marginTop: 15 }}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek1} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser1} width="36px" alt="" />
                                        <img src={topSellerUser2} width="36px" alt="" />
                                        <img src={topSellerUser3} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek1} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser1} width="36px" alt="" />
                                        <img src={topSellerUser2} width="36px" alt="" />
                                        <img src={topSellerUser3} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek1} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser1} width="36px" alt="" />
                                        <img src={topSellerUser2} width="36px" alt="" />
                                        <img src={topSellerUser3} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek1} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser1} width="36px" alt="" />
                                        <img src={topSellerUser2} width="36px" alt="" />
                                        <img src={topSellerUser3} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>


            <section className="liveAuction live-auction-none-mobile">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Hot Bids</b></h3>
                    </div>

                    <div className="row  mt-5">
                        <div className="col-sm-12 col-lg-3">
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek2} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                    <div className="card-time-hours"><small><i className="far fa-clock"></i> 3H : 15M : 50S left</small></div>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser4} width="36px" alt="" />
                                        <img src={topSellerUser5} width="36px" alt="" />
                                        <img src={topSellerUser6} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3">
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek2} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                    <div className="card-time-hours"><small><i className="far fa-clock"></i> 3H : 15M : 50S left</small></div>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser4} width="36px" alt="" />
                                        <img src={topSellerUser5} width="36px" alt="" />
                                        <img src={topSellerUser6} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3">
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek2} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                    <div className="card-time-hours"><small><i className="far fa-clock"></i> 3H : 15M : 50S left</small></div>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser4} width="36px" alt="" />
                                        <img src={topSellerUser5} width="36px" alt="" />
                                        <img src={topSellerUser6} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-3">
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek2} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                    <div className="card-time-hours"><small><i className="far fa-clock"></i> 3H : 15M : 50S left</small></div>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser4} width="36px" alt="" />
                                        <img src={topSellerUser5} width="36px" alt="" />
                                        <img src={topSellerUser6} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="liveAuction-web-none liveAuction proile-liked-filter mobile-filter-live-auc">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Hot Bids</b></h3>
                    </div>
                    <Swiper
                        style={{ marginTop: 15 }}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek2} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                    <div className="card-time-hours"><small><i className="far fa-clock"></i> 3H : 15M : 50S left</small></div>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser4} width="36px" alt="" />
                                        <img src={topSellerUser5} width="36px" alt="" />
                                        <img src={topSellerUser6} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek2} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                    <div className="card-time-hours"><small><i className="far fa-clock"></i> 3H : 15M : 50S left</small></div>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser4} width="36px" alt="" />
                                        <img src={topSellerUser5} width="36px" alt="" />
                                        <img src={topSellerUser6} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek2} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                    <div className="card-time-hours"><small><i className="far fa-clock"></i> 3H : 15M : 50S left</small></div>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser4} width="36px" alt="" />
                                        <img src={topSellerUser5} width="36px" alt="" />
                                        <img src={topSellerUser6} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="liveAuction-card-container">
                                <div className="live-image">
                                    <img src={artWorkWeek2} width="100%" alt="" />
                                    <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                    <Dropdown overlay={menu}>
                                        <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                            <i className="fas fa-ellipsis-h"></i>
                                        </div>
                                    </Dropdown>
                                    <div className="card-time-hours"><small><i className="far fa-clock"></i> 3H : 15M : 50S left</small></div>
                                </div>

                                <div className="bg-white p-4">
                                    <div className="position-relative live-user-list">
                                        <img src={topSellerUser4} width="36px" alt="" />
                                        <img src={topSellerUser5} width="36px" alt="" />
                                        <img src={topSellerUser6} width="36px" alt="" />
                                        <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                    </div>

                                    <h6>Memescalf#782021</h6>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="text-danger"><b>1.2 WETH</b></div>
                                        <small className="text-secondary">Highest bid 1/1</small>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>



            <section className="topSeller live-auction-none-mobile">
                <div className="container-fluid">
                    <div className="w-100 headerSelect">
                        <h3><b>Hot Collections</b></h3>
                    </div>

                    <div className="topSellerContent mt-5">
                        <div className="d-flex overflow-auto mb-4">
                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller4} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser3} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller2} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser2} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller3} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser3} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller4} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser4} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>

                            <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller5} width="240" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser5} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <section className="topSeller liveAuction-web-none">
                <div className="container-fluid">
                    <div className="w-100 headerSelect">
                        <h3><b>Hot Collections</b></h3>
                    </div>
                    <div className="topSellerContent">
                    <Swiper
                        style={{ marginTop: 15 }}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true}
                    >
                        <SwiperSlide>
                        <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller4} width="100%" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser3} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller2} width="100%" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser2} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller3} width="100%" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser3} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                        <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller4} width="100%" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser4} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="topSellerCard mr-3">
                                <img className="seller-banner-image" src={topSeller5} width="100%" alt="" />
                                <div className="topSellectProfilePicture">
                                    <img src={topSellerUser5} width="100%" alt="" />
                                    <div className="confirmation">
                                        <i className="fas fa-check"></i>
                                    </div>
                                </div>
                                <div className="topSellerUserInfo">
                                    <h5><b>Courtney Henry</b></h5>
                                    <small>$1,403</small>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>
                </div>
            </section>








            <section className="liveAuction quickExplore">
                <div className="container-fluid">

                    <div className="d-flex justify-content-between mb-3">
                        <h4><b>Quick Explore</b></h4>
                        <button className="btn-primary-outline-big d-web-none m-0"><img src={shape} alt="" /></button>
                    </div>

                    <div className="w-100 headerSelect d-flex justify-content-between">
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="All" key="1">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek1} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek1} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Art" key="2">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek1} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Photography" key="3">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Games" key="4">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek1} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Metaverses" key="5">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Music" key="6">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek1} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek5} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Memes" key="7">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek4} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek1} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek2} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="liveAuction-card-container">
                                            <div className="live-image">
                                                <img src={artWorkWeek3} width="100%" alt="" />
                                                <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                                <Dropdown overlay={menu}>
                                                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                        <i className="fas fa-ellipsis-h"></i>
                                                    </div>
                                                </Dropdown>
                                            </div>

                                            <div className="bg-white p-4">
                                                <div className="position-relative live-user-list">
                                                    <img src={topSellerUser1} width="36px" alt="" />
                                                    <img src={topSellerUser2} width="36px" alt="" />
                                                    <img src={topSellerUser3} width="36px" alt="" />
                                                    <div className="live-card-tick"><i className="fas fa-check"></i></div>
                                                </div>

                                                <h6>Memescalf#782021</h6>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="text-danger"><b>1.2 WETH</b></div>
                                                    <small className="text-secondary">Highest bid 1/1</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </Tabs>

                        <button className="btn-primary-outline-big mt-0 d-mobile-none"><img src={shape} alt="" /> Filter</button>

                    </div>

                </div>

                <div className="w-100 mt-5 pl-3 pr-3">
                    <div className="view-all-items">
                        <button className="btn-primary-outline w-100">View all</button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Home
