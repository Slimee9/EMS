import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-3'>
            <div className='flex justify-between  items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded-md'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-3'>
        {data.taskDescription}
        </p>
            <div className='mt-5'>
                <button className='bg-blue-800 w-full py-1 px-2 text-sm rounded'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask