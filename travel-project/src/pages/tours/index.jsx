import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Code from '../../assets/images/code.png'
import Vitri from '../../assets/images/vitri.png'
import Time from '../../assets/images/time.png'
import Flight from '../../assets/images/flight.png'
import Celanda from '../../assets/images/celanda.png'
import './style.scss'
import { get } from '../../utils/axios-http/axios-http';

function Tour() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const query = Object.fromEntries(searchParams.entries());
        const fetchData = async () => {
            const response = await get(`tours/${slug}`, { params: query });
            setTours(response);
        }
        fetchData();
    }, [slug, searchParams]);
    return (
        <div className='tour-container'>
            <div className="find-tour-header">
                <div className="find-tour-header-container">
                    <div className="breadcrumb-container">
                        <p className='normal-link' style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Điểm đến /</p>
                        <p className='active-link'>{slug}</p>
                    </div>
                    <div className="title">
                        <h1>{slug}</h1>
                    </div>
                </div>
            </div>
            <div className="find-tour-content">
                <div className="find-tour-content-container">
                    <div className="find-tour-content-filter">
                        <p className='filter-sidebar-header'>Bộ lọc tìm kiếm</p>
                        <div className="filter-section">
                            <div className="filter-range">
                                <div className="title">
                                    <p>Ngân sách:</p>
                                </div>
                                <div className="list">
                                    <div className="list-item">
                                        Dưới 5 triệu
                                    </div>
                                    <div className="list-item">
                                        Từ 5 đến 10 triệu
                                    </div>
                                    <div className="list-item">
                                        Từ 10 - 20 triệu
                                    </div>
                                    <div className="list-item">
                                        Trên 20 triệu
                                    </div>
                                </div>
                            </div>
                            <div className="filter-option">
                                <div className="title">
                                    <p>Điểm khởi hành</p>
                                </div>
                                <div className="select-container">
                                    <div className="button">
                                        <span>Tất cả</span>

                                    </div>
                                </div>
                            </div>
                            <div className="filter-option">
                                <div className="title">
                                    <p>Điểm đến</p>
                                </div>
                                <div className="select-container">
                                    <div className="button">
                                        <span>Tất cả</span>

                                    </div>
                                </div>
                            </div>
                            <div className="filter-calendar">
                                <div className="title">
                                    <p>Ngày đi</p>
                                </div>
                                <div className="input-container">
                                    <input type="text" readOnly value="T6,20 tháng 12" />
                                </div>
                            </div>
                            <div className="filter-options">
                                <div className="title">
                                    <p>Dòng tour</p>
                                </div>
                                <div className="select-container">
                                    <button>Cao cấp</button>
                                    <button>Tiêu chuẩn</button>
                                    <button>Tiết kiệm</button>
                                    <button>Giá tốt</button>
                                </div>
                            </div>
                            <div className="filter-options">
                                <div className="title">
                                    <p>Phương tiện</p>
                                </div>
                                <div className="select-container">
                                    <button>Xe</button>
                                    <button>Máy bay</button>
                                </div>
                            </div>
                            <button className='filter-btn'>Áp dụng</button>
                        </div>
                    </div>
                    <div className="find-tour-content-list">
                        <div className="find-tour-content-list-header">
                            <div className="left-filter">
                                <p>Chúng tôi tìm thấy <span>{tours.length}</span> chương trình cho quý khách</p>
                            </div>
                            <div className="right-sort">
                                <span className='label'>Sắp xếp theo: </span>
                                <div className="right-sort-select">
                                    <div className="select-container">
                                        <div className="selec-container-button">
                                            <span>Tất cả</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="find-tour-content-list-main">
                            {tours.map((item, key) => (
                                <div key={key} className="card-filter-desktop">
                                    <div className="card-filter-thumbnail">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="card-filter-desktop-content">
                                        <div className="info">
                                            <div className="info-content">
                                                <div className="info-content-header">
                                                    <p>{item.title}</p>
                                                </div>
                                                <div className="info-tour">
                                                    <div className="info-tour-code">
                                                        <div className="info-tour-code-content">
                                                            <div className="code-left">
                                                                <img src={Code} alt="" />
                                                                <label htmlFor="">Mã tour:</label>
                                                            </div>
                                                            <p>{item.code}</p>
                                                        </div>
                                                        <div className="info-tour-code-content">
                                                            <div className="code-left">
                                                                <img src={Vitri} alt="" />
                                                                <label htmlFor="">Khởi hành:</label>
                                                            </div>
                                                            <p>{item.departure}</p>
                                                        </div>
                                                    </div>
                                                    <div className="info-tour-code">
                                                        <div className="info-tour-code-content">
                                                            <div className="code-left">
                                                                <img src={Time} alt="" />
                                                                <label htmlFor="">Thời gian: </label>
                                                            </div>
                                                            <p>5N4Đ</p>
                                                        </div>
                                                        <div className="info-tour-code-content">
                                                            <div className="code-left">
                                                                <img src={Flight} alt="" />
                                                                <label htmlFor="">Phương tiện:</label>
                                                            </div>
                                                            <p>{item.transportation}</p>
                                                        </div>
                                                    </div>
                                                    <div className="info-tour-calenda">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <div className="price-content">
                                                <div className="price-content-label">
                                                    <p>Giá từ:</p>
                                                </div>
                                                <div className="price-content-price">
                                                    <p><span>{item.price} </span>vnđ</p>
                                                </div>
                                            </div>
                                            <div className="price-btn" onClick={() => navigate(`/tour-details/${item.slug}`)}>
                                                <button>Xem chi tiết</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tour