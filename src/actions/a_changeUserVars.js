export default (varType, val) => {
    return {
        type: 'USER_PROPS_CHANGED',
        payload: {
            prop: varType,
            value: val
        }
    }
}