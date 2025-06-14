import React, { useState, useEffect, useRef, Fragment } from "react";
import "./calender.scss";

const FlightCalendar = ({
  onDateSelect,
  onRangeSelect,
  placeholder = "Select date",
  isRangePicker = false,
  disabled = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });
  const [viewDate, setViewDate] = useState(new Date());
  const [hoverDate, setHoverDate] = useState(null);

  const calendarRef = useRef(null);
  const inputRef = useRef(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Close calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    if (isRangePicker) {
      return (
        (selectedRange.start &&
          date.toDateString() === selectedRange.start.toDateString()) ||
        (selectedRange.end &&
          date.toDateString() === selectedRange.end.toDateString())
      );
    }
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const isInRange = (date) => {
    if (!isRangePicker || !selectedRange.start) return false;

    const rangeEnd = selectedRange.end || hoverDate;
    if (!rangeEnd) return false;

    const start = selectedRange.start;
    const end = rangeEnd;

    return date > start && date < end;
  };

  const handleDateClick = (date) => {
    if (isDateDisabled(date)) return;

    if (isRangePicker) {
      if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
        // Start new range
        setSelectedRange({ start: date, end: null });
      } else if (selectedRange.start && !selectedRange.end) {
        // Complete range
        const start = selectedRange.start;
        const end = date;

        if (end < start) {
          setSelectedRange({ start: end, end: start });
          if (onRangeSelect) onRangeSelect({ start: end, end: start });
        } else {
          setSelectedRange({ start, end });
          if (onRangeSelect) onRangeSelect({ start, end });
        }
        setIsOpen(false);
      }
    } else {
      setSelectedDate(date);
      if (onDateSelect) onDateSelect(date);
      setIsOpen(false);
    }
  };

  const handleMonthChange = (direction) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(viewDate.getMonth() + direction);
    setViewDate(newDate);
  };

  const handleYearChange = (direction) => {
    const newDate = new Date(viewDate);
    newDate.setFullYear(viewDate.getFullYear() + direction);
    setViewDate(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getInputValue = () => {
    if (isRangePicker) {
      if (selectedRange.start && selectedRange.end) {
        return `${formatDate(selectedRange.start)} - ${formatDate(
          selectedRange.end
        )}`;
      } else if (selectedRange.start) {
        return `${formatDate(selectedRange.start)} - Select end date`;
      }
      return "";
    }
    return selectedDate ? formatDate(selectedDate) : "";
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(viewDate);
    const firstDay = getFirstDayOfMonth(viewDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="calendar__day calendar__day--empty"
        ></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
      const disabled = isDateDisabled(date);
      const today = isToday(date);
      const selected = isSelected(date);
      const inRange = isInRange(date);

      days.push(
        <div
          key={day}
          className={`calendar__day ${
            disabled ? "calendar__day--disabled" : ""
          } ${today ? "calendar__day--today" : ""} ${
            selected ? "calendar__day--selected" : ""
          } ${inRange ? "calendar__day--in-range" : ""}`}
          onClick={() => handleDateClick(date)}
          onMouseEnter={() => setHoverDate(date)}
          onMouseLeave={() => setHoverDate(null)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className={`flight-calendar ${className}`}>
      <div
        ref={inputRef}
        className={`flight-calendar__input ${
          isOpen ? "flight-calendar__input--open" : ""
        } ${disabled ? "flight-calendar__input--disabled" : ""}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <input
          type="text"
          value={getInputValue()}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          className="flight-calendar__input-field"
        />
        <div className="flight-calendar__input-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      </div>

      {isOpen && (
        <div ref={calendarRef} className="flight-calendar__dropdown">
          <div className="calendar__header">
            <button
              className="calendar__nav-btn"
              onClick={() => handleMonthChange(-1)}
              type="button"
            >
              ‹
            </button>

            <div className="calendar__title">
              {months[viewDate.getMonth()]} {viewDate.getFullYear()}
            </div>

            <button
              className="calendar__nav-btn"
              onClick={() => handleMonthChange(1)}
              type="button"
            >
              ›
            </button>
          </div>

          <div className="calendar__weekdays">
            {weekDays.map((day) => (
              <div key={day} className="calendar__weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar__days">{renderCalendarDays()}</div>

          {isRangePicker && selectedRange.start && !selectedRange.end && (
            <div className="calendar__range-info">
              Select end date for your trip
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// usage

const FlightSearchExample = () => {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState({ start: null, end: null });
  const [isRangeEnabled, setIsRangeEnabled] = useState(false);

  const handleDepartureSelect = (date) => {
    setDepartureDate(date);
    console.log("Departure date:", date);
  };

  const handleReturnRangeSelect = (range) => {
    setReturnDate(range);
    console.log("Return date range:", range);
  };

  return (
    <Fragment>
      {/* <div style={{ marginBottom: '20px' }}>
        <label>
          <input
            type="checkbox"
            checked={isRangeEnabled}
            onChange={(e) => setIsRangeEnabled(e.target.checked)}
            style={{ marginRight: '8px' }}
          />
          Enable Range Picker
        </label>
      </div> */}
      {/*  style={{ display: 'grid', gridTemplateColumns: isRangeEnabled ? '1fr' : '1fr 1fr', gap: '20px' } */}
      <Fragment>
        {!isRangeEnabled && (
          <div className="calender">
            <FlightCalendar
              onDateSelect={handleDepartureSelect}
              placeholder="Select departure date"
            />
            <FlightCalendar
              onDateSelect={handleDepartureSelect}
              placeholder="Select return date"
            />
          </div>
        )}

        {isRangeEnabled && (
          <Fragment>
            <FlightCalendar
              onRangeSelect={handleReturnRangeSelect}
              placeholder="Select travel dates"
              isRangePicker={true}
            />
          </Fragment>
        )}
      </Fragment>

      {/* <div style={{ marginTop: '30px', padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
        <h4>Selected Dates:</h4>
        {!isRangeEnabled ? (
          <p><strong>Departure:</strong> {departureDate ? departureDate.toLocaleDateString() : 'Not selected'}</p>
        ) : (
          <p>{
            returnDate.start && returnDate.end 
              ? `${returnDate.start.toLocaleDateString()} - ${returnDate.end.toLocaleDateString()}`
              : 'Not selected'
          }</p>
        )}
      </div> */}
    </Fragment>
  );
};

export default FlightSearchExample;
