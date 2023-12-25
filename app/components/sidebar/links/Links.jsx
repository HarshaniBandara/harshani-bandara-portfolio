import React from "react";

const Links = () => {
  const items = ["Homepage", "services", "portfolio", "contact", "about"];
  return <div className="links">
    {items.map(item=>(
      <a href={`#${item}`} key={item}>{item}</a>
    ))}
  </div>;
};

export default Links;
