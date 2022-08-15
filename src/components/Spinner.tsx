import React from "react";
import "../css/Spinner.css"

const Spinner = () => {
  return (
   <div className=" mt-10">
     <div className="sk-chase ">
       <div className="sk-chase-dot"></div>
       <div className="sk-chase-dot"></div>
       <div className="sk-chase-dot"></div>
       <div className="sk-chase-dot"></div>
       <div className="sk-chase-dot"></div>
       <div className="sk-chase-dot"></div>
     </div>
   </div>
  );
};

export default Spinner;
