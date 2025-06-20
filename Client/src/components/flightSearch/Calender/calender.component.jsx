import React, { useState, useEffect, useRef } from "react";
import "./calender.scss";

const DatePicker = ({
  onDateSelect,
  onRangeSelect,
  placeholder = "Select date",
  isRangePicker = false,
  enableRange = true,
  disabled = false,
  className = "",
  rangePrompt = "Select expiry date",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRange, setSelectedRange] = useState({
    start: null,
    end: null,
  });
  const [viewDate, setViewDate] = useState(new Date());
  const [hoverDate, setHoverDate] = useState(null);
  const [month, setMonth] = useState(viewDate.getMonth());
  const [year, setYear] = useState(viewDate.getFullYear());

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

  useEffect(() => {
    setViewDate(new Date(year, month));
  }, [month, year]);

  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const isToday = (date) => date.toDateString() === new Date().toDateString();
  const isSelected = (date) => {
    if (isRangePicker && enableRange) {
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
    if (!(isRangePicker && enableRange) || !selectedRange.start) return false;
    const rangeEnd = selectedRange.end || hoverDate;
    if (!rangeEnd) return false;
    return date > selectedRange.start && date < rangeEnd;
  };

  const handleDateClick = (date) => {
    if (isRangePicker && enableRange) {
      if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
        setSelectedRange({ start: date, end: null });
      } else if (selectedRange.start && !selectedRange.end) {
        const start = selectedRange.start;
        const end = date;
        if (end < start) {
          setSelectedRange({ start: end, end: start });
          onRangeSelect && onRangeSelect({ start: end, end: start });
        } else {
          setSelectedRange({ start, end });
          onRangeSelect && onRangeSelect({ start, end });
        }
        setIsOpen(false);
      }
    } else {
      setSelectedDate(date);
      onDateSelect && onDateSelect(date);
      setIsOpen(false);
    }
  };

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  const getInputValue = () => {
    if (isRangePicker && enableRange) {
      if (selectedRange.start && selectedRange.end) {
        return `${formatDate(selectedRange.start)} - ${formatDate(
          selectedRange.end
        )}`;
      } else if (selectedRange.start) {
        return `${formatDate(selectedRange.start)} - ${rangePrompt}`;
      }
      return "";
    }
    return selectedDate ? formatDate(selectedDate) : "";
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(viewDate);
    const firstDay = getFirstDayOfMonth(viewDate);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div
          key={`empty-${i}`}
          className="calendar__day calendar__day--empty"
        ></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
      const today = isToday(date);
      const selected = isSelected(date);
      const inRange = isInRange(date);

      days.push(
        <div
          key={day}
          className={`calendar__day ${today ? "calendar__day--today" : ""} ${
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
      </div>

      {isOpen && (
        <div ref={calendarRef} className="flight-calendar__dropdown">
          <div className="calendar__header">
            <select
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              {months.map((m, i) => (
                <option key={i} value={i}>
                  {m}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {Array.from({ length: 190 }, (_, i) => 1900 + i).map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          <div className="calendar__weekdays">
            {weekDays.map((day) => (
              <div key={day} className="calendar__weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar__days">{renderCalendarDays()}</div>

          {isRangePicker &&
            enableRange &&
            selectedRange.start &&
            !selectedRange.end && (
              <div className="calendar__range-info">{rangePrompt}</div>
            )}
        </div>
      )}
    </div>
  );
};

export default DatePicker;
