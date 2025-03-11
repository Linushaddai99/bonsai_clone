import React from 'react'
type TemplatesPropsTyps = {
    templates: {
        id: number;
        title: string;
        features: string[];
        icon: string;
    }[]
    from: string
    showTemplates: boolean
}

const TemplatesDropdown: React.FC<TemplatesPropsTyps> = ({templates, from, showTemplates}) => {
    const [currentTemplate, setCurrentTemplate] = React.useState(0);
    const template = templates[currentTemplate];
  return (
    <div>
      <>
        {showTemplates && (
            <div className={`${from === 'desktop' ? 'left-[450px] w-[700px]' : 'left-0 w-full'} absolute top-14 bg-white shadow-lg`}>
                <div className='grid grid-cols-[250px_450px] mt-5'>
                    <div className=''>
                        {templates.map((template, index) => (
                            <div className=''>
                                <div key={index} className='flex items-start'>
                                    <div className='flex items-center p-4 mb-2 justify-start hover:bg-gray-100 w-full'
                                        onMouseEnter={() => setCurrentTemplate(index)}
                                        onMouseLeave={() => setCurrentTemplate(0)}
                                    >
                                        <div className='flex items-center'>
                                            <span className="material-symbols-outlined text-xs">{template.icon}</span>
                                            <h1 className=''>{template.title}</h1>
                                        </div>
                                        {index === currentTemplate && <i className='bx bx-chevron-right' style={{'color':'#565252,'}}  ></i>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    { from === 'desktop' && <div className='p-5 w'>
                        <h1 className='text-lg mb-5'>Featured {template.title}</h1>
                        {template.features.map((feature, i) => (
                            <div key={i} className='mb-3'>
                                <button className='border rounded cursor-pointer border-gray-200 p-7 w-full'>{feature}</button>
                            </div>
                        ))}
                        <div className='text-center'>
                            <a href="" className='text-[#00b289]'>See all Templates</a>
                        </div>
                    </div>}
                </div>
            </div>
        )}
      </>
    </div>
  )
}

export default TemplatesDropdown
