import ItemInMyBasket from "./ItemInMyBasket"
import Icon from "/src/assets/CartPageImages/icon.png"
function MyBasket(props) {
    const ItemsInMyBasket = props.myBasketData.map((item, index) => <ItemInMyBasket productTitle={item.productTitle} productImg={item.src} key={index}/>)
    return (
        <div className="MyBasket-container">
            <div className="mybasket-heading - flex justify-end items-center bg-[#3A3A3A] p-[0.3em]">
                <p className="mybasket-label - text-[#E6E6E6] text-right text-[0.8rem] md:text-[0.9rem] lg:text-[1.1rem] not-italic font-normal leading-[3.125rem] tracking-[0.0125rem]">سبد من</p>
                < img src={Icon} alt="" className="mybasket-img - p-[0.3em] w-[1.875rem] h-[1.875rem]" />
            </div>
            <div className="ItemsInMyBasket - bg-[#2E2E2E] p-[1em] mb-[1.5em]">
                {ItemsInMyBasket}
            </div>
        </div>
    )
}

export default MyBasket
