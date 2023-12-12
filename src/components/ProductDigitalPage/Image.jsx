export default function Image({
  imgAlt,
  imgSrc,
  imgLink,
  imgClass,
}) {
  return (
    <>
      <a href={imgLink}>
        <img alt={imgAlt} src={imgSrc} className={imgClass} />
      </a>
    </>
  );
}
