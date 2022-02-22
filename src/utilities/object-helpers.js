export const updateObjectInArray = (items, objPropName, itemId, newObj) => {
    return items.map((item) => {
        if (item[objPropName] == itemId) {
            return { ...item, ...newObj };
        }
        return item;
    })
}