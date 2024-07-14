import Logo from "../Logo";
import paypal from "../../assets/images/paypal.svg";
import masterCard from "../../assets/images/logos_mastercard.svg";
import visaCard from "../../assets/images/visa.svg";

import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedIn from "../../assets/images/linkedIn.svg";

import { motion } from "framer-motion";
import { cn } from "../../utilities/cn";
import { Link } from "react-router-dom";
import { SingleCategory } from "../../types/types";
import useReactQuery from "../../utilities/useReactQuery";

const helpSection = [
  { name: "Contact Us" },
  { name: "Chat With Us" },
  { name: "Help Center" },
];

const paymentSection = [
  { platform: "paypal", icon: paypal, path: "" },
  { platform: "master card", icon: masterCard, path: "" },
  { platform: "visa", icon: visaCard, path: "" },
];

const SocialsSection = [
  { platform: "facebook", icon: facebook, path: "" },
  { platform: "twitter", icon: twitter, path: "" },
  { platform: "instagram", icon: instagram, path: "" },
  { platform: "linkedIn", icon: linkedIn, path: "" },
];

const footerParagraph =
  "text-white text-[11px] xs:text-[12px] md:text-sm lg:text-base w-fit cursor-pointer";

const headingClass =
  "mb-3 text-xs font-bold font-nunito text-white xs:text-base md:text-xl lg:text-2xl";

const Footer = () => {
  // const [categoryList, setCategoryList] = useState<SingleCategory[]>();

  const apiKey = import.meta.env.VITE_API_KEY;
  const appId = import.meta.env.VITE_APP_ID;
  const orgId = import.meta.env.VITE_ORG_ID;
  
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        `/api/categories?organization_id=${orgId}&reverse_sort=false&size=10&Appid=${appId}&Apikey=${apiKey}&page=1`,
      );

      const data = await response.json();
      return data.items;
      // setCategoryList(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { data: categoryList, isLoading } = useReactQuery(
    ["category"],
    fetchCategories,
  );

  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-[1800px]">
        {/* footer info */}
        <div className="grid grid-cols-[35%,1fr] px-4 py-12 lg:px-12 xl:px-16">
          {/* logo and address*/}
          <div className="space-y-2">
            <Logo variant="footer" />
            <p className="text-[12px] text-white xs:text-[12px] md:text-base lg:text-2xl">
              4 Banana Street,
              <br /> Yaba Lagos State, Nigeria.
            </p>
          </div>

          {/* other information */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 lg:grid-cols-3">
            {/* categories */}
            <div className="">
              {/* heading */}
              <h5 className={headingClass}>Categories</h5>
              {/* content */}
              <div className="flex flex-col gap-1">
                {!isLoading && categoryList.map((category: SingleCategory, index) => (
                  <Link
                    to={`/category/${category.id}`}
                    key={index}
                    className={cn(footerParagraph, "hover:text-yellow")}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* need help */}
            <div>
              {/* heading */}
              <h5 className={headingClass}>Need help?</h5>
              {/* content */}
              <div className="flex flex-col space-y-1">
                {helpSection.map((help, index) => (
                  <Link
                    to="*"
                    key={index}
                    className={cn(footerParagraph, "hover:text-yellow")}
                  >
                    {help.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* payment */}
              <div className="">
                {/* heading */}
                <h5 className={headingClass}>Payment</h5>
                {/* content */}
                <div className="flex gap-2">
                  {paymentSection.map((paymentPlatform) => (
                    <motion.img
                      key={paymentPlatform.platform}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.5 }}
                      src={paymentPlatform.icon}
                      alt={paymentPlatform.platform}
                      className="w-[14px] cursor-pointer lg:w-5"
                    />
                  ))}
                </div>
              </div>

              {/* socials (shows only on large screens)*/}
              <div className="hidden lg:block">
                <p className={headingClass}>Follow Us</p>
                <div className="flex gap-2">
                  {SocialsSection.map((social) => (
                    <motion.img
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.5 }}
                      key={social.platform}
                      src={social.icon}
                      alt={social.platform}
                      className="cursor-pointer lg:w-5"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* socials */}
            <div className="lg:hidden">
              <p className={headingClass}>Follow Us</p>
              <div className="flex gap-2">
                {SocialsSection.map((social) => (
                  <motion.img
                    key={social.platform}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.5 }}
                    src={social.icon}
                    alt={social.platform}
                    className="w-[14px] cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* closing remarks lol */}
        <div className="flex justify-between border-t-2 border-yellow px-4 py-4 lg:px-12 xl:px-16">
          <p className={footerParagraph + "font-bold"}>
            2024 HNG Stores{" "}
            <span className="font-normal">All rights reserved</span>
          </p>

          <div className="flex space-x-4 lg:space-x-8">
            <p className={footerParagraph}>Privacy Policy</p>
            <p className={footerParagraph}>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
