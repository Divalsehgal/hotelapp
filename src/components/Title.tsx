import React from "react";
type TitleProps={
  title:string
}
export default function Title({ title }:TitleProps) {
  return (
    <div className="section-title" data-test="title">
      <h4>{title}</h4>
      <div/>
    </div>
  );
}
