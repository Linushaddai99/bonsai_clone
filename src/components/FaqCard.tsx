import React, { useEffect } from 'react'
import { motion } from "framer-motion";

type FaqCardProps = {
  faq: {
    id: number
    question: string;
    answer: string;
    isOpen: boolean;
  };

  toggleFaq: (id: number) => void
};

const FaqCard: React.FC<FaqCardProps> = ({faq, toggleFaq}) => {

  // useEffect(() => { }, [faq]);

  return (
    <div className='mb-5' key={faq.id}>
      <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleFaq(faq.id)}>
        <h1 className='text-2xl mb-2 hover:text-[#00b289] font-bold '>{faq?.question}</h1>
        {
          faq?.isOpen ? (
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#0F0F0F"></path> </g></svg>
          ) : (
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"></path> </g></svg>
          )
        }
      
      </div>
        <motion.div
        initial={false}
        animate={{ height: faq.isOpen ? "auto" : 0, opacity: faq.isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p>{faq.answer}</p>
      </motion.div>
      </div>
  )
}

export default FaqCard
