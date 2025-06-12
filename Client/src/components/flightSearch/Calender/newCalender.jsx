import {useEffect,useRef} from 'react'
import './calender.scss';

    const DatePicker = () => {
      const departureRef = useRef(null);
      const returnRef = useRef(null);

      useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const fpDeparture = flatpickr(departureRef.current, {
          minDate: today,
          onChange: (selectedDates) => {
            if (selectedDates.length > 0) {
              const minReturnDate = new Date(selectedDates[0]);
              minReturnDate.setDate(minReturnDate.getDate() + 1);
              fpReturn.set('minDate', minReturnDate);
              if (!returnRef.current.value) {
                fpReturn.setDate(minReturnDate);
              }
            }
          },
        });

        const fpReturn = flatpickr(returnRef.current, {
          minDate: today,
          disable: [function(date) {
            return date < today;
          }],
        });

        return () => {
          fpDeparture.destroy();
          fpReturn.destroy();
        };
      }, []);

      return (
        <div className="date-picker-container">
          <input ref={departureRef} className="date-input" placeholder="Departure Date" />
          <input ref={returnRef} className="date-input" placeholder="Return Date" />
        </div>
      );
    };

export default DatePicker