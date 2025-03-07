import React from "react";
import logo from "../../assets/boisai_logo.svg";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOut } from "framer-motion/dom";
import ProductsDropdown from "./ProductsDropdown";
import TemplatesDropdown from "./TemplatesDropdown";

type MobileNavProps = {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  products: {
    id: number;
    title: string;
    description: string;
  }[];
  showProducts: boolean;
  setShowProducts: React.Dispatch<React.SetStateAction<boolean>>;
  showTemplates: boolean;
  setShowTemplates: React.Dispatch<React.SetStateAction<boolean>>;
  templates: {
    id: number;
    title: string;
    features: string[];
    icon: string;
  }[];
};

const MobileNav: React.FC<MobileNavProps> = ({
  showMobileMenu,
  setShowMobileMenu,
  products,
  templates,
  setShowProducts,
  showProducts,
  setShowTemplates,
  showTemplates,
}) => {
  return (
    <AnimatePresence>
      {showMobileMenu && (
        <motion.div
          className={`fixed top-0 right-0 h-full w-full px-10 py-5 bg-white shadow-lg transform transition-transform duration-300
        // showMobileMenu ? "translate-x-0" : "translate-x-full"
      }`}
          key="mobile-nav"
          initial={{ translateX: "100%", opacity: 0 }} // Animates in when added
          animate={{ translateX: "0%", opacity: 1 }} // Normal state
          exit={{ translateX: "100%", opacity: 1 }} // Animates out when removed
          transition={{ duration: 0.2, ease: easeInOut }} // Smooth animation
        >
          <div className="flex justify-between items-center mb-10">
            <img className="w-37" src={logo} alt="" />
            <Hamburger
              toggled={showMobileMenu}
              toggle={setShowMobileMenu}
              rounded
              color="#4C4D5F"
            />
          </div>
          <ul className="">
            <li
              className={`flex justify-between items-center text-[#4C4D5F] cursor-pointer`}
              onClick={() => setShowProducts(!showProducts)}
            >
              <span className="mr-2">Product</span>
              <i
                className="bx bx-chevron-down"
                style={{ color: "#565252" }}
              ></i>
            </li>
            <ProductsDropdown
              showProducts={showProducts}
              products={products}
              from="mobile"
            />
            <hr className="text-gray-300 my-5" />

            <li
              className="flex justify-between items-center text-[#4C4D5F] cursor-pointer"
              onClick={() => setShowTemplates(!showTemplates)}
            >
              <span className="mr-2">Templates</span>
              <i
                className="bx bx-chevron-down"
                style={{ color: "#565252" }}
              ></i>
            </li>
            <TemplatesDropdown
              templates={templates}
              showTemplates={showTemplates}
              from="mobile"
            />
            <hr className="text-gray-300 my-5" />

            <li className="text-[#4C4D5F] cursor-pointer">Pricing</li>
            <hr className="text-gray-300 my-5" />

            <li className="text-[#4C4D5F] cursor-pointer">Reviews</li>
            <hr className="text-gray-300 my-5" />

            <button className="border block mb-5 w-full border-[#00b289] text-[#00b289] cursor-pointer hover:bg-[#00b289] hover:text-white text-xs font-bold px-6 py-3 rounded">
              LOG IN
            </button>
            <button className="text-xs block font-bold w-full text-white bg-[#00b289] cursor-pointer hover:bg-[#7bc9b7] py-3 px-10 rounded">
              START FREE
            </button>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
