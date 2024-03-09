import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link href={"/"}>
        <Image
          src={"/logo/logo2.webp"}
          alt="logo de Mariposa Azul"
          width={500}
          height={500}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
