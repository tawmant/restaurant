import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFromCart, dataСlean} from '../../actions';
import WithRestoService from '../hoc';

import './_cart-table.scss';

const CartTable = ({RestoService}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    const [title, setTitle] = useState('true');

    if(items.length === 0){
        return <div className="cart__title">{title ? 'Ваша корзина пуста :(' : 'Спасибо за заказ!'}</div>;
    }

    const send = (items) => {
        RestoService.setOrder(generateOrder(items));
        dispatch(dataСlean());
        setTitle(!title);
    }

    return (
        <>
            <div className='cart__title'>Ваш заказ:</div>
            <div className='cart__list'>
                {
                    items.map(item => {
                        const {title, url, price, qtty, id} = item;
                        return (
                            <div key={id} className='cart__item'>
                                <div className='num-orders'>{qtty}</div>
                                <img src={url} className='cart__item-img' alt={title}></img>
                                <div className='cart__item-title'>{title}</div>
                                <div className='cart__item-price'>{price * qtty}$</div>
                                <div onClick={() => dispatch(deleteFromCart(id))} className='cart__close'>&times;</div>
                            </div>
                        );
                    })
                }
            </div>
            <button onClick={() => send(items)} className='order'>Оформить заказ</button>
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            qtty: item.qtty
        }
    })
    return newOrder;
}

export default WithRestoService()(CartTable);