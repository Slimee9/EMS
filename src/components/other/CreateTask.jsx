import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] =  useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newtask, setNewTask] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault()

        const task = {
            taskTitle, 
            taskDescription, 
            taskDate, 
            category, 
            active: false, 
            newTask: true, 
            failed: false, 
            completed: false
        };
        const updatedUserData = userData.map((user) => {
            if (user.firstName === asignTo) {
                return {
                    ...user,
                    tasks: [...user.tasks, task], // Add task to tasks array
                    taskSummary: {
                        ...user.taskSummary,
                        newTask: user.taskSummary.newTask + 1
                    }
                };
            }
            return user;
        });
        // Update the context with modified data
        setUserData(updatedUserData);
        // $console.log(taskTitle, taskDescription, taskDate,asignTo,category)
        // setNewTask({taskTitle, taskDescription, taskDate,category,active:false,newTask:true,failed:false,completed:false})
       
        // $console.log(task)
        // const data = userData
        // $console.log(data)

        // data.forEach((e)=>{
        //     if(asignTo == e.firstName){
        //         // $console.log(e.tasks)
        //         e.tasks.push(newtask)
        //         // $console.log(e)
        //         e.taskSummary.newTask = e.taskSummary.newTask+1  
        //     }
        // })
        // setUserData(data)
        console.log(updatedUserData)

        setTaskTitle('')
        setTaskDate('')
        setTaskDescription('')
        setCategory('')
        setAsignTo('')
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
    <form 
        action=""
         onSubmit={(e)=>{
            submitHandler(e)
         }} 
         className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                 value={taskTitle}
                 onChange={(e)=>{
                    setTaskTitle(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a EMS web' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                value={taskDate}
                onChange={(e)=>{
                   setTaskDate(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input
                value={asignTo}
                onChange={(e)=>{
                   setAsignTo(e.target.value)
                }}
                 className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
            </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input
                value={category}
                onChange={(e)=>{
                   setCategory(e.target.value)
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,dev,etc' />
            </div>
        </div>
        <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea
            value={taskDescription}
            onChange={(e)=>{
               setTaskDescription(e.target.value)
            }}
            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols='30' rows='10'></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded-md text-sm mt-4 w-full transform active:scale-95'>Create Task</button>
        </div>
    </form>
</div>
  )
}

export default CreateTask