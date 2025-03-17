import { div } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion";

const Footer = () => {

const footLinks = {
  "Product": [
    "Proposals",
    "Contracts",
    "Invoicing",
    "Client CRM",
    "Time Tracking",
    "Task Tracking",
    "Forms",
    "Accounting",
    "Bonsai Tax",
    "Bonsai Cash",
    "Pricing",
    "Bonsai Reviews"
  ],
  "Free Resources": [
    "Freelance Resources",
    "Freelance Blog by Bonsai",
    "How to Write a Contract",
    "Online Signature Maker",
    "Self-Employed Taxes Hub",
    "Self-Employed Tax Calculator",
    "Self-Employed Tax Deductions"
  ],
  'Templates': [
    {
      id: 1,
      title: "Contract Templates",
      features: [
        "Free contract maker",
        "Social media manangement",
        "Graphic design",
        "Digital Marketing",
      ],
      icon: "article",
      isOpen: false
    },
    {
      id: 2,
      title: "Proposal Templates",
      features: [
        "Business proposal maker",
        "Brand Ambassador",
        "Graphic design",
        "Data Entry",
      ],
      icon: "article",
      isOpen: false
    },
    {
      id: 3,
      title: "Invoice Templates",
      features: [
        "Contract invoice maker",
        "Social media",
        "Web Design",
        "Influencer",
      ],
      icon: "article",
      isOpen: false
    },
    {
      id: 4,
      title: "Agreement Templates",
      features: [
        "Influencer agreement maker",
        "Influencer collaboration",
        "Monthly Retainer",
        "Writer",
      ],
      icon: "article",
      isOpen: false
    },
    {
      id: 5,
      title: "Quote Templates",
      features: [
        "Web Design",
        "Interior Design",
        "Digital Marketing",
        "Video Production",
      ],
      icon: "article",
      isOpen: false
    },
    {
      id: 6,
      title: "Scope of Work Templates",
      features: [
        "Web Design Scope of",
        "Graphic Design Scope of",
        "Digital Marketing Scope of",
        "Video Production Scope of",
      ],
      icon: "schedule",
      isOpen: false
    },
    {
      id: 7,
      title: "Brief Templates",
      features: [
        "Design ",
        "Architecture",
        "Fashion",
        "Creative ",
      ],
      icon: "article",
      isOpen: false
    },
  ],
  "Bonsai": [
    "About",
    "Careers",
    "Support",
    "LinkedIn",
    "Twitter",
    "Privacy policy",
    "Legal",
    "Affiliates",
    "Write for Us",
    "Comparisons"
  ]
};

const products = footLinks.Product;
const freeResources = footLinks['Free Resources'];
const templatesData = footLinks.Templates;
const bonsai = footLinks.Bonsai;

const [templates, setTemplates] = useState(templatesData);

const toggleTemplate = (id: number) => {
    setTemplates((prevTems) =>
      prevTems.map((template) =>
        template.id === id ? { ...template, isOpen: !template.isOpen } : template
      )
    );
  };



  return (
    <div className='flex justify-between'>
      <div>
        <h1 className='font-bold text-lg mb-5'>PRODUCTS</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index} className='font-light mb-2'>{product}</li>
          ))}
        </ul>
      </div>

      <div>
          <div className='mb-10'>
                <h1 className='font-bold text-lg mb-5'>FREE RESOURCES</h1>
                <ul>
                    {freeResources.map((resource, index) => (
                        <li key={index} className='font-light mb-2'>{resource}</li>
                    ))}
                </ul>
          </div>
          <div>
                <h1 className='font-bold text-lg mb-5'>TEMPLATES</h1>
                <ul>
                    {templates.map((template) => (
                        <li key={template.id} className="mb-3">
                        {/* Clickable Header */}
                        <div 
                            className="flex items-center justify-between cursor-pointer"
                            onClick={() => toggleTemplate(template.id)}
                        >
                            <span className="font-light">{template.title}</span>
                            <i className="bx bx-chevron-down" style={{ color: "#565252" }}></i>
                        </div>

                        {/* Smooth Animated Dropdown */}
                        <motion.div
                            initial={false}
                            animate={{ height: template.isOpen ? "auto" : 0, opacity: template.isOpen ? 1 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden pl-5"
                        >
                            {template.features.map((feature, i) => (
                            <div key={i} className="mb-3">
                                <button className="font-light">{feature}</button>
                            </div>
                            ))}
                        </motion.div>
                        </li>
                    ))}
                    </ul>
          </div>
      </div>

      <div>
        <h1 className='font-bold text-lg mb-5'>BONSAI</h1>
        <ul>
          {bonsai.map((item, index) => (
            <li key={index} className='font-light mb-2'>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
