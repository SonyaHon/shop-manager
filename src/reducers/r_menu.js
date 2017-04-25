export default (state = null, action) => {
	
	var menu = {
		isMenuOpened: false,
		menuType: "none"
	}
	
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