import './flights.style.scss';
import BookedTicket from '../../components/BookedFlightTicket/ticket.component';

function BookedFlights() {
  return (
    <section className='tickets-page'>
      <div className="tickets-actions">
        <div className="back-arrow"></div>
        <div className="download-btn"></div>
      </div>
      <BookedTicket />
      <button className='submmit-btn'>
          go to check in
      </button>
    </section>
  )
}

export default BookedFlights