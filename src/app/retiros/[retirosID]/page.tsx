"use client";

import Footer from "@/app/components/Footer";
import RetirosHero from "@/app/components/RetirosHero";
import RetirosInfo from "@/app/components/RetirosInfo";
import { RetirosItems } from "@/app/_data/RetirosItems";

export default function Page({ params }: { params: { retirosID: string } }) {
  return (
    <div className="main-container retiros">
      {RetirosItems.map((item, index) => {
        return params.retirosID === item.id ? (
          <div key={index}>
            <RetirosHero id={item.id} />
            <RetirosInfo id={item.id} />
          </div>
        ) : null;
      })}
      <Footer />
    </div>
  );
}
