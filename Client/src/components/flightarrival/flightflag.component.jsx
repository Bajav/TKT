import "./flightflag.styles.scss";
import { motion } from "motion/react";

function FlightFlag(props) {
  return (
    <motion.div
      style={{ backgroundColor: props.bgColor }}
      initial={{ y: 50, width: 0, opacity: 0 }}
      animate={{ y: 0, width: 310, opacity: 1 }}
      transition={{ duration: 0.5, type: "tween" }}
      className="flag-container"
    >

      <div className="alerts">
        <div className="icon">
            {props.icon}
        </div>
        <motion.p
          style={{ color: props.fontColor }}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 2, type: "spring" }}
        >
          {props.alertText}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default FlightFlag;
