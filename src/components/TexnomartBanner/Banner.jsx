// ========================= IMPORTS ==============================

import "./Banner.scss";

// ========================= IMPORT IMAGES ========================

import DoublePhoneImg from "../../assets/img/Double-Phones.png";
import GooglePlayImg from "../../assets/GooglePlay.svg";
import ScannerImg from "../../assets/img/Scanner.png";
import AppStoreImg from "../../assets/AppStore.svg"



function Banner() {
    return (

        <div className="container">
            <div className="banner">
                <div className="banner-box">
                    <img className="duble-phone" src={DoublePhoneImg} alt="DoublePhoneImg " />

                    <div className="banner-box_right">
                        <h2>Скачивайте приложение</h2>
                        <p>
                            Совершайте покупки в мобильном приложении,
                            не выходя из дома!
                        </p>
                        <div className="scanner-box">
                            <img src={ScannerImg} alt=" ScannerImg " />
                            <p>
                                Наведите камеру и
                                скачайте бесплатное
                                приложение 
                                <span>
                                    Texnomart
                                </span>
                            </p>
                        </div>
                        <div className="banner-right_footer">
                            <img src={GooglePlayImg} alt="GooglePlayImg" />
                            <img src={AppStoreImg} alt="AppStoreImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner