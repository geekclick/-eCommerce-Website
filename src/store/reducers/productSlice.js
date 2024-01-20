import { createSlice } from "@reduxjs/toolkit";
import ClothingAccessoriesSection1 from "/src/assets/HomePageImages/ClothingAccessoriesSection/1.png"
import ClothingAccessoriesSection2 from "/src/assets/HomePageImages/ClothingAccessoriesSection/2.png"
import ClothingAccessoriesSection3 from "/src/assets/HomePageImages/ClothingAccessoriesSection/3.png"
import ClothingAccessoriesSection4 from "/src/assets/HomePageImages/ClothingAccessoriesSection/4.png"
import ActionFiguresSection1 from "/src/assets/HomePageImages/ActionFiguresSection/1.png"
import ActionFiguresSection2 from "/src/assets/HomePageImages/ActionFiguresSection/2.png"
import ActionFiguresSection3 from "/src/assets/HomePageImages/ActionFiguresSection/3.png"
import ActionFiguresSection4 from "/src/assets/HomePageImages/ActionFiguresSection/4.png"
import ActionFiguresSection5 from "/src/assets/HomePageImages/ActionFiguresSection/5.png"
import ActionFiguresSection6 from "/src/assets/HomePageImages/ActionFiguresSection/6.png"
import ActionFiguresSection7 from "/src/assets/HomePageImages/ActionFiguresSection/7.png"
import ActionFiguresSection8 from "/src/assets/HomePageImages/ActionFiguresSection/8.png"
import XboxGamesImages1 from "/src/assets/HomePageImages/XboxGamesImages/1.jpeg"
import XboxGamesImages2 from "/src/assets/HomePageImages/XboxGamesImages/2.jpg"
import XboxGamesImages3 from "/src/assets/HomePageImages/XboxGamesImages/3.jpeg"
import XboxGamesImages4 from "/src/assets/HomePageImages/XboxGamesImages/4.jpeg"
import PCGamesImages1 from "/src/assets/HomePageImages/PCGamesImages/1.webp"
import PCGamesImages2 from "/src/assets/HomePageImages/PCGamesImages/2.jpg"
import PCGamesImages3 from "/src/assets/HomePageImages/PCGamesImages/3.webp"
import PCGamesImages4 from "/src/assets/HomePageImages/PCGamesImages/4.jpg"
import PCGamesImages5 from "/src/assets/HomePageImages/PCGamesImages/5.jpg"
import PCGamesImages6 from "/src/assets/HomePageImages/PCGamesImages/6.webp"
import PCGamesImages7 from "/src/assets/HomePageImages/PCGamesImages/7.jpg"
import PCGamesImages8 from "/src/assets/HomePageImages/PCGamesImages/8.jpg"
let ClothingAccessoriesSectionData = [
  {
    id: 1,
    src: ClothingAccessoriesSection1,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ClothingAccessoriesSection1,
      ClothingAccessoriesSection2,
      ClothingAccessoriesSection3,
      ClothingAccessoriesSection4,
    ],
  },
  {
    id: 2,
    src: ClothingAccessoriesSection2,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ClothingAccessoriesSection1,
      ClothingAccessoriesSection2,
      ClothingAccessoriesSection3,
      ClothingAccessoriesSection4,
    ],
  },
  {
    id: 3,
    src: ClothingAccessoriesSection3,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ClothingAccessoriesSection1,
      ClothingAccessoriesSection2,
      ClothingAccessoriesSection3,
      ClothingAccessoriesSection4,
    ],
  },
  {
    id: 4,
    src: ClothingAccessoriesSection4,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ClothingAccessoriesSection1,
      ClothingAccessoriesSection2,
      ClothingAccessoriesSection3,
      ClothingAccessoriesSection4,
    ],
  },
];

