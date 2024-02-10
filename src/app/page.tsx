import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center bg-white gap-5 p-4">
      <div className="">
        <Image
          src={"/dragon.png"}
          alt="year of the dragon"
          width={100}
          height={300}
        />
      </div>
      <Link href={"https://www.francwow.com/"} target="_blank">
        <h1 className="text-red-500 font-extrabold text-5xl font-mono underline">
          Welcome to your Next.js project! <br />
          <br /> Made by francwow.com
        </h1>
      </Link>
    </main>
  );
}
