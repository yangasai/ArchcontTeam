import React, {useEffect, useState} from "react";

function Catalog({ hideCatalog, isMobile, isBlurred }) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeButton, setActiveButton] = useState('all');

    useEffect(() => {
        setIsVisible(true);
        return () => {
            setIsVisible(false);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(hideCatalog, 300);
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };


    // Константа для отображения кнопок
    const renderItems = () => {
        return (
            <>
                {activeButton === 'all' ? (
                    <>
                        <div className="interactive_button">
                            <button className="price">
                                <img className="img_item" src="/material/pc/sub.png" alt="Sub" />
                                <span className="text_desc">Интернот-подписка</span>
                                <span className="h_desc">Интернот-подписка</span>
                                <span className="text_price">414₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/pc/60.png" alt="60" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">60</span>
                                <span className="text_price">79₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/pc/300.png" alt="300" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">300</span>
                                <span className="text_price">435₽</span>
                            </button>
                        </div>

                        <div className="interactive_button">
                            <button className="price" style={{ borderRadius: '0 0 0 35px' }}>
                                <img className="img_item" src="/material/pc/980.png" alt="980" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">980</span>
                                <span className="text_price">1310₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/pc/1980.png" alt="1980" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">1980</span>
                                <span className="text_price">2699₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/pc/3280.png" alt="3280" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">3280</span>
                                <span className="text_price">4370₽</span>
                            </button>
                            <button className="price" style={{ borderRadius: '0 0 35px 0' }}>
                                <img className="img_item" src="/material/pc/6480.png" alt="6480" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">6480</span>
                                <span className="text_price">8599₽</span>
                            </button>
                        </div>
                    </>

                ) : activeButton === 'subscription' ? (
                    <>
                        <div className="interactive_button">
                            <button className="price">
                                <img className="img_item" src="/material/pc/sub.png" alt="Sub" />
                                <span className="text_desc">Интернот-подписка</span>
                                <span className="h_desc">Интернот-подписка</span>
                                <span className="text_price">414₽</span>
                            </button>

                            <button className="none">
                                <img src="/material/pc/none.png" alt="Sub" />
                            </button>
                            <button className="none">
                                <img src="/material/pc/none.png" alt="Sub" />
                            </button>
                        </div>
                        <div className="interactive_button">
                            <button className="none">
                                <img src="/material/pc/none.png" alt="Sub" />
                            </button>
                        </div>
                    </>
                ) : activeButton === 'monochromes' ? (
                    <>
                        <div className="interactive_button">
                            <button className="price">
                                <img className="img_item" src="/material/pc/60.png" alt="60" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">60</span>
                                <span className="text_price">79₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/pc/300.png" alt="300" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">300</span>
                                <span className="text_price">435₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/pc/980.png" alt="980" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">980</span>
                                <span className="text_price">1310₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/pc/1980.png" alt="1980" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">1980</span>
                                <span className="text_price">2699₽</span>
                            </button>
                        </div>

                        <div className="interactive_button">
                            <button className="price" style={{ borderRadius: '0 0 0 35px' }}>
                                <img className="img_item" src="/material/pc/3280.png" alt="3280" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">3280</span>
                                <span className="text_price">4370₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/pc/6480.png" alt="6480" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">6480</span>
                                <span className="text_price">8599₽</span>
                            </button>
                        </div>
                    </>
                ):null}
            </>
        );
    };


    const renderItemsMobile = () => {
        return (
            <>
                {activeButton === 'all' ? (
                    <>
                        <div className="interactive_button">
                            <button className="price">
                                <img className="img_item" src="/material/mobile/sub.png" alt="Sub" />
                                <span className="text_desc">Интернот-подписка</span>
                                <span className="h_desc">Интернот-подписка</span>
                                <span className="text_price">414₽</span>
                            </button>
                        </div>

                        <div className="interactive_button">
                            <button className="price">
                                <img className="img_item" src="/material/mobile/60.png" alt="60" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">60</span>
                                <span className="text_price">79₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/300.png" alt="300" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">300</span>
                                <span className="text_price">435₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/980.png" alt="980" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">980</span>
                                <span className="text_price">1310₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/1980.png" alt="1980" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">1980</span>
                                <span className="text_price">2699₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/3280.png" alt="3280" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">3280</span>
                                <span className="text_price">4370₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/6480.png" alt="6480" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">6480</span>
                                <span className="text_price">8599₽</span>
                            </button>
                        </div>
                    </>

                ) : activeButton === 'subscription' ? (
                    <>
                        <div className="interactive_button">
                            <button className="price">
                                <img className="img_item" src="/material/mobile/sub.png" alt="Sub" />
                                <span className="text_desc">Интернот-подписка</span>
                                <span className="h_desc">Интернот-подписка</span>
                                <span className="text_price">414₽</span>
                            </button>

                            <button className="none">
                                <img src="/material/mobile/none.png" alt="Sub" />
                            </button>
                            <button className="none">
                                <img src="/material/mobile/none.png" alt="Sub" />
                            </button>
                            <button className="none">
                                <img src="/material/mobile/none.png" alt="Sub" />
                            </button>
                            <button className="none">
                                <img src="/material/mobile/none.png" alt="Sub" />
                            </button>
                            <button className="none">
                                <img src="/material/mobile/none.png" alt="Sub" />
                            </button>
                            <button className="none">
                                <img src="/material/mobile/none.png" alt="Sub" />
                            </button>
                        </div>
                    </>
                ) : activeButton === 'monochromes' ? (
                    <>
                        <div className="interactive_button">
                            <button className="price">
                                <img className="img_item" src="/material/mobile/60.png" alt="60" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">60</span>
                                <span className="text_price">79₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/300.png" alt="300" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">300</span>
                                <span className="text_price">435₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/980.png" alt="980" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">980</span>
                                <span className="text_price">1310₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/1980.png" alt="1980" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">1980</span>
                                <span className="text_price">2699₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/3280.png" alt="3280" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">3280</span>
                                <span className="text_price">4370₽</span>
                            </button>
                            <button className="price">
                                <img className="img_item" src="/material/mobile/6480.png" alt="6480" />
                                <span className="text_desc">Монохромы</span>
                                <span className="h_desc">6480</span>
                                <span className="text_price">8599₽</span>
                            </button>

                            <button className="none">
                                <img src="/material/mobile/nonesub.png" alt="Sub" />
                            </button>
                        </div>
                    </>
                ):null}
            </>
        );
    };


    const MobileCatalog = () => {
        return (
            <>
                <div className="container_interactive">
                        <div className="container_marketItem">
                            <button className={`categotyMobile ${activeButton === 'all' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('all')}
                            >Все товары 7</button>
                            <button className={`categotyMobile ${activeButton === 'subscription' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('subscription')}
                            >Интернот-подписка 1</button>
                            <button className={`categotyMobile ${activeButton === 'monochromes' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('monochromes')}
                            >Монохромы 6</button>
                        </div>

                        <div className="interactive">
                            {renderItemsMobile()}
                        </div>

                        <button className="BuyMobile">
                            Корзина
                            <img className="buy_iconMobile" src="/material/mobile/too.png" alt="too" />
                            <img className="buy_iconMobile" src="/material/mobile/buy.png" alt="Buy" />
                        </button>
                </div>
            </>
        );
    };


    const DesktopCatalog = () => {
        return (
            <>
                <div className="container_description">
                    <p className="text_market">*zenless zone zero*</p>
                    <button className="RollUp" onClick={handleClose}>Свернуть</button>
                </div>
                <div className="container_interactive">
                    <div className="container_market">
                        <div className="container_marketItem">
                            <button className={`categoty ${activeButton === 'all' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('all')}
                            >Все товары 7</button>
                            <button className={`categoty ${activeButton === 'subscription' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('subscription')}
                            >Интернот-подписка 1</button>
                            <button className={`categoty ${activeButton === 'monochromes' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('monochromes')}
                            >Монохромы 6</button>
                        </div>

                        <div className="interactive">
                            {renderItems()}
                        </div>
                    </div>
                    <div className="interactive">
                        <img className="img_baner" src="/material/pc/baner.png" alt="Baner"/>
                        <button className="Buy">
                            Корзина
                            <img className="buy_icon" src="/material/pc/buy.png" alt="Buy" />
                        </button>
                    </div>
                </div>
            </>
        );
    };


    return (
        <div className={`${isBlurred ? 'blur' : 'unblur'}`}>
            <div className={`container_catalog ${isVisible ? 'visible' : 'hidden'}`}>
                {isMobile ? (
                    <MobileCatalog/>
                ) : (
                    <DesktopCatalog/>
                )}
            </div>
        </div>
    );
}


export default Catalog;