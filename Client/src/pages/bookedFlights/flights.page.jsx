import './flights.style.scss';
import BookedTicket from '../../components/BookedFlightTicket/ticket.component';


function BookedFlights() {
  return (
    <section className='tickets-page'>
      <BookedTicket />
    </section>
  )
}

export default BookedFlights