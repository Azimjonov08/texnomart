// ======================== IMPORTS ============================

import { Rate } from 'antd';

import "./Card-News.scss";

// ======================== IMPORT OF IMAGES =========================
import PocoImg from "../../assets/img/PocoImg.png";
import HeartImg from "../../assets/Heart.svg";
import ScalesImg from "../../assets/Scales.svg"




function CardNews() {
    return (
        <div className="cards">
            <div className="container">
                <h2>Новинка</h2>
                <ul>
                    <li className='item'>
                        <div className="item-box">
                            <img className="poco" src={PocoImg} alt="Poco" width={270} height={208} />
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
                            Смартфон Huawei Nova Y91
                            8/256Gb Moonlight Silver
                        </p>

                        <div className="item-stars">
                        <Rate />


                        </div>
                        <a href="#" className="item-link">
                            от 224 176 сум / 24 мес.
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardNews