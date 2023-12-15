import { createSlice } from "@reduxjs/toolkit";

let ClothingAccessoriesSectionData = [
  {
    id: 1,
    src: "/src/assets/HomePageImages/ClothingAccessoriesSection/1.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ClothingAccessoriesSection/1.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/2.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/3.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/4.png",
    ],
  },
  {
    id: 2,
    src: "/src/assets/HomePageImages/ClothingAccessoriesSection/2.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ClothingAccessoriesSection/1.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/2.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/3.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/4.png",
    ],
  },
  {
    id: 3,
    src: "/src/assets/HomePageImages/ClothingAccessoriesSection/3.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ClothingAccessoriesSection/1.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/2.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/3.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/4.png",
    ],
  },
  {
    id: 4,
    src: "/src/assets/HomePageImages/ClothingAccessoriesSection/4.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ClothingAccessoriesSection/1.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/2.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/3.png",
      "/src/assets/HomePageImages/ClothingAccessoriesSection/4.png",
    ],
  },
];

let ActionFiguresSectionData = [
  {
    id: 1,
    src: "/src/assets/HomePageImages/ActionFiguresSection/1.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ActionFiguresSection/1.png",
      "/src/assets/HomePageImages/ActionFiguresSection/2.png",
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
      "/src/assets/HomePageImages/ActionFiguresSection/4.png",
    ],
  },
  {
    id: 2,
    src: "/src/assets/HomePageImages/ActionFiguresSection/2.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ActionFiguresSection/1.png",
      "/src/assets/HomePageImages/ActionFiguresSection/2.png",
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
      "/src/assets/HomePageImages/ActionFiguresSection/4.png",
    ],
  },
  {
    id: 3,
    src: "/src/assets/HomePageImages/ActionFiguresSection/3.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ActionFiguresSection/1.png",
      "/src/assets/HomePageImages/ActionFiguresSection/2.png",
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
      "/src/assets/HomePageImages/ActionFiguresSection/4.png",
    ],
  },
  {
    id: 4,
    src: "/src/assets/HomePageImages/ActionFiguresSection/4.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ActionFiguresSection/2.png",
      "/src/assets/HomePageImages/ActionFiguresSection/1.png",
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
      "/src/assets/HomePageImages/ActionFiguresSection/4.png",
    ],
  },
  {
    id: 5,
    src: "/src/assets/HomePageImages/ActionFiguresSection/5.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ActionFiguresSection/1.png",
      "/src/assets/HomePageImages/ActionFiguresSection/2.png",
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
      "/src/assets/HomePageImages/ActionFiguresSection/4.png",
    ],
  },
  {
    id: 6,
    src: "/src/assets/HomePageImages/ActionFiguresSection/6.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ActionFiguresSection/2.png",
      "/src/assets/HomePageImages/ActionFiguresSection/1.png",
      "/src/assets/HomePageImages/ActionFiguresSection/4.png",
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
    ],
  },
  {
    id: 7,
    src: "/src/assets/HomePageImages/ActionFiguresSection/7.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
      "/src/assets/HomePageImages/ActionFiguresSection/2.png",
      "/src/assets/HomePageImages/ActionFiguresSection/4.png",
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
    ],
  },
  {
    id: 8,
    src: "/src/assets/HomePageImages/ActionFiguresSection/8.png",
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      "/src/assets/HomePageImages/ActionFiguresSection/1.png",
      "/src/assets/HomePageImages/ActionFiguresSection/2.png",
      "/src/assets/HomePageImages/ActionFiguresSection/3.png",
      "/src/assets/HomePageImages/ActionFiguresSection/4.png",
    ],
  },
];

let XboxGameData = [
  {
    id: 1,
    src: "/src/assets/HomePageImages/XboxGamesImages/4.jpeg",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/XboxGamesImages/1.jpeg",
      "/src/assets/HomePageImages/XboxGamesImages/2.jpg",
      "/src/assets/HomePageImages/XboxGamesImages/3.jpeg",
      "/src/assets/HomePageImages/XboxGamesImages/4.jpeg",
    ],
  },
  {
    id: 2,
    src: "/src/assets/HomePageImages/XboxGamesImages/3.jpeg",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/XboxGamesImages/1.jpeg",
      "/src/assets/HomePageImages/XboxGamesImages/2.jpg",
      "/src/assets/HomePageImages/XboxGamesImages/3.jpeg",
      "/src/assets/HomePageImages/XboxGamesImages/4.jpeg",
    ],
  },
  {
    id: 3,
    src: "/src/assets/HomePageImages/XboxGamesImages/1.jpeg",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/XboxGamesImages/1.jpeg",
      "/src/assets/HomePageImages/XboxGamesImages/2.jpg",
      "/src/assets/HomePageImages/XboxGamesImages/3.jpeg",
      "/src/assets/HomePageImages/XboxGamesImages/4.jpeg",
    ],
  },
  {
    id: 4,
    src: "/src/assets/HomePageImages/XboxGamesImages/2.jpg",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/XboxGamesImages/4.jpeg",
      "/src/assets/HomePageImages/XboxGamesImages/1.jpeg",
      "/src/assets/HomePageImages/XboxGamesImages/2.jpg",
      "/src/assets/HomePageImages/XboxGamesImages/3.jpeg",
    ],
  },
];

let PCGamesImages = [
  {
    id: 1,
    src: "/src/assets/HomePageImages/PCGamesImages/1.webp",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/PCGamesImages/2.jpg",
      "/src/assets/HomePageImages/PCGamesImages/1.webp",
      "/src/assets/HomePageImages/PCGamesImages/3.webp",
      "/src/assets/HomePageImages/PCGamesImages/4.jpg",
    ],
  },
  {
    id: 2,
    src: "/src/assets/HomePageImages/PCGamesImages/2.jpg",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/PCGamesImages/2.jpg",
      "/src/assets/HomePageImages/PCGamesImages/1.webp",
      "/src/assets/HomePageImages/PCGamesImages/3.webp",
      "/src/assets/HomePageImages/PCGamesImages/4.jpg",
    ],
  },
  {
    id: 3,
    src: "/src/assets/HomePageImages/PCGamesImages/3.webp",

    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/PCGamesImages/2.jpg",
      "/src/assets/HomePageImages/PCGamesImages/1.webp",
      "/src/assets/HomePageImages/PCGamesImages/3.webp",
      "/src/assets/HomePageImages/PCGamesImages/4.jpg",
    ],
  },
  {
    id: 4,
    src: "/src/assets/HomePageImages/PCGamesImages/4.jpg",

    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/PCGamesImages/2.jpg",
      "/src/assets/HomePageImages/PCGamesImages/1.webp",
      "/src/assets/HomePageImages/PCGamesImages/3.webp",
      "/src/assets/HomePageImages/PCGamesImages/4.jpg",
    ],
  },
  {
    id: 5,
    src: "/src/assets/HomePageImages/PCGamesImages/5.jpg",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/PCGamesImages/2.jpg",
      "/src/assets/HomePageImages/PCGamesImages/1.webp",
      "/src/assets/HomePageImages/PCGamesImages/3.webp",
      "/src/assets/HomePageImages/PCGamesImages/4.jpg",
    ],
  },
  {
    id: 6,
    src: "/src/assets/HomePageImages/PCGamesImages/6.webp",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/PCGamesImages/2.jpg",
      "/src/assets/HomePageImages/PCGamesImages/1.webp",
      "/src/assets/HomePageImages/PCGamesImages/3.webp",
      "/src/assets/HomePageImages/PCGamesImages/4.jpg",
    ],
  },
  {
    id: 7,
    src: "/src/assets/HomePageImages/PCGamesImages/7.jpg",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/PCGamesImages/2.jpg",
      "/src/assets/HomePageImages/PCGamesImages/1.webp",
      "/src/assets/HomePageImages/PCGamesImages/3.webp",
      "/src/assets/HomePageImages/PCGamesImages/4.jpg",
    ],
  },
  {
    id: 8,
    src: "/src/assets/HomePageImages/PCGamesImages/8.jpg",
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      "/src/assets/HomePageImages/PCGamesImages/2.jpg",
      "/src/assets/HomePageImages/PCGamesImages/1.webp",
      "/src/assets/HomePageImages/PCGamesImages/3.webp",
      "/src/assets/HomePageImages/PCGamesImages/4.jpg",
    ],
  },
];

let initialState = {
  product: {},
  physicalProductList: {
    ClothingAccessoriesSectionData,
    ActionFiguresSectionData,
  },
  digitalProductList: { XboxGameData, PCGamesImages },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
