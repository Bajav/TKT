import { useNavigate } from 'react-router-dom'
import "./backBtn.scss";

function BackBTN({btnName = "back",to = -1}) {
    const navigate = useNavigate();
  return (
    <div className='flexButtons'>
      <button  onClick={()=>{navigate(to)}}>{btnName}</button>
    </div>
  )
}

export default BackBTN