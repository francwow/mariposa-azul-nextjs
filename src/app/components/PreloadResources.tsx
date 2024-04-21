"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/img/about.webp", { as: "image" });

  return null;
}
