import { useEffect, useState } from "react";
import { Photo } from "../../types/types";

type LightBoxProps = {
  images: Photo[];
  
};
const LightBox = ({ images }: LightBoxProps) => {
  const [currentImage, setCurrentImage] = useState<string>("");

  const formattedImages = images?.slice(0, 4)?.map((image) => {
    return `https://api.timbu.cloud/images/${image.url}`;
  });

  while (formattedImages?.length < 4) {
    formattedImages?.push("");
  }

  useEffect(() => {
    if (formattedImages && currentImage === "")
      setCurrentImage(formattedImages[0]);
  }, [formattedImages, currentImage, images]);

  return (
    <div className="grid gap-2 space-y-5 overflow-hidden lg:sticky lg:top-40 lg:aspect-[2/1.5] lg:grid-cols-[20%,1fr] lg:gap-0 lg:space-y-0">
      <div className="relative aspect-square overflow-hidden rounded-md bg-gray lg:order-2">
        <img
          src={currentImage}
          alt=""
          className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>

      {/* thumbnails */}
      <div className="grid w-full grid-cols-4 justify-between gap-2 lg:flex lg:grid-cols-1 lg:flex-col lg:gap-0">
        {formattedImages?.map((image, index) => (
          <div
            key={index}
            className="relative grid aspect-square overflow-hidden rounded-md lg:w-[90%]"
            onClick={() => image && setCurrentImage(image)}
            onMouseOver={() => image && setCurrentImage(image)}
          >
            <img
              src={image}
              alt=""
              className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightBox;