let ActionFiguresSectionData = [
  {
    id: 1,
    src: ActionFiguresSection1,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ActionFiguresSection1,
      ActionFiguresSection2,
      ActionFiguresSection3,
      ActionFiguresSection4,
    ],
  },
  {
    id: 2,
    src: ActionFiguresSection2,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ActionFiguresSection1,
      ActionFiguresSection2,
      ActionFiguresSection3,
      ActionFiguresSection4,
    ],
  },
  {
    id: 3,
    src: ActionFiguresSection3,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ActionFiguresSection1,
      ActionFiguresSection2,
      ActionFiguresSection3,
      ActionFiguresSection4,
    ],
  },
  {
    id: 4,
    src: ActionFiguresSection4,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ActionFiguresSection1,
      ActionFiguresSection2,
      ActionFiguresSection3,
      ActionFiguresSection4,
    ],
  },
  {
    id: 5,
    src: ActionFiguresSection5,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ActionFiguresSection1,
      ActionFiguresSection2,
      ActionFiguresSection3,
      ActionFiguresSection4,
    ],
  },
  {
    id: 6,
    src: ActionFiguresSection6,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ActionFiguresSection1,
      ActionFiguresSection2,
      ActionFiguresSection3,
      ActionFiguresSection4,
    ],
  },
  {
    id: 7,
    src: ActionFiguresSection7,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ActionFiguresSection1,
      ActionFiguresSection2,
      ActionFiguresSection3,
      ActionFiguresSection4,
    ],
  },
  {
    id: 8,
    src: ActionFiguresSection8,
    alt: "/",
    link: "/physical-product",
    sliderImages: [
      ActionFiguresSection1,
      ActionFiguresSection2,
      ActionFiguresSection3,
      ActionFiguresSection4,
    ],
  },
];

let XboxGameData = [
  {
    id: 1,
    src: XboxGamesImages4,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      XboxGamesImages1,
      XboxGamesImages2,
      XboxGamesImages3,
      XboxGamesImages4,
    ],
  },
  {
    id: 2,
    src: XboxGamesImages3,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      XboxGamesImages1,
      XboxGamesImages2,
      XboxGamesImages3,
      XboxGamesImages4,
    ],
  },
  {
    id: 3,
    src: XboxGamesImages1,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      XboxGamesImages1,
      XboxGamesImages2,
      XboxGamesImages3,
      XboxGamesImages4,
    ],
  },
  {
    id: 4,
    src: XboxGamesImages2,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      XboxGamesImages1,
      XboxGamesImages2,
      XboxGamesImages3,
      XboxGamesImages4,
    ],
  },
];

let PCGamesImages = [
  {
    id: 1,
    src: PCGamesImages1,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      PCGamesImages2,
      PCGamesImages1,
      PCGamesImages3,
      PCGamesImages4,
    ],
  },
  {
    id: 2,
    src: PCGamesImages2,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      PCGamesImages2,
      PCGamesImages1,
      PCGamesImages3,
      PCGamesImages4,
    ],
  },
  {
    id: 3,
    src: PCGamesImages3,

    alt: "/",
    link: "/digital-product",
    sliderImages: [
      PCGamesImages2,
      PCGamesImages1,
      PCGamesImages3,
      PCGamesImages4,
    ],
  },
  {
    id: 4,
    src: PCGamesImages4,

    alt: "/",
    link: "/digital-product",
    sliderImages: [
      PCGamesImages2,
      PCGamesImages1,
      PCGamesImages3,
      PCGamesImages4,
    ],
  },
  {
    id: 5,
    src: PCGamesImages5,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      PCGamesImages2,
      PCGamesImages1,
      PCGamesImages3,
      PCGamesImages4,
    ],
  },
  {
    id: 6,
    src: PCGamesImages6,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      PCGamesImages2,
      PCGamesImages1,
      PCGamesImages3,
      PCGamesImages4,
    ],
  },
  {
    id: 7,
    src: PCGamesImages7,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      PCGamesImages2,
      PCGamesImages1,
      PCGamesImages3,
      PCGamesImages4,
    ],
  },
  {
    id: 8,
    src: PCGamesImages8,
    alt: "/",
    link: "/digital-product",
    sliderImages: [
      PCGamesImages2,
      PCGamesImages1,
      PCGamesImages3,
      PCGamesImages4,
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
