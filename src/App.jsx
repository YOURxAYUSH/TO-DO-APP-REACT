import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Button from './Button'
import clsx from 'clsx'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import { FaHourglass } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';




function App() {

  const [todo,setTodo]=useState("")
  const [todos,setTodos]=useState([])
  const [showFinished,setShowFinished] = useState(false)

  useEffect(() => {
    const todoString = localStorage.getItem('todos');
    if (todoString) {
      const loadedTodos = JSON.parse(todoString); 
      setTodos(loadedTodos);
    }
  }, []);

 
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos)); 
    }
  }, [todos]);

  
 
  const handleSubmit=()=>{
     
    
    if(!todo.trim()) return ;
    toast( <div className='flex items-center gap-2'>
      🦄 Todo Submitted Successfully!
    </div>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      })
    setTodos([...todos,{id:uuidv4(),todo, isCompleted:false}])
    setTodo("")
  
    

  }

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }

  const handleCheckbox=(e)=>{
   
    !showFinished ?
    toast( <div className='flex items-center gap-2'>
     <IoMdCheckbox/> Nailed It!
    </div>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      }):toast( <div className='flex items-center gap-2'>
        <FaHourglass/> Still Pending!
      </div>, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false, 
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        })
        
   let id = e.currentTarget.name
   let index = todos.findIndex(item=>{
    return item.id == id;}
    
 )

     let newTodos = [...todos]
     newTodos[index].isCompleted = !newTodos[index].isCompleted
     setTodos(newTodos)
    
   
  }

  const handleDelete  = (e, isFromEdit = false)=>{
   !isFromEdit ? toast( <div className='flex items-center gap-2'>
      <MdDelete /> Deleted Successfully!
    </div>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      }):""
   let id = e.currentTarget.name 
   let index = todos.findIndex(item=>{
    return item.id==id
   })

   let newTodos=[...todos]
   newTodos.splice(index,1)
   setTodos(newTodos)
 

  }

  const handleEdit=(e)=>{
    toast( <div className='flex items-center gap-2'>
      <FaEdit/> Edit Todo!
    </div>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      });
  
  let id = e.currentTarget.name 
  let index = todos.findIndex(item=>{
    return item.id == id
  })
 
  setTodo(todos[index].todo) 
  handleDelete(e,true)
 

    
  }

  const handleshowFinished=()=>{
    
    !showFinished ?
    toast( <div className='flex items-center gap-2'>
      <FaHourglass/>  Closed Tasks
    </div>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      }):toast( <div className='flex items-center gap-2'>
        <IoMdCheckbox/> Tasks in Progress
      </div>, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        })
    
    setShowFinished(!showFinished)
     
   
  }

  const handleCopy = (e)=>{
    toast( <div className='flex items-center gap-2'>
      <FaCopy/> Copied To Clipboard!
    </div>, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      
      })
    let a = e.target.name
    navigator.clipboard.writeText(a)
    
    
  }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={true}
closeOnClick={true}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" 
/>
    <Navbar/>
    <div className='md:m-20 m-5 bg-purple-100 min-h-[70vh] py-5  border-2 border-purple-400 rounded-lg'>
      <div className=' md:ml-36 ml-3  font-extrabold md:text-2xl   text-xl w-fit  md:px-5 py-2  gap-5 text-purple-900 mb-5  '>Your Personal Task Manager - Manage Your Todos at One Place</div>
      <h1 className='text-2xl font-extrabold md:ml-13 ml-3 mb-3 text-purple-600  '>Add Your Task Here :- </h1>
    <div className='flex md:ml-12 ml-2 gap-5  md:gap-10'>
      <input type="text" onChange={handleChange} value={todo} placeholder="Type task you want to schedule" className='md:w-1/2 w-3/4 bg-neutral-100 md:px-10 px-3 py-2 rounded-lg border-2 border-purple-200 outline-none' />
      
       <Button  onClick={handleSubmit} className="mr-4" buttonName="Submit"/>
       </div>
      <div className="todos mr-5">
 
        
  <div className='mt-10 md:ml-13 ml-2 font-extrabold text-xl flex items-center border-2 border-purple-200 w-fit bg-purple-200 px-5 py-2 rounded-lg gap-5 text-purple-900 '> <input type="checkbox"  onChange={handleshowFinished} checked={showFinished} />Show Finished </div>  

      <h1  className='text-2xl font-extrabold mt-3 ml-2 md:ml-13 mb-3 text-purple-600  '>Your Tasks :-</h1>
      {todos.length==0 && <div className='bg-purple-200 border-2 border-purple-700 text-purple-900 font-extrabold  w-fit rounded-md px-10 py-5 align-middle ml-3 md:ml-36 mt-20'>HEY WELCOME TO YOUR PERSONAL TASK MANAGER :- You Have Not Added Any Task.</div>}
      {todos.filter(item=>(showFinished ? item.isCompleted:true)).map((item,index)=>{
      
      const buttonLabel = item.isCompleted ? <FaHourglass /> : <IoMdCheckbox />
  
      return (showFinished || !item.isCompleted) &&  <div key={index}  className='flex flex-col md:flex-row justify-between md:items-center gap-5 ml-2 md:ml-12 mt-1 mb-3'>
     
      <span className={clsx("md:w-3/4 w-full px-2 py-3 bg-purple-200  text-purple-800 font-bold border-1 align-middle border-purple-300 rounded-md break-words " , { "line-through" : item.isCompleted})}>{item.todo}</span>
      <div className='flex justify-between  mb-8 md:mb-0 border-2 border-purple-500 p-2 md:bored  gap-3 '>
       <Button name={item.id} onClick={handleEdit} buttonName={<FaEdit />}/>
       <Button name={item.id} onClick={handleDelete} buttonName={<MdDelete />} />
       <Button name={item.id} onClick={handleCheckbox}  buttonName={buttonLabel} />
       <Button name={item.todo} onClick={handleCopy} buttonName={<FaCopy />}/>
      
      </div>
      </div>
      

})}
    </div>

    </div>

   

    </>
  )
}

export default App