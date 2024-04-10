"use client";

import Link from "next/link";
import Image from "next/image";

const Whatsapp = () => {
  return (
    <aside className="whatsapp">
      <Link
        target="_blank"
        href={
          "https://wa.me/573104823549?text=¡Hola%20Mariposa%20Azul!%20Estoy%20interesad@%20en%20..."
        }
      >
        <Image
          src={"/whatsapp_logo.webp"}
          alt="Whatsapp logo"
          priority
          width={200}
          height={200}
        />
      </Link>
    </aside>
  );
};

export default Whatsapp;
