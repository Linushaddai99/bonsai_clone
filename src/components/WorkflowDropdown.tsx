import React from 'react'

type WorkflowDropdownProps = {
    details: {
        title: string;
        description: string;
        icon: string;
    }[];
    from: string;
}

const WorkflowDropdown: React.FC<WorkflowDropdownProps> = ({details, from}) => {
  return (
    <div>
        <div className={`${from === 'destop' ? ' w-[650px] top-5 left-[340px] shadow-xs h-[530px]' : 'h-full top-5 left-0 w-full' } bg-white p-6 absolute`}>
            <div className={`${from === 'destop' ? 'space-y-4 mt-4 grid grid-cols-2' : ''}`}>
                {details.map((detail, index) => (
                    <div key={index} className='flex items-start  w-[300px] mb-10'>
                        <span className="material-symbols-outlined text-xs text-[#7d7d7f] font-light">{detail.icon}</span>
                        <div>
                            <h1 className='text-[#7d7d7f] mb-3'>{detail.title}</h1>
                            {from === 'destop' && <p className='text-[#4C4D5F] text-sm'>{detail.description}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WorkflowDropdown
