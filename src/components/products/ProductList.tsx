import ProductCard from "./ProductCard";
import iphone15 from "../../assets/images/iphone15promax.png";
import iphone14 from "../../assets/images/iphone14promax.png";
import iphone13 from "../../assets/images/iphone13promax.png";
import pinkSmartWatch from "../../assets/images/applewatchpink.png";
import blackSmartWatch from "../../assets/images/applewatchblack.png";
import airpod from "../../assets/images/appleairpod.png";
import headset from "../../assets/images/headphone.png";

const ProductList = () => {
  const productList = [
    {
      id: 1,
      category: "PHONES",
      title: "Iphone 15 Pro Max (256GB)",
      rating: 1.2,
      price: "2,500,000",
      image: iphone15,
    },
    {
      id: 2,
      category: "PHONES",
      title: "Iphone 14 Pro Max (512GB)",
      rating: 1.2,
      price: "2,300,000",
      image: iphone14,
    },
    {
      id: 3,
      category: "SMART WATCHES",
      title: "Apple Watch SE 2022 40",
      rating: 1.2,
      price: "2,500,000",
      image: pinkSmartWatch,
    },
    {
      id: 4,
      category: "AIRPODS",
      title: "Apple Airpods Pro",
      rating: 1.2,
      price: "340,000",
      image: airpod,
    },
    {
      id: 5,
      category: "PHONES",
      title: "Iphone 15 Pro Max (256GB)",
      rating: 1.2,
      price: "1,800,000",
      image: iphone15,
    },
    {
      id: 6,
      category: "SMART WATCHES",
      title: "Apple Watch SE 2022 40",
      rating: 1.2,
      price: "2,500,000",
      image: pinkSmartWatch,
    },
    {
      id: 7,
      category: "PHONES",
      title: "Iphone 13 Pro Max (256GB)",
      rating: 1.2,
      price: "1,400,000",
      image: iphone13,
    },
    {
      id: 8,
      category: "SMART WATCHES",
      title: "Apple Watch SE 2022 40",
      rating: 1.2,
      price: "400,000",
      image: blackSmartWatch,
    },
    {
      id: 9,
      category: "HEADSET",
      title: "Apple Headset Max SE",
      rating: 1.2,
      price: "800,000",
      image: headset,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-[3%] gap-y-6 md:grid-cols-3 md:gap-x-[2%] lg:grid-cols-4 lg:gap-y-12">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
