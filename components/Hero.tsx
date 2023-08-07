'use client'
import React from "react";
interface HeroProps {
  children:React.ReactElement
  hero:string
}
export default function Hero({ children, hero }:HeroProps) {
  return <header data-test="hero" className={hero}>{children}</header>;
}
