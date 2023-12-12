import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import MyOrdersPage from "./pages/MyOrdersPage";
import TicketsPage from "./pages/TicketsPage";
import HomePage from "./pages/HomePage";
import PhysicalProductPage from "./pages/PhysicalProductPage";
import LoginCreatAccount from "./pages/LoginCreatAccount";
import ProductDigital from "./pages/ProductDigital";
import Cart from "./pages/Cart";
import RedirectPayment from "./pages/RedirectPayment";
import FAQPage from "./pages/QuestionPage";
import ContactPage from "./pages/ContactPage";
import AddressPaymentPage from "./pages/AddressPaymentPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<LoginCreatAccount />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/redirect-payment" element={<RedirectPayment />} />
          <Route path="/payment" element={<AddressPaymentPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/physical-product" element={<PhysicalProductPage />} />
          <Route
            path="/physical-product/:id"
            element={<PhysicalProductPage />}
          />
          <Route path="/digital-product" element={<ProductDigital />} />
          <Route path="/digital-product/:id" element={<ProductDigital />} />
          <Route path="profile/my-orders" element={<MyOrdersPage />} />
          <Route path="profile/tickets" element={<TicketsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
