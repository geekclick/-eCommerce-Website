import { Link } from "react-router-dom";

export default function Image({ imgAlt, imgSrc, imgLink, imgClass }) {
  return (
    <>
      <Link to={imgLink}>
        <img alt={imgAlt} src={imgSrc} className={imgClass} />
      </Link>
    </>
  );
}
