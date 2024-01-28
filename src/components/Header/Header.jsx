import "./Header.scss"
import React from 'react';
import { Button, Dropdown } from 'antd';
import Local from "../../assets/local.svg"
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { message, Space, } from 'antd';
import Map from "../../assets/map.svg"
import Logo from "../../assets/logo.svg"
import Menu from "../../assets/menu.svg"
import Search from "../../assets/search.svg"
import Cloase from "../../assets/cloase.svg"
import Savat from "../../assets/savat.svg"
import Odam from "../../assets/odam.svg"
import Yurak from "../../assets/yurak.svg"
import Olov from "../../assets/olov.svg"
import List from "../../assets/list.svg"
const items = [
    {
        label: 'Tashkent',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'Andijon',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: 'Fargona',
        key: '3',
        icon: <UserOutlined />,
    },
    {
        label: 'Namangan',
        key: '4',
        icon: <UserOutlined />,
    },
    {
        label: 'Samarqand',
        key: '5',
        icon: <UserOutlined />,
    },
    {
        label: 'Xorazm',
        key: '6',
        icon: <UserOutlined />,
    },
    {
        label: 'Sirdaryo',
        key: '7',
        icon: <UserOutlined />,
    },
    {
        label: 'Qashqadaryo',
        key: '8',
        icon: <UserOutlined />,
    },
    {
        label: 'Buxoro',
        key: '9',
        icon: <UserOutlined />,
    },
    {
        label: 'Navoiy',
        key: '10',
        icon: <UserOutlined />,
    },]
const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};
const menuProps = {
    items,
    onClick: handleMenuClick,
};
function Header() {
    return (
        <>

            <div className="header">
                <div className="header-top">
                    <div className="container header-top">
                        <Space wrap>
                            <Dropdown menu={menuProps}>
                                <Button className="btn-1">
                                    <Space>
                                        <img src={Local} alt="" /> Loc:
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </Space>

                        <ul className="list">
                            <li>Наши магазины</li>
                            <li className="yuridik">Юридическим лицам</li>
                            <li>Покупка в рассрочку</li>
                            <li>Покупка в рассрочку</li>
                            <li>Способы оплаты</li>
                        </ul>

                        <div className="link">
                            <div className="box">
                                <p>Контакт центр :</p>
                                <a href="tell:+99871 209 99 44">+99871 209 99 44</a>
                            </div>
                            <div className="box-1">
                                <img src={Map} alt="" />
                                <select className="btn-2">
                                    <option value="en">En</option>
                                    <option value="ru">Ru</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-offer container">
                    <img src={Logo} alt="a" />
                    <button className="btn">
                        <img src={Menu} alt="" />
                        <p>Каталог</p>
                    </button>
                    <div className="boxer">
                        <img src={Search} alt="#" />
                        <input type="text" placeholder="Поиск" />
                        <img src={Cloase} alt="" />
                    </div>
                    <ul className="list-1">
                        <li>
                            <img src={Odam} alt="" />
                            <p>Вход</p>
                        </li>
                        <li>
                            <img src={Yurak} alt="" />
                            <p>Избранное</p>
                        </li>
                        <li>
                            <img src={Savat} alt="" />
                            <p>Корзина</p>
                        </li>
                    </ul>

                </div>
                <ul className="header-owner container">
                    <li className="item-1">
                        <img src={Olov} alt="" />
                        <p>Акции</p>
                    </li>
                    <li className="item-2">Mazzza narx!</li>
                    <li>
                        <img src={List} alt="" />
                    </li>
                    <li>КОНДИЦИОНЕРЫ</li>
                    <li>Смартфоны</li>
                    <li>ХОЛОДИЛЬНИКИ</li>
                    <li>ПЫЛЕСОСЫ</li>
                    <li>НОУТБУКИ</li>
                    <li>ТЕЛЕВИЗОРЫ</li>
                    <li>Все категории</li>
                </ul>
            </div>

        </>
    )
}

export default Header