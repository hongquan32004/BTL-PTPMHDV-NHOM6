import React from 'react'
import { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from '../../assets/images/TopBannerWeb.png'
import Oto from '../../assets/images/oto.png'
import TourTet from '../../assets/images/tourtTet.png'
import Dimond from '../../assets/images/dimond.png'
import TieuChuan from '../../assets/images/tieuchuan.png'
import TietKiem from '../../assets/images/tietkiem.png'
import GiaTot from '../../assets/images/giatot.png'
import Slider1 from '../../assets/images/slider1.png'
import Slider2 from '../../assets/images/slider2.png'
import Slider3 from '../../assets/images/slider3.png'
import Slider4 from '../../assets/images/slider4.png'
import Slider5 from '../../assets/images/slider5.png'
import './style.scss'

function Home() {
    const images = [Slider1, Slider2, Slider3, Slider4, Slider5];
    const [reverse, setReverse] = useState(false);
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: reverse,
        afterChange: (current) => {
            const totalSlides = images.length;
            if (current === totalSlides - 1) {
                setReverse(true);
            } else if (current === 0) {
                setReverse(false);
            }
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPause();
            setTimeout(() => {
                sliderRef.current.slickPlay();
            }, 3000);
        }
    }, []);

    return (
        <div className='home-container'>
            <div className="home-banner">
                <div className="banner-img">
                    <img src={Banner} alt="" />
                </div>
                <div className="banner-content">
                    <div className="banner-search-tab">
                        <div className="bst-content">
                            <img src={Oto} alt="" />
                            <p>Tour trọn gói</p>
                        </div>
                    </div>
                    <div className="banner-search-body">
                        <div className="bsb-container">
                            <div className="bsb-input">
                                <div className="input-container">
                                    <div className="input-content">
                                        <label htmlFor="">Bạn muốn đi đâu?<span style={{ color: 'red' }}>*</span></label>
                                        <div className="input">
                                            <input type="text" placeholder='Tìm kiếm với bất kỳ địa điểm bạn yêu thích!' />
                                        </div>
                                    </div>
                                </div>
                                <div className="hasDivider"></div>
                                <div className="input-container">
                                    <div className="input-content">
                                        <label htmlFor="">Ngày đi</label>
                                        <div className="input">
                                            <input type="text" value="T6, 20 tháng 12" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hasDivider"></div>
                                <div className="input-container">
                                    <div className="input-content">
                                        <label htmlFor="">Ngân sách: </label>
                                        <p style={{ fontSize: '20px' }}>Chọn mức giá</p>
                                    </div>
                                    <div className="dropdown" style={{ display: 'none' }}>
                                        <div className="dropdown-content">
                                            <div className="drp-list">Dưới 5 triệu</div>
                                            <div className="drp-list">Từ 5 - 10 triệu</div>
                                            <div className="drp-list">Từ 10 - 20 triệu</div>
                                            <div className="drp-list">Trên 20 triệu</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bsb-icon">
                                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="select-tour">
                <div className="select-tour-container">
                    <div className="select-tour-button">
                        <div className="stb-list">
                            <button><img src={TourTet} alt="" /></button>
                            <p>TOUR <br />TẾT</p>
                        </div>
                        <div className="stb-list">
                            <button><img src={Dimond} alt="" /></button>
                            <p>TOUR <br />CAO CẤP</p>
                        </div>
                        <div className="stb-list">
                            <button><img src={TieuChuan} alt="" /></button>
                            <p>TOUR <br />TIÊU CHUẨN</p>
                        </div>
                        <div className="stb-list">
                            <button><img src={TietKiem} alt="" /></button>
                            <p>TOUR <br />TIẾT KIỆM</p>
                        </div>
                        <div className="stb-list">
                            <button><img src={GiaTot} alt="" /></button>
                            <p>TOUR <br />GIA TỐT</p>
                        </div>
                    </div>
                    <Slider {...settings} ref={sliderRef}>

                        {images.map((image, key) => (
                            <div className='each-slider' key={key}>
                                <img src={image} alt="" />
                            </div>
                        ))}

                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default Home;