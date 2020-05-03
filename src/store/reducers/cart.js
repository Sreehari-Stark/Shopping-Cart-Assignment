const cartItems = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      console.log(action.payload, 'action payload');

      const newArr = [...state];
      let isNew = true;
      const arr = newArr.map((item) => {
        if (item.name === action.payload.name) {
          isNew = false;
          return { ...item, quantity: ++item.quantity };
        }
        return item;
      });

      if (isNew) {
        return [...state, action.payload];
      } else {
        return arr;
      }

    default:
      return state;
  }
};

export default cartItems;
