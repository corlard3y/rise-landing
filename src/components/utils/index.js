import React from "react";

const ImgNextGen = ({
  srcWebp,
  srcJrx,
  srcJp2,
  fallback,
  png,
  alt,
  ...props
}) => {
  return (
    <picture>
      <source srcSet={srcWebp} type="image/webp" />
      <source srcSet={srcJrx} type="image/jxr" />
      <source srcSet={srcJp2} type="image/jp2" />
      <source srcSet={fallback} type="image/jpeg" />
      <source srcSet={png} type="image/png" />
      <img src={fallback} alt={alt} {...props} />
    </picture>
  );
};

export default ImgNextGen;
