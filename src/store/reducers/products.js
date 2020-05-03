const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      console.log(action.payload, 'invoked the reducer');
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default products;
