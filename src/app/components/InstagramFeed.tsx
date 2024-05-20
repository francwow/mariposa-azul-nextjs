"use server";
// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  let url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${process.env.INSTAGRAM_KEY}`;
  const res = await fetch(url);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const InstagramFeed = async () => {
  const feed = await getData();
  const images = feed.data;
  console.log(images);
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch("/api/")
  //     .then((res) => res.json())
  //     .then((feed) => setImages(feed.data));
  // }, []);

  return (
    <section className="instagram-feed-container">
      <div className="instagram-feed">
        {images !== null
          ? images.map((image: any) => {
              return (
                <Link
                  href={"https://www.instagram.com/somos.mariposa.azul/"}
                  target="_blank"
                  className="instagram-item"
                  key={image.id}
                >
                  <Image
                    src={image.media_url}
                    alt="instagram image"
                    width={600}
                    height={600}
                  />
                </Link>
              );
            })
          : null}
      </div>
    </section>
  );
};

export default InstagramFeed;
