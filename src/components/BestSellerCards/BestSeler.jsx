// ====================== IMPORTS ===========================
import { Rate } from 'antd';

import "./BestSeller.scss";

// ====================== IMPORT CARD IMAGES =========================

import WatchImg from "../../assets/img/watch.png";
import HeartImg from "../../assets/Heart.svg";
import ScalesImg from "../../assets/Scales.svg";
import ShopImg from "../../assets/shop.svg";



function BestSeller() {
    return (
        <div className="best_seller-cards">
            <div className="container">
                <h2>Хит продаж</h2>
                <ul>
                    <li className='item'>

                        <div className="item-box">
                            <img className="watch" src={WatchImg} alt="Watch" width={237} height={208} />
                            <div className="right-img_box">
                                <button>
                                    <img src={HeartImg} alt="HeartImg " width={18} height={18} />
                                </button>
                                <button>
                                    <img src={ScalesImg} alt="ScalesImg " width={18} height={18} />
                                </button>
                            </div>
                        </div>
                        <p>
                            Фитнес браслет Huawei Band 7
                            Graphite Black
                        </p>

                        <div className="item-stars">
                            <Rate />


                        </div>
                        <a href="#" className="item-link">
                            от 41 222 сум / 24 мес.
                        </a>
                        <div className="card-footer">
                            <h4>591 000  <span>сум</span></h4>
                            <button>
                                <img src={ShopImg} alt="ShopImg" />
                            </button>
                        </div>

                    </li>
                </ul>

            </div>

        </div>

    )
}

export default BestSeller