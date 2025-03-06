import React from 'react'
import logo from '../assets/boisai_logo.svg'
import ProductsDropdown from './ProductsDropdown'
import TemplatesDropdown from './TemplatesDropdown'
import { Squash as Hamburger } from 'hamburger-react'
import MobileNav from './MobileNav';

const Navbar = () => {
  const [showProducts, setShowProducts] = React.useState(false);
  const [showTemplates, setShowTemplates] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  // const [productsDropdown, setProdowns] = React.useState(false);

  const handleClose = () => {
    setShowProducts(false);
    setShowTemplates(false);
    setShowMobileMenu(!showMobileMenu);
  }

  const products = [
    {
      id: 1,
      title: 'Bonsai Workflow',
      description: 'Look professional, win more clients and manage your business from one place',
    },
    {
      id: 2,
      title: 'Bonsai Tax',
      description: 'Track expenses, maximize tax write-offs and estimate taxes without the headache',
    },
    {
      id: 3,
      title: 'Bonsai Cash',
      description: 'Bonsais all-in-one cash hub: No fees and lightining fast payouts'
    }
  ];

  const templates = [
    {
      id: 1,
      title: 'Contract Templates',
      features: ['Free contract maker', 'Social media manangement contract Template', 'Graphic design contract Template', 'Digital Marketing contract Template'],
      icon: 'article'
    },
    {
      id: 2,
      title: 'Proposal Templates',
      features: ['Business proposal maker', 'Brand Ambassador proposal Template', 'Graphic design proposal Template', 'Data Entry proposal Template'],
      icon: 'article'
    },
    {
      id: 3,
      title: 'Invoice Templates',
      features: ['Contract invoice maker', 'Social media invoice Template', 'Web Design invoice Template', 'Influencer invoice Template'],
      icon: 'article'
    },
    {
      id: 4,
      title: 'Agreement Templates',
      features: ['Influencer agreement maker', 'Influencer collaboration agreement Template', 'Monthly Retainer agreement Template', 'Writer agreement Template'],
      icon: 'article'
    },
    {
      id: 5,
      title: 'Quote Templates',
      features: ['Web Design Quotation Templates', 'Interior Design Quotation Template', 'Digital Marketing Quotation Template', 'Video Production Template'],
      icon: 'article'
    },
    {
      id: 6,
      title: 'Scope of Work Templates',
      features: ['Web Design Scope of Work Template', 'Graphic Design Scope of Work Template', 'Digital Marketing Scope of Work Template', 'Video Production Scope of Work Template'],
      icon: 'schedule'
    },
    {
      id: 7,
      title: 'Brief Templates',
      features: ['Design Brief Template', 'Architecture Design Brief', 'Fashion Design Brief', 'Creative Brief Template'],
      icon: 'article'
    }
  ]

  return (
    <div className=' bg-white fixed w-full'>
      <div className='md:w-[80%] w-[90%] mx-auto py-5 flex justify-between items-center' >
        <img className='w-37' src={logo} alt="" />
        <div className='lg:flex md:justify-between md:w-[70%] hidden items-center'>
          <div className="">
            <ul className='flex space-x-6 ml-auto '>
              <li 
                className={`flex items-center text-[#4C4D5F] mx-5 cursor-pointer`} 
                onMouseEnter={() => setShowProducts(true)}
                onMouseLeave={() => setShowProducts(false)}
              >
                  <span className='mr-2'>Product</span>
                  <i className='bx bx-chevron-down' style={{'color':'#565252'}}  ></i>
                  <div
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}>
                    <ProductsDropdown showProducts={showProducts} products={products} from='desktop' />
                  </div>
              </li>
              <li className='flex items-center text-[#4C4D5F] mx-5 cursor-pointer'
                  onMouseEnter={() => setShowTemplates(true)}
                  onMouseLeave={() => setShowTemplates(false)}
              >
                  <span className='mr-2'>Templates</span>
                  <i className='bx bx-chevron-down' style={{'color':'#565252'}}  ></i>
                  <div
                  onMouseEnter={() => setShowTemplates(true)}
                  onMouseLeave={() => setShowTemplates(false)}
                  >
                    <TemplatesDropdown showTemplates={showTemplates} templates={templates} from='desktop' />
                  </div>
              </li>
              <li className='text-[#4C4D5F] mx-5 cursor-pointer'>Pricing</li>
              <li className='text-[#4C4D5F] mx-5 cursor-pointer'>Reviews</li>
            </ul>
          </div>
          <div className=''>
            <button className='border border-[#00b289] text-[#00b289] cursor-pointer hover:bg-[#00b289] hover:text-white text-xs font-bold px-6 py-3 rounded'>LOG IN</button>
            <button className='text-xs font-bold text-white bg-[#00b289] cursor-pointer hover:bg-[#7bc9b7] ml-6 py-3 px-10 rounded'>START FREE</button>
          </div>
        </div>
        <div className='lg:hidden block outline-none'>
          <div onClick={() => handleClose()}>
            <Hamburger toggled={showMobileMenu} toggle={setShowMobileMenu} rounded color="#4C4D5F" />
          </div>
          <MobileNav 
          products={products} 
          templates={templates}
          showMobileMenu={showMobileMenu} 
          setShowMobileMenu={setShowMobileMenu} 
          setShowProducts={setShowProducts} 
          showProducts={showProducts} 
          setShowTemplates={setShowTemplates}
          showTemplates={showTemplates}
          />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
