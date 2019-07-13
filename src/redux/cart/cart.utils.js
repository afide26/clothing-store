export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Use find to check if the item to be added is already in the cartItems array
  const existingItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
