import './alert.styles.scss';
import { motion } from 'motion/react';

function Alert(props) {
  return (
    <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.5,duration:1,type:"spring"}}   className="alertContainer">
        <img src={props.img} alt="alert image" />
        <p>{props.alertText}</p>
    </motion.div>
  )
}


export default Alert
