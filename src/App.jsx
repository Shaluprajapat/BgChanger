import React, { useState } from 'react'

const App = () => {
 const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200 px-5 py-5"
    style={{backgroundColor: color}}>
         <div className='fixed flex justify-center bottom-18 inset-x-0 px-2 flex-wrap'>
           <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-3xl'>
             <button 
             onClick={()=> setColor ("red")}
             className='outline-none px-4 rounded-xl shadow-lg '
             style={{backgroundColor:"red"}}>
                 red
           </button>
           <button 
           onClick={()=> setColor ("pink")}
           className='outline-none px-4 rounded-xl shadow-lg '
             style={{backgroundColor:"pink"}}>
                 pink
           </button>
           <button 
           onClick={()=> setColor ("yellow")}
           className='outline-none px-4 rounded-xl shadow-lg '
             style={{backgroundColor:"yellow"}}>
                 yellow
           </button>
           <button 
           onClick={()=> setColor ("green")}
           className='outline-none px-4 rounded-xl shadow-lg '
             style={{backgroundColor:"green"}}>
                 green
           </button>
           <button 
           
           onClick={()=> setColor ("blue")}
           className='outline-none px-4 rounded-xl shadow-lg '
             style={{backgroundColor:"blue"}}>
                 blue
           </button>
           </div>
         </div>

    </div>
  )
}

export default App

