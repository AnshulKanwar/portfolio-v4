import Image from "next/future/image";
import React from "react";

const css = { width: "100%", height: "auto" };
const BlogImage = ({ src, alt }) => {
  return (
    <span className="block relative h-96">
      <Image src={src} alt={alt} sizes="100vw" style={css} width={800} height={800}/>
    </span>
  );
};

export default BlogImage;
