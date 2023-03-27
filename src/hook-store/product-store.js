import { initStore } from "./store";

const configureProductStore = () => {
  console.log("configureProductStore called");
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      // 좋아요가 눌러진 상품의 인덱스를 찾는다.
      const productIndex = currentState.products.findIndex(
        (product) => product.id === productId
      );
      // 좋아요가 눌러진 상품의 좋아요 상태를 반전시킨다.
      const newFavStatus = !currentState.products[productIndex].isFavorite;
      // 상품 목록을 업데이트한다.
      const updatedProducts = [...currentState.products];
      updatedProducts[productIndex] = {
        ...currentState.products[productIndex],
        isFavorite: newFavStatus,
      };
      // 좋아요의 새로운 상태가 반영된 상품 목록을 반환한다.
      return { products: updatedProducts };
    },
  };
  // 초깃값을 설정한다.
  initStore(actions, {
    products: [
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
      {
        id: "p5",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p6",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p7",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
      {
        id: "p8",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
    ],
  });
};

export default configureProductStore;
