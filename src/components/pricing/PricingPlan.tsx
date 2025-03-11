import React from 'react'
import { Switch } from '@headlessui/react'
import { useState } from 'react'
import twoMonths from '../..//assets/2monthsfree.svg'
import PlansCard from './PlansCard'
import AddonsCard from './AddonsCard'


const PricingPlan = () => {

    const [enabled, setEnabled] = useState(false);

    const plans = [
        {
            title: 'Starter',
            tag: 'Ideal for freelancers and contractors just starting out.',
            price: enabled ? '24' : '17',
            features: [
                'All Templates',
                'Unlimited Clients & Projects',
                'Invoicing & Payments',
                'Proposals & Contracts',
                'Tasks & Time Tracking',
                'Client CRM',
                'Expense Tracking',
                'Up to 5 Project Collaborators'
            ]
        },
        {
            title: 'Professional',
            tag: 'Everything a growing independent business needs to thrive.',
            price: enabled ? '39' : '29',
            features: [
                'Everything in Starter plus...',
                'Custom Branding',
                'Forms & Questionnaires',
                'Workflow Automations',
                'Client Portal',
                'QuickBooks Integration',
                'Calendly Integration',
                'Zapier Integration',
                'Up to 15 Project Collaborators'
            ]
        },
        {
            title: 'Business',
            tag: 'The perfect package for small businesses and agencies.',
            price: enabled ? '79' : '59',
            features: [
                'Everything in Starter and Professional plus...',
                'Subcontractor Management',
                'Hiring Agreement Templates (1099 contracts)',
                'Subcontractor Onboarding',
                'Talent Pool',
                '3 Team Seats (additional seats $9/month)',
                'Accountant Access',
                'Connect Multiple Bank Accounts',
                'Unlimited Subcontractors',
                'Unlimited Project Collaborators'
            ]
        }
    ];

    const addOns = [
        {
          name: "Collaborators",
          description: "Invite other users to specific projects for limited access and functionality.",
          price: "Free"
        },
        {
          name: "Partners",
          description: "Invite other users for full account access and company management.",
          price: "$9"
        },
        {
          name: "Bonsai Tax",
          description: "Track expenses, identify write-offs, and estimate quarterly taxes easily.",
          price: "$10"
        }
      ];
    

  return (
    <div className='relative mb-10'>
      <div className=' bg-[#f2faff] w-full h-[100vh] left-0 top-0' style={{clipPath: 'polygon(9% 0, 100% 0, 100% 46%, 27% 99%)', overflow: 'visible'}}>
      </div>

      <div className='absolute top-[180px] left-0 w-full text-[#4C4D5F]'>
        <div className='md:w-[80%] w-[90%] mx-auto'>
            <div className='text-center flex items-center justify-center gap-10 lg:gap-20 mb-15'>
                <h2 className='lg:text-4xl text-2xl font-semibold lg:font-stretch-30%'>Plans & Pricing</h2>
                <div className='relative flex items-center gap-8'>
                    <img className='absolute -top-10 -right-5' src={twoMonths} alt="" />
                    <p className='text-lg font-medium'>MONTHLY</p>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className="group inline-flex h-8 w-14 items-center rounded-full bg-[#00b289] transition data-[checked]:bg-[#00b289]"
                        >
                        <span className="size-6 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-7" />
                    </Switch>
                    <p className=' font-medium text-[#8c8c8e] tracking-[2px]'>YEARLY</p>
                </div>
            </div>

            <div className='lg:flex lg:justify-center gap-10'>
                {
                    plans.map((plan, index) => (
                        <PlansCard key={index} title={plan.title} tag={plan.tag} price={plan.price} features={plan.features} isPopular={index === 1} />
                    ))
                }
            </div>

            <div className='mt-30'>
                <h2 className='lg:text-4xl text-2xl text-center mb-15'>Super charge your work with add-ons</h2>
                <div>
                    {
                        addOns.map((addOn, index) => (
                            <AddonsCard key={index} info={addOn} />
                        ))
                    }
                </div>
            </div>

            <div className='my-30 bg-[#f2faff] round-lg p-15 lg:w-[70%] w-[100%] mx-auto flex items-center justify-between'>
                <h2 className='lg:text-4xl text-2xl font-stretch-70%'>It’s <span className='text-[#00b289] mb-5 inline-block'>your</span> business.<br></br>
                We’re here to help it grow.</h2>
                <button className='bg-[#00b289] text-white rounded p-3 text-sm'>START FREE</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default PricingPlan
