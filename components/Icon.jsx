import React from "react";

const Icon = ({ url, children }) => {
  return (
    <div className="w-max aspect-square p-2 text-white bg-primary rounded-full">
      <a href={url}>{children}</a>
    </div>
  );
};

export default Icon;