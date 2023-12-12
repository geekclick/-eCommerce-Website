export default function Logo({ LogoAlt, LogoSrc, LogoLink }) {
  return (
    <div className=" bg-black flex justify-center">
      <a
        href={LogoLink}
        className="flex justify-center w-2/4 md:w-2/3 lg:w-3/3"
      >
        <img
          alt={LogoAlt}
          src={LogoSrc}
        />
      </a>
    </div>
  );
}
