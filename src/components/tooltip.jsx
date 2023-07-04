import {useState} from 'react';
import {TooltipBox}   from './tooltip-box';
const Tooltip=()=>{
   const [position,setPosition]=useState("bottom");
  const handleposition=(e)=>{
  // console.log(e.target.value);
    setPosition(e.target.value);
  }
  
  return(
      <>
        <div  className="container">
          <div className='input-box'>
       <lable for="position-select">Enter Position Of Tooltip</lable><br></br><br></br>
          <select name="selectPosition" className="position-select" 
  onChange={(e)=>handleposition(e)}
            >
           <option value=''>Select Tooltip Position</option>
           <option value="right">Right</option>
           <option value="left">Left</option>
           <option value="top">Top</option>
           <option value='bottom'>Bottom</option>
          
          </select>
        </div>
         <TooltipBox direction={position}/>
        </div>
      </>
  )
}

export {Tooltip};