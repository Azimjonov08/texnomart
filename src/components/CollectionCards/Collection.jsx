// ======================== IMPORTS ============================

import { Rate } from 'antd';

import "./Collection.scss";

// ======================== IMPORT OF IMAGES =========================
import HonorImg from "../../assets/img/Honor.png";
import HeartImg from "../../assets/Heart.svg";
import ScalesImg from "../../assets/Scales.svg";
import ShopImg from "../../assets/shop.svg";



function Collection() {
    return (
        <div className="collection-cards">
            <div className="container">
                <h2>Новинка</h2>
                <div className="buttons">
                  <button className='buttons-btn-1'>Mazzza narx</button>
                  <button className='buttons-btn-2'>Рекомендуем</button>
                  <button className='buttons-btn-3'>0-0-6</button>
                </div>
                <ul>
                    <li className='item'>

                        <div className="item-box">
                            <img className="honor" src={HonorImg} alt="Honor" width={237} height={208} />
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
                            Смартфон Honor X6a 4/128Gb Black
                        </p>

                        <div className="item-stars">
                            <Rate />


                        </div>
                        <a href="#" className="item-link">
                            от 131 130 сум / 24 мес.
                        </a>
                        <div className="card-footer">
                            <h4>1 880 000  <span>сум</span></h4>
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

export default Collection