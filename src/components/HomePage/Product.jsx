import { useDispatch } from "react-redux";
import { setProduct } from "../../store/reducers/productSlice";
import { useNavigate } from "react-router-dom";

export default function Product({
  imgAlt,
  imgSrc,
  id,
  imgClass,
  productList,
  imgLink,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = (id) => {
    const product = productList?.find((x) => x.id == id);
    dispatch(setProduct(product));
    navigate(imgLink + "/" + id);
  };
  return (
    <>
      <div onClick={() => onClick(id)}>
        <img alt={imgAlt} src={imgSrc} className={imgClass} />
      </div>
    </>
  );
}
