import AddressSection from "./AddressSection";
import PaymentSection from "./PaymentSection";

export default function AddressPaymentSection() {
  return (
    <div className="AddressSection w-[95%] md:w-[60%] lg:w-[60%] order-1 lg:order-2 md:order-2">
      <div className="MyBaskets-container bg-[#0F0F0F] lg:p-[2em] md:p-[0.9em] p-[0.4em]">
        <AddressSection />
        <PaymentSection />
      </div>
    </div>
  );
}
