import React,{useState,useEffect} from "react";
import "./Profilecourse.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Profilecourse = () =>{
const [stage,setStage]=useState(0);
 
useEffect(() => {
  const checked = parseInt(localStorage.getItem('checked'), 10);
  if (checked >= 15) {
    setStage(4);
  } else if (checked >= 12) {
    setStage(3);
  } else if (checked >= 8) {
    setStage(2);
  } else if (checked >= 4) {
    setStage(1);
  }
}, []);
return(
        <div className="profilecourse">
            <h2 ><i><i class="bi bi-bookmarks"></i>My Learning-<span style={{color:"#1d5863"}}>Active</span></i></h2>
            <h3>Web Development:  <span>CSS Module</span></h3>
            {stage===0 && <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
             <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-1-circle"></i></div>
                     </div>
                     <h4 class="step-title">Beginner</h4>
                   </div>
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-2-circle"></i></div>
                     </div>
                     <h4 class="step-title">Intermediate</h4>
                   </div>
                   
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-3-circle"></i></div>
                     </div>
                     <h4 class="step-title">Advanced</h4>
                   </div>
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-4-circle"></i></div>
                     </div>
                     <h4 class="step-title">Professional</h4>
                   </div>
         </div>}
            {stage===1 && <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
             <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-1-circle"></i></div>
                     </div>
                     <h4 class="step-title">Beginner</h4>
                   </div>
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-2-circle"></i></div>
                     </div>
                     <h4 class="step-title">Intermediate</h4>
                   </div>
                   
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-3-circle"></i></div>
                     </div>
                     <h4 class="step-title">Advanced</h4>
                   </div>
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-4-circle"></i></div>
                     </div>
                     <h4 class="step-title">Professional</h4>
                   </div>
         </div>}
     
         {stage===2 && <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
             <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-1-circle"></i></div>
                     </div>
                     <h4 class="step-title">Beginner</h4>
                   </div>
                   <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-2-circle"></i></div>
                     </div>
                     <h4 class="step-title">Intermediate</h4>
                   </div>
                   
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-3-circle"></i></div>
                     </div>
                     <h4 class="step-title">Advanced</h4>
                   </div>
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-4-circle"></i></div>
                     </div>
                     <h4 class="step-title">Professional</h4>
                   </div>
         </div>}
     
         {stage===3 && <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
             <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-1-circle"></i></div>
                     </div>
                     <h4 class="step-title">Beginner</h4>
                   </div>
                   <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-2-circle"></i></div>
                     </div>
                     <h4 class="step-title">Intermediate</h4>
                   </div>
                   
                   <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-3-circle"></i></div>
                     </div>
                     <h4 class="step-title">Advanced</h4>
                   </div>
                   <div class="step">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-4-circle"></i></div>
                     </div>
                     <h4 class="step-title">Professional</h4>
                   </div>
         </div>}
     
         {stage===4 && <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
             <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-1-circle"></i></div>
                     </div>
                     <h4 class="step-title">Beginner</h4>
                   </div>
                   <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-2-circle"></i></div>
                     </div>
                     <h4 class="step-title">Intermediate</h4>
                   </div>
                   
                   <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-3-circle"></i></div>
                     </div>
                     <h4 class="step-title">Advanced</h4>
                   </div>
                   <div class="step completed">
                     <div class="step-icon-wrap">
                       <div class="step-icon"><i class="bi bi-4-circle"></i></div>
                     </div>
                     <h4 class="step-title">Professional</h4>
                   </div>
         </div>}
         <button className="profilebutton1">Resume Learning</button>
         </div>
     
)
} 
export default Profilecourse ;