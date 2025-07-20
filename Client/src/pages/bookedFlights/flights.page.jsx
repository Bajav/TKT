import './flights.style.scss';
import BookedTicket from '../../components/BookedFlightTicket/ticket.component';
import BackBTN from '../../components/features/BackButton/BackBTN';
import { ArrowDown } from 'lucide-react';

function BookedFlights() {
  return (
    <section className='tickets-page'>
      <div className="tickets-actions">
        <div className="back-arrow">
          <BackBTN />
        </div>
        <div className="download-btn">
          <ArrowDown size={12} color='#f7f7f7' />
          <h4>download</h4>
        </div>
      </div>
      <BookedTicket />
      <BookedTicket />
      <button className='submmit-btn'>
          go to check in
      </button>
    </section>
  )
}

export default BookedFlights