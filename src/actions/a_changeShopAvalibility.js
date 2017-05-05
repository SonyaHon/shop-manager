export default (shopId) => {
    return {
        type: "CHANGE_SHOP_AVALIBILITY",
        payload: {
            id: shopId
        }
    }
}