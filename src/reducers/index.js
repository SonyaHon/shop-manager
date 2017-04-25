import {combineReducers} from 'redux';

import r_user from './r_user';
import r_shops from './r_shops';
import r_menu from './r_menu';
import r_items from './r_items';

export default combineReducers({
	user: r_user,
	shops: r_shops,
	menu: r_menu,
	allItems: r_items
});
