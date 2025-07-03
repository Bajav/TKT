import { useNavigate } from 'react-router-dom'
import "./backBtn.scss";

function BackBTN({btnName = "back",to = -1,onClick}) {
    const navigate = useNavigate();
  return (
    <div className='flexButtons'>
      <button  onClick={onClick}>{btnName}</button>
    </div>
  )
}

export default BackBTN