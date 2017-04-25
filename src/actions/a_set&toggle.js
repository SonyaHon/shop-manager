export default (val1, val2) => {
	return {
		type: "TOGGLE_N_SET_MENU",
		payload: {
			opened: val1,
			type: val2
		}
	}
}
