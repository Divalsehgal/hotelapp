import React from "react";

export default function Hero({ children, hero }) {
  return <header data-test="hero" className={hero}>{children}</header>;
}
