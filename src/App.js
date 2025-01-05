import './AppDesktop.css';
import './AppMobile.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignInOut from './pc/SignInOut';
import Orders from './pc/Orders';
import Catalog from './pc/Catalog';
import {MobileHeader, Menu} from './mobile/Header';



function Header({ showCatalog, showOrders, showSignInOut, isDisabled, showHome }) {
    const logoStyle1 = {
        color: '#FFFFFF',
        textShadow: '1px 1px 0 #000000, -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000',
    };
    const logoStyle2 = {
        color: '#000000',
        textShadow: '1px 1px 0 #FFFFFF, -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF',
    };

    return (
        <div className="container">
            <div className="header_menu">
                <div className="text">*ZENLESS ZONE ZERO*</div>
                <div className="container_control">
                    <button className="control" onClick={showCatalog} disabled={isDisabled}>
                        <img src="/material/pc/catalog.png" alt="Catalog" />
                        <span className="text_control">Каталог</span>
                    </button>
                    <button className="control" onClick={showOrders} disabled={isDisabled}>
                        <img src="/material/pc/orders.png" alt="Orders" />
                        <span className="text_control">Заказы</span>
                    </button>
                    <button className="control" onClick={showSignInOut} disabled={isDisabled}>
                        <span className="text_enter">Войти</span>
                        <img style={{ marginTop: '1vh' }} src="/material/pc/out.png" alt="Sign/Out" />
                    </button>
                </div>
            </div>
            <div className="header_logo">
                <button className="home" onClick={showHome}>
                    <span className="logo" style={logoStyle1}>Archcont</span>
                    <span className="logo" style={logoStyle2}>Team</span>
                </button>
            </div>
        </div>
    );
}

function App() {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isOrdersVisible, setOrdersVisible] = useState(false);
    const [isCatalogVisible, setCatalogVisible] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    const [isBlurred, setBlurred] = useState(false);
    const [isHomeVisible, setHomeVisible] = useState(true);
    const [isSignInVisible, setSignInVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const showHome = () => {
        setHomeVisible(true);
        setSignInVisible(false);
        setOrdersVisible(false);
        setCatalogVisible(false);
    };

    const showMenu = () => {
        setDisabled(true);
        setMenuVisible(true);
        setBlurred(true);
        setSignInVisible(false);
    };

    const hideMenu = () => {
        setMenuVisible(false);
        setDisabled(false);
        setBlurred(false);
    };

    const showCatalog = () => {
        setCatalogVisible(true);
        setHomeVisible(false);
        setSignInVisible(false);
    };

    const hideCatalog = () => {
        setCatalogVisible(false);
        setHomeVisible(true);
    };

    const showOrders = () => {
        setDisabled(true);
        setOrdersVisible(true);
        setBlurred(true);
        setSignInVisible(false);
    };

    const hideOrders = () => {
        setOrdersVisible(false);
        setDisabled(false);
        setBlurred(false);
    };

    const showSignInOut = () => {
        setDisabled(true);
        setBlurred(true);
        setSignInVisible(true);
        setOrdersVisible(false);
    };

    const hideSignInOut = () => {
        setDisabled(false);
        setBlurred(false);
        setSignInVisible(false);
    };


    return (
        <Router>
                {isMobile ? (
                    <MobileHeader
                        showMenu={showMenu}
                        isBlurred={isBlurred}
                        showHome={showHome}
                    />
                ) : (
                    <Header
                        showCatalog={showCatalog}
                        showOrders={showOrders}
                        showSignInOut={showSignInOut}
                        showHome={showHome}
                        isDisabled={isDisabled}
                    />
                )}

            <Home isHomeVisible={isHomeVisible} isMobile={isMobile} isBlurred={isBlurred} showCatalog={showCatalog} isDisabled={isDisabled}/>
            {isMenuVisible && <Menu hideMenu={hideMenu} showOrders={showOrders} showSignInOut={showSignInOut} showCatalog={showCatalog}/>}
            {isOrdersVisible && <Orders hideOrders={hideOrders}/>}
            {isCatalogVisible && <Catalog hideCatalog={hideCatalog} isMobile={isMobile} isBlurred={isBlurred}/>}
            {isSignInVisible && <SignInOut hideSignInOut={hideSignInOut} />}
        </Router>
    );
}



function Home({ isBlurred, isHomeVisible, showCatalog, isMobile, isDisabled }) {
    if (!isHomeVisible) {
        return null;
    }

    const MobileHome = ({ showCatalog, isDisabled }) => {
        return (
            <div className="container_homeMobile">
                <div className="container_descriptionMobile">
                    <button className="market" onClick={showCatalog} disabled={isDisabled}>
                        <img src="/material/mobile/market.png" alt="Market" />
                    </button>
                    <span className="text_menuMobile">Донатов и пополнений</span>
                </div>

                <div className="container_interactive">

                    <div className="interactive">
                        <button className="catalog" onClick={showCatalog} disabled={isDisabled}>
                            <img className="catalog" src="/material/pc/bgcatalog.png" alt="Catalog"></img>
                            <span className="catalog-text">Каталог</span>
                        </button>

                        <div className="interactive_button">
                            <button className="interactive_ui">Новости</button>
                            <button className="interactive_ui">О нас</button>
                        </div>
                        <div className="interactive_button">
                            <button className="interactive_ui">Где купить?</button>
                            <button className="interactive_ui">FAQ</button>
                        </div>

                        <div className="interactive_button">
                            <button className="text_button" style={{color: '#4643d8'}}>Поддержка</button>
                            <button className="text_button">Соглашение о конфиденциальности</button>
                        </div>
                    </div>
                </div>
                <div className="text_descriptionMobile">©️ 2024 Archcont Team. Все права защищены.</div>
            </div>
        );
    };


    const DesktopHome = ({ showCatalog, isDisabled }) => {
        return (
            <div className="container_home">
                <div className="container_description">
                    <button className="market" onClick={showCatalog} disabled={isDisabled}>
                        <img src="/material/pc/market.png" alt="Market" />
                    </button>
                    <span className="text_menu">Донатов и пополнений</span>
                </div>

                <div className="container_interactive">
                    <div className="interactive">
                        <img className="img_main" src="/material/pc/main.png" alt="Main"/>
                        <div className="interactive_button">
                            <p className="text_description">©️ 2024 Archcont Team. Все права защищены.</p>
                        </div>
                    </div>

                    <div className="interactive">
                        <button className="catalog" onClick={showCatalog} disabled={isDisabled}>
                            <img className="catalog" src="/material/pc/bgcatalog.png" alt="Catalog"></img>
                            <span className="catalog-text">Каталог</span>
                        </button>

                        <div className="interactive_button">
                            <button className="interactive_ui">Новости</button>
                            <button className="interactive_ui">О нас</button>
                        </div>
                        <div className="interactive_button">
                            <button className="interactive_ui">Где купить?</button>
                            <button className="interactive_ui">FAQ</button>
                        </div>

                        <div className="interactive_button">
                            <button className="text_button" style={{color: '#4643d8'}}>Поддержка</button>
                            <button className="text_button">Соглашение о конфиденциальности</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={`${isBlurred ? 'blur' : 'unblur'}`}>
            {isMobile ? (
                <MobileHome showCatalog={showCatalog} isDisabled={isDisabled}/>
            ) : (
                <DesktopHome showCatalog={showCatalog} isDisabled={isDisabled}/>
            )}
        </div>
    );
}


export default App;

