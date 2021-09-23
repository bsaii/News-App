import React from 'react'

const Sources = ({sortedSources, filteredSources}) => {
        

    return (
        <div className='w-1/4 bg-gray-400 p-20'>
            <h1 className='text-4xl font-medium'>Sources</h1>
            <p className='text-sm text-gray-800'>showing all from Tech News</p>
            
            {/* button */}
            {
                sortedSources.map((source, index) => (
                    <div key={index} className='flex flex-col mt-7 pl-3'>
                        <button onClick={() => filteredSources(source)} className='bg-blue-700 p-3 rounded mb-3 hover:bg-blue-500 active:bg-blue-900'>{ source }</button>
                    </div>
                ))
            }
            
           
            
        </div>
    )
}

export default Sources
