import React from "react";
import Navbar from "../components/nav/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import PricingPlan from "../components/pricing/PricingPlan";
import FaqCard from "../components/FaqCard";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const Home = () => {
  const faqsData = [
    {
      id: 1,
      question: "How does the free trial work?",
      answer:
        "When you start your trial with Bonsai, you'll receive full, unlimited access to all of Bonsai’s Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Can I change plans anytime?",
      answer:
        'Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".',
      isOpen: false,
    },
    {
      id: 3,
      question: "How do I pause my Bonsai subscription?",
      answer:
        "We totally understand that with the nature of freelancing, work ebbs and flows, so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What is your refund policy?",
      answer:
        "If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you! Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.",
      isOpen: false,
    },
  ];
  

  const [faqs, setFaqs] = useState(faqsData);

  // console.log(faqs);

  const toggleFaq = (id: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };


  return (
    <div className="">
        <Navbar />

        <PricingPlan />
       
        <div className="mt-[3300px] lg:mt-[1600px] w-[90%] lg:w-[80%] mx-auto mb-10 text-[#4C4D5F]">
          <div className="mb-30 w-[90%] lg:w-[70%] mx-auto">
            <h1 className="text-3xl text-[#00b289] font-bold text-center mt-10 mb-10">Frequently Asked Questions</h1>
            <div>
              {
                faqs?.map((faq, index) => (
                  <FaqCard key={index} faq={faq} toggleFaq={toggleFaq} />
                ))
              }
            </div>
          </div>

          <div>
            <Footer />
          </div>
        </div>
    </div>
  );
};

export default Home;
