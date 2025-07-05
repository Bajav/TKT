import { useNavigate } from 'react-router-dom'
import "./backBtn.scss";
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

function BackBTN({btnName = "back",to = -1,onClick}) {
    const navigate = useNavigate();
    const [style,setStyles]= useState(false);
    const changeColor ={
      color :"#3e3e3e"
    }

  return (
    <div className='flexButtons'>
      <button  onClick={onClick}>{<ArrowLeft style={style ? {changeColor}:{color:"#fff"}}  onClick={()=>setStyles(true)} size={20}/>}</button>
    </div>
  )
}

export default BackBTN