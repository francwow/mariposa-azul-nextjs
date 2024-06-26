"use client";

import { TalleresItems } from "../../_data/Retiros-Talleres-Items";
import Footer from "@/app/components/Footer";
import TalleresHero from "@/app/components/TalleresHero";
import TalleresInfo from "@/app/components/TalleresInfo";

export default function Page({ params }: { params: { talleresID: string } }) {
  return (
    <div className="main-container retiros">
      {TalleresItems.map((item, index) => {
        return params.talleresID === item.id ? (
          <div key={index}>
            <TalleresHero id={item.id} />
            <TalleresInfo id={item.id} />
          </div>
        ) : null;
      })}
      <Footer />
    </div>
  );
}
