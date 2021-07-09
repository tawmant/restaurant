import React, { useEffect, useContext } from 'react';
import MenuListItem from '../menu-list-item';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import {
	menuLoaded,
	menuRequested,
	menuError,
	addedToCart,
} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';
import RestoServiceContext from '../resto-service-context';

import './_menu-list.scss';

const MenuList = () => {
	const state = useSelector((state: RootStateOrAny) => state);
	const dispatch = useDispatch();
	const RestoService = useContext(RestoServiceContext);

	useEffect(() => {
		dispatch(menuRequested());

		RestoService.getMenuItems()
			.then((res: object) => dispatch(menuLoaded(res)))
			.catch(() => dispatch(menuError()));
	}, []);

	const { menu, loading, error } = state;

	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <Error />;
	}

	const items = menu.map((menuItem: any) => {
		return (
			<MenuListItem
				key={menuItem.id}
				menuItem={menuItem}
				onAddToCart={() => dispatch(addedToCart(menuItem.id))}
			/>
		);
	});

	return <View items={items} />;
};

const View = ({ items }: any) => {
	return <ul className='menu__list'>{items}</ul>;
};

export default MenuList;
