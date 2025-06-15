import './alert.styles.scss';

function Alert(props) {
  return (
    <div className="alertContainer">
        <img src={props.img} alt="alert image" />
        <p>{props.alertText}</p>
    </div>
  )
}


export default Alert
