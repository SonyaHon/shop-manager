export default (state = {
    isMenuOpened: false,
    menuType: "none"
}, action) => {
	
	let menu = state;

	if(action.type === "TOGGLE_MENU")
		menu.isMenuOpened = action.payload;
	
	if(action.type === "SET_MENU_TYPE")
		menu.menuType = action.payload;
	
	if(action.type === "TOGGLE_N_SET_MENU") {
		menu.isMenuOpened = action.payload.opened;
		menu.menuType = action.payload.type;
	}

	return menu;
}