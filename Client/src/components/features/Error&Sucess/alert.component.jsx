import './alert.styles.scss';
import { motion } from 'motion/react';

function Alert(props) {
  return (
    <motion.div initial={{y:50, width:0,opacity:0 }} animate={{y:0, width:310, opacity:1}} transition={{duration:.5,type:"tween"}}   className="alertContainer">
        <img src={props.img} alt="alert image" />
        <motion.p initial={{x:-10,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:1,duration:2,type:"spring"}} >{props.alertText}</motion.p>
    </motion.div>
  )
}


export default Alert
