import ShoppingCartCost from "../components/CartPage/ShoppingCartCost";
import MyBaskets from "../components/CartPage/MyBaskets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  return (
    <div>
      <Navbar />
      <div className="cart-container - flex w-full justify-center mt-20 bg-[#000] mb-[2em] [@media(max-width:900px)]:flex-col">
        <ShoppingCartCost
          profit={"999,999,999"}
          totalShopping={"999,999,999"}
          totalCost={"999,999,999"}
          key={0}
        />
        <MyBaskets key={0} />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
