"use client";

import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

type InViewProps = {
  activeClass: string;
  notActiveClass: string;
};

const InViewEl = ({
  children,
  activeClass,
  notActiveClass,
}: PropsWithChildren & InViewProps) => {
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div
      style={{ opacity: "0" }}
      ref={itemRef}
      className={itemInView ? activeClass : notActiveClass}
    >
      {children}
    </div>
  );
};

export default InViewEl;
