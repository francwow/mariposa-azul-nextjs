"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type InstagramImg = {
  id: string;
  media_url: string;
};

type InstagramFeedType = InstagramImg[];

const InstagramFeed = () => {
  // async function getData() {
  //   const res = await fetch(
  //     `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${process.env.INSTAGRAM_KEY}`,
  //     { method: "GET" }
  //   );
  //   // The return value is *not* serialized
  //   // You can return Date, Map, Set, etc.

  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error("Failed to fetch data");
  //   }

  //   const feed = res.json();

  //   return feed;
  // }

  // const feed = await getData();
  // const images = feed.data;
  // console.log(images);

  const [images, setImages] = useState<InstagramFeedType | null>(null);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,media_url&access_token=IGQWRPSjJremM1UUhZAWmF1V3A5d2NaS19zVnE5MU1YQVc5WDBPSUxTc194alo0TmxxdXZAwV1d3R1NpUXE2aThLcVJLSlNTWDg5Wl8xazRGVGFUSkhOVnNfVzVZAQkxGZA1VGOVh1akZAhdGxYQVQzOGltLXZAYTU5FcFkZD`
      );

      if (res) {
        const { data } = await res.json();
        console.log(data);
        if (data) {
          setImages(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
