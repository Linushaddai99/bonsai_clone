import React from "react";
import Navbar from "../components/nav/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import PricingPlan from "../components/pricing/PricingPlan";

const Home = () => {
  return (
    <div className="">
        <Navbar />
        <PricingPlan />
       
        <div className="mt-[600px]">
        </div>
    </div>
  );
};

export default Home;
