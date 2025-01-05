import React, {useEffect, useState} from "react";

function MobileHeader({showMenu, isBlurred, showHome}) {
    const logoStyle1 = {
        color: '#FFFFFF',
        textShadow: '1px 1px 0 #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000',
    };
    const logoStyle2 = {
        color: '#000000',
        textShadow: '1px 1px 0 #FFFFFF, -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF',
    };

    return (
        <div className={`${isBlurred ? 'blur' : 'unblur'}`}>
            <div className="containerMobile">
                <div className="header_menuMobile">
                    <img style={{width: '100%', height: 'auto'}} src="/material/mobile/main.png" alt="main"></img>
                    <button className="menuMobile" style={{position: 'absolute', top: '1px', right: '5px'}} onClick={showMenu}>=</button>
                </div>

                <div className="header_logoMobile">
                    <button className="home" onClick={showHome}>
                        <span className="logoMobile" style={logoStyle1}>Archcont</span>
                        <span className="logoMobile" style={logoStyle2}>Team</span>
                    </button>
                </div>
            </div>
        </div>
    );
}


function Menu({ hideMenu, showOrders, showSignInOut, showCatalog }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => {
            setIsVisible(false);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(hideMenu, 300);
    };

    const handleShowOrders = () => {
        hideMenu();
        showOrders();
    };

    const handleShowSignInOut = () => {
        hideMenu();
        showSignInOut();
    };

    const handleShowCatalog = () => {
        hideMenu();
        showCatalog();
    };

    return (
        <div className={`container_menu ${isVisible ? 'visible' : 'hidden'}`}>
            <button className="close_buttonMobile" onClick={handleClose}>X</button>

            <button className="menu_items" onClick={handleShowSignInOut}>
                <img src="/material/mobile/out.png" alt="out"></img>
            </button>
            <button className="menu_items" onClick={handleShowCatalog}>Каталог</button>
            <button className="menu_items" onClick={handleShowOrders}>Заказы</button>
            <button className="menu_items">Новости</button>
            <button className="menu_items">О нас</button>
        </div>
    );
}


export { MobileHeader, Menu };