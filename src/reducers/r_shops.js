export default (state =  [
    {
        id: 0,
        name: "Московский",
        price: 100,
        story: "Небольшой магазинчик, расположенный на окраине города. В нем будут популярны зелья, инструменты для работы по хозяйству и оружие. " +
        "Не стоит завышать в нем цены, так как денег у местных не очень много.",
        peopleLevel: 0,
        isBought: true
    },
    {
        id: 1,
        name: "Продуктовый",
        price: 200,
        story: "Давным давно в далекой далекой галактике...",
        peopleLevel: 0,
        isBought: true
    },
    {
        id: 2,
        name: "Хозтовары",
        price: 300,
        story: "Давным давно в далекой далекой галактике...",
        peopleLevel: 0,
        isBought: true
    },
    {
        id: 3,
        name: "Все для дома",
        price: 400,
        story: "Давным давно в далекой далекой галактике...",
        peopleLevel: 0,
        isBought: true
    },
    {
        id: 4,
        name: "7 Континент",
        price: 500,
        story: "Давным давно в далекой далекой галактике...",
        peopleLevel: 0,
        isBought: true
    },
    {
        id: 5,
        name: "Перекресток",
        price: 600,
        story: "Давным давно в далекой далекой галактике...",
        peopleLevel: 0,
        isBought: true
    },
], action) => {

	let shops = [];
	for(let i = 0; i < state.length; i++) {
		shops.push(state[i]);
	}

	if(action.type === "CHANGE_SHOP_AVALIBILITY") {
		for(let i = 0; i < shops.length; i++) {
			if(shops[i].id == action.payload.id) {
				shops[i].isBought = false;
			}
		}
	}

	return shops;
}