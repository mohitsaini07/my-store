const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    //Tackle the existing product
    let sameProduct = state.cart.find((curItem) => {
      return curItem.id == id + color;
    });

    if (sameProduct) {
      let updatedItem = state.cart.map((curItem) => {
        if (curItem.id == id + color) {
          let newAmount = curItem.amount + amount;
          if (newAmount >= curItem.max) {
            newAmount = curItem.max;
          }
          return {
            ...curItem,
            amount: newAmount,
          };
        } else {
          return curItem;
        }
      });
      return {
        ...state,
        cart: updatedItem,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  //Cart amount decrement or increment
  if (action.type === "SET_DECREASE") {
    let currentProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decAmount = curItem.amount - 1;

        if (decAmount <= 1) {
          decAmount = 1;
        }

        return {
          ...curItem,
          amount: decAmount,
        };
      } else {
        return curItem;
      }
    });
    return {
      ...state,
      cart: currentProduct,
    };
  }

  if (action.type === "SET_INCREASE") {
    let currentProduct = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let incAmount = curItem.amount + 1;

        if (incAmount >= curItem.max) {
          incAmount = curItem.max;
        }

        return {
          ...curItem,
          amount: incAmount,
        };
      } else {
        return curItem;
      }
    });
    return {
      ...state,
      cart: currentProduct,
    };
  }

  // Remove particular item
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "TOTAL_PRICE_ITEM") {
    let { totalItem, totalPrice } = state.cart.reduce(
      (acc, curItem) => {
        let { amount, price } = curItem;
        acc.totalItem += amount;
        acc.totalPrice += price * amount;

        return acc;
      },
      {
        totalItem: 0,
        totalPrice: 0,
      }
    );
    return {
      ...state,
      totalItem,
      totalPrice,
    };
  }

  return state;
};

export default cartReducer;
