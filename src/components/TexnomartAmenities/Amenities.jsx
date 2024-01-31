// ============================== IMPORTS ==========================

import "./Amenities.scss";

// ========================= IMPORT IMAGES =========================

import InstallmentsImg from "../../assets/installments.svg";
import DeliveryImg from "../../assets/delivery.svg";
import GuaranteeImg from "../../assets/Guarantee.svg";
import BonusImg from "../../assets/Bonus.svg";
import HelpImg from "../../assets/Help.svg";

function Amenities() {
    return (
        <div className="amenities">
            <div className="container">
                <h2>Телефоны и бытовая техника в рассрочку</h2>
                <div className="box">
                    <ul>
                        <li>
                            <button>
                                <img src={InstallmentsImg} alt="InstallmentsImg" />
                            </button>
                            <h4>Покупка в рассрочку</h4>
                            <p>
                                Удобная онлайн рассрочка на
                                товары бытовой техники в
                                Texnomart
                            </p>
                        </li>
                        <li>
                            <button>
                                <img src={DeliveryImg} alt="DeliveryImg" />
                            </button>
                            <h4>Бесплатная доставка</h4>
                            <p>
                                Условия доставки товаров в
                                Техномарт
                            </p>
                        </li>
                        <li>
                            <button>
                                <img src={GuaranteeImg } alt="GuaranteeImg " />
                            </button>
                            <h4>Гарантия на товары</h4>
                            <p>
                                Узнайте всё о гарантии и возврате
                                товара в Texnomart
                            </p>
                        </li>
                        <li>
                            <button>
                                <img src={BonusImg} alt="BonusImg" />
                            </button>
                            <h4>Бонусная система</h4>
                            <p>Бонусная система</p>
                        </li>
                        <li>
                            <button>
                                <img src={ HelpImg } alt=" HelpImg " />
                            </button>
                            <h4>Помощь</h4>
                            <p>Частые вопросы   </p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Amenities