"use client";

import Footer from "@/app/components/Footer";
import TerapiasHero from "@/app/components/TerapiasHero";
import TerapiasInfo from "@/app/components/TerapiasInfo";
import { TerapiasItems } from "@/app/data/TerapiasItems";

export default function Page({ params }: { params: { terapiasID: string } }) {
  return (
    <div className="main-container terapias">
      {TerapiasItems.map((item, index) => {
        return params.terapiasID === item.id ? (
          <div key={index}>
            <TerapiasHero id={item.id} />
            <TerapiasInfo id={item.id} />
          </div>
        ) : null;
      })}
      <Footer />
    </div>
  );
}
