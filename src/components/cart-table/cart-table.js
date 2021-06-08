import React from 'react';
import {connect} from 'react-redux';
import './_cart-table.scss';

const CartTable = ({items, onDelete}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, url, price, id} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => onDelete(id)} className="cart__close">&times;</div>
                            </div>
                        );
                    })
                }

            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    };
};

const mapDispatchToProps = () => {
    return {
        onDelete(id) {
            console.log('удалили ', id);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);