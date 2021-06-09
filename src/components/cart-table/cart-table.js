import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFromCart} from '../../actions';
import './_cart-table.scss';

const CartTable = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    return (
        <>
            <div className='cart__title'>Ваш заказ:</div>
            <div className='cart__list'>
                {
                    items.map(item => {
                        const {title, url, price, id} = item;
                        return (
                            <div key={id} className='cart__item'>
                        <img src={url} className='cart__item-img' alt={title}></img>
                                <div className='cart__item-title'>{title}</div>
                                <div className='cart__item-price'>{price}$</div>
                                <div onClick={() => dispatch(deleteFromCart(id))} className='cart__close'>&times;</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default CartTable;