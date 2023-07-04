import { useState } from "react";
const TooltipBox=({direction})=>{
  let tooltip=`tooltips-${direction}`;
  console.log(tooltip);
  const [isHovering,setIsHovering]=useState(false);
  const handleMouseOver=()=>{
       setIsHovering(true);
  }
  const handleMouseOut=()=>{
       setIsHovering(false);
  }
  
return(
  <>
  <div className="btn-box">
     <button type='button' className="myBtn" onMouseOver={handleMouseOver}
  onMouseOut={handleMouseOut}>Hover Over Me...! </button><br></br>
   
    { isHovering &&(
    <div className= {tooltip}>
    <h1>Thanks for hover over me!</h1>
    </div>
      )
    }
          </div>
  </>
)
  
}
export {TooltipBox}