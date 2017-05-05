export default (state = {
    name: "player",
    money: 10000,
    reputation: 0,
    tax: 0,
    stock_size: 400,
    stock_stored: 0,
    stored_items: [],
    owned_shops: []
}, action) => {

    let player = state;

	if(action.type === "USER_PROPS_CHANGED") {
		player[action.payload.prop] = action.payload.value;
	}

	return player;
}