import React, {useEffect, useState} from "react";

function Orders({ hideOrders}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => {
            setIsVisible(false);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(hideOrders, 300);
    };

    return (
        <div className={`container_orders ${isVisible ? 'visible' : 'hidden'}`}>
            <button className="close_button" onClick={handleClose}>X</button>
            <div className="h_order">История заказов</div>
            <div className="text_order">Здесь пока ничего нет...</div>
        </div>
    );
}

export default Orders;