import React from 'react'

const AcceptTask = ({data}) => {

  console.log()

  return (
    <div>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-3'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded-md'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
        <h2 className='mt-5 text-2xl font-semibold'> {data.taskTitle}</h2>
        <p className='text-sm mt-3'>
          {data.taskDescription}
        </p>
            <div className='flex justify-between mt-5 '>
                   <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Completed</button> 
                   <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
            </div>
        </div>
    </div>
  )
}

export default AcceptTask