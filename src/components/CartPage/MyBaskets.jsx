import MyBasket from "./MyBasket";
import { useSelector } from "react-redux";

function MyBaskets() {
  const { cart } = useSelector(({ cartSlice }) => cartSlice);
  const MyBaskets = cart.map((basket, index) => (
    <MyBasket myBasketData={basket} key={index} />
  ));
  return (
    <div className="MyBaskets-container - w-1/2 max-w-[62.5rem] bg-[#0F0F0F] p-[2em] [@media(max-width:900px)]:mx-[auto] [@media(max-width:900px)]:my-[0] [@media(max-width:900px)]:order-none [@media(max-width:900px)]:w-full [@media(max-width:900px)]:mb-[1em]">
      {MyBaskets}
    </div>
  );
}

export default MyBaskets;
