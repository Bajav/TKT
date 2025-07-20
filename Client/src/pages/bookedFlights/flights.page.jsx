import './flights.style.scss';
import BookedTicket from '../../components/BookedFlightTicket/ticket.component';
// import TripDateContainer from '../../components/BookedFlightTicket/date-trip-container/tripdate.component';

function BookedFlights() {
  return (
    <section className='tickets-page'>
      <BookedTicket />
    </section>
  )
}

export default BookedFlights