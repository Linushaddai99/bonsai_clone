import React from 'react'
import WorkflowDropdown from './WorkflowDropdown'

type ProductsDropdownProps = {
    products: {
        id: number;
        title: string;
        description: string;
    }[]
    from: string
    showProducts: boolean
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({products, from, showProducts}) => {
    const [showWorkflowDetails, setShowWorkflowDetails] = React.useState(false);
    const [showMobileWorkflowDetails, setShowMobileWorkflowDetails] = React.useState(false);
    const workflowDetails = [
        {
            title: 'Invoice',
            description: 'look professional, win more clients and manage your business from one place',
            icon: 'docs'
        },
        {
            title: 'Contract',
            description: 'Track expenses, maximize tax write-offs and estimate taxes without the headache',
            icon: 'contract'
        },
        {
            title: 'Proposal',
            description: 'Bonsais all-in-one cash hub: No fees and lightining fast payouts',
            icon: 'assignment'
        },
        {
            title: 'Forms & Automation',
            description: 'Boost client intake and get paid faster with Bonsai',
            icon: 'article'
        },
        {
            title: 'Client CRM',
            description: 'Add leads, clients and projects to Bonsai and keep everything in one place',
            icon: 'supervisor_account'
        },
        {
            title: 'Accounting',
            description: 'Track expenses, maximize tax write-offs and estimate taxes without the headache',
            icon: 'account_balance'
        },
        {
            title: 'Time Tracking',
            description: 'Bonsais all-in-one cash hub: No fees and lightining fast payouts',
            icon: 'alarm'
        },
        {
            title: 'Task Tracking',
            description: 'Boost client intake and get paid faster with Bonsai',
            icon: 'task'
        }
    ]

  return (
    <>
        {
            showProducts && (
                <div>
                <div className={`${from === 'desktop' ? 'left-[400px] shadow-lg top-13 w-85 h-[550px]' : 'top-15 left-0 w-full h-full'} bg-white absolute`}>
                  <div className='mt-5'>
                        {products.map((product, i) => (
                            <div className='' key={product.id}>
                                <div key={product.id} className={`${i === 0 ? ' flex justify-between items-center hover:bg-gray-50 p-8' : 'hover:bg-gray-100 p-8 justify-start'}`}
                                onMouseEnter={() => i === 0 && setShowWorkflowDetails(true)}
                                onMouseLeave={() => i === 0 && setShowWorkflowDetails(false)}
                                onClick={() => i === 0 && setShowMobileWorkflowDetails(!showMobileWorkflowDetails)}
                                >
                                    <div>
                                        <h1 className='text-[#30313c] text-lg'>{product.title}</h1>
                                        <p className='text-[#4C4D5F] text-md mt-2'>{product.description}</p>
                                    </div>
                                    {i === 0 && <i className='bx bx-chevron-right' style={{'color':'#565252,'}}  ></i>}
                                </div>
                                {i < 2 && <hr className=' text-gray-100 w-[300px] mx-auto' />}
                            </div>
                        ))}
                    </div>
                    <div>
                        {showWorkflowDetails && <WorkflowDropdown details={workflowDetails} from='desktop' />}
                        {showMobileWorkflowDetails && <WorkflowDropdown details={workflowDetails} from='mobile' />}
                    </div>
                </div>
              </div>
            )
        }
    </>
  )
}

export default ProductsDropdown
