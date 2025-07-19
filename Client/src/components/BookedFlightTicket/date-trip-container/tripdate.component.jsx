import './tripdate.styles.scss';
import straightBoarder from '../../../assets/icons/90deg.svg'

function TripDateContainer({tripType,dates}) {
  return (
    <div className='container'>
        <h3>{tripType}</h3>
        <img src={straightBoarder} />
        <h3>{dates}</h3>
    </div>
  )
}

export default TripDateContainer