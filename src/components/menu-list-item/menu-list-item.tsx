/* eslint-disable react/prop-types */
import React from 'react';
import './_menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}: any) => {
    const {title, price, url, category} = menuItem;

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button onClick={onAddToCart} className="btn menu__btn">Add to cart</button>
        </li>
    );
};

export default MenuListItem;