import './passenger.styles.scss';
import TicketHeader from '../../components/flightSearch/Ticket/ticketheader.component';

function Passengers() {
  return (
    <section className='passengers'>
       <TicketHeader originCode="ebb" originCity="kampala" originTime="12:05:00" departureCode="lhr" departureCity="london" departureTime="00:11:00" arrowColor="#222"/>
    </section>
  )
}

export default Passengers