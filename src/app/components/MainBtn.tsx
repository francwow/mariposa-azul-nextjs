import Link from "next/link";
import Icon from "./GoogleIcon";
import { PropsWithChildren } from "react";

type MainBtnProps = {
  href: string;
  target: boolean;
  bgColor: "white" | "blue";
};

const MainBtn = ({
  href,
  target,
  bgColor,
  children,
}: PropsWithChildren & MainBtnProps) => {
  return (
    <div
      className={
        bgColor === "white"
          ? "main-btn-container white"
          : "main-btn-container blue"
      }
    >
      <Link href={href} target={target ? "_blank" : "_self"}>
        {children}
        <Icon icon="arrow_forward_ios" />
      </Link>
    </div>
  );
};

export default MainBtn;
