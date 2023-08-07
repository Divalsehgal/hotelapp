'use client'

import React from "react";
interface BannerProps  {
  title:String
  subtitle?:String
  children?:React.ReactNode
}
export default function Banner({ title, subtitle, children }:BannerProps) {
  return (
    <div data-test="banner" className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
