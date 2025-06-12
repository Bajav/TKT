import React from 'react';
import moment from 'moment';
import './calender.scss';

const Heading = ({ date, changeMonth, resetDate }) => (
  <nav className="calendar--nav">
    <a onClick={() => changeMonth(date.month() - 1)}>&#8249;</a>
    <h1 onClick={resetDate}>
      {date.format('MMMM')} <small>{date.format('YYYY')}</small>
    </h1>
    <a onClick={() => changeMonth(date.month() + 1)}>&#8250;</a>
  </nav>
);

const Day = ({ currentDate, date, startDate, endDate, onClick }) => {
  const className = [];

  if (moment().isSame(date, 'day')) className.push('active');
  if (date.isSame(startDate, 'day')) className.push('start');
  if (date.isBetween(startDate, endDate, 'day')) className.push('between');
  if (date.isSame(endDate, 'day')) className.push('end');
  if (!date.isSame(currentDate, 'month')) className.push('muted');

  return (
    <span onClick={() => onClick(date)} className={className.join(' ')}>
      {date.date()}
    </span>
  );
};

const Days = ({ date, startDate, endDate, onClick }) => {
  const days = [];
  const labels = [];
  const firstDayOfMonth = moment(date).startOf('month');
  const daysInMonth = date.daysInMonth();

  // Weekday labels
  for (let i = 0; i < 7; i++) {
    labels.push(
      <span className="label" key={`label-${i}`}>
        {moment().day(i).format('ddd')}
      </span>
    );
  }

  // Days from previous month
  const prevMonth = moment(date).subtract(1, 'month');
  const prevMonthDays = prevMonth.daysInMonth();
  const firstDay = firstDayOfMonth.day();

  for (let i = firstDay - 1; i >= 0; i--) {
    const prevDate = moment(prevMonth).date(prevMonthDays - i);
    days.push(
      <Day
        key={prevDate.format('YYYY-MM-DD')}
        onClick={onClick}
        currentDate={date}
        date={prevDate}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    const thisDate = moment(date).date(i);
    days.push(
      <Day
        key={thisDate.format('YYYY-MM-DD')}
        onClick={onClick}
        currentDate={date}
        date={thisDate}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  // Days from next month to fill the calendar
  const totalCells = days.length;
  const nextMonth = moment(date).add(1, 'month');
  for (let i = 1; days.length < 42; i++) {
    const nextDate = moment(nextMonth).date(i);
    days.push(
      <Day
        key={nextDate.format('YYYY-MM-DD')}
        onClick={onClick}
        currentDate={date}
        date={nextDate}
        startDate={startDate}
        endDate={endDate}
      />
    );
  }

  return (
    <nav className="calendar--days">
      {labels}
      {days}
    </nav>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      startDate: moment().subtract(5, 'days'),
      endDate: moment().add(3, 'days'),
    };
  }

  resetDate = () => {
    this.setState({ date: moment() });
  };

  changeMonth = (month) => {
    const updatedDate = moment(this.state.date).month(month);
    this.setState({ date: updatedDate });
  };

  changeDate = (selectedDate) => {
    let { startDate, endDate } = this.state;

    if (
      !startDate ||
      selectedDate.isBefore(startDate, 'day') ||
      !startDate.isSame(endDate, 'day')
    ) {
      startDate = moment(selectedDate);
      endDate = moment(selectedDate);
    } else if (
      selectedDate.isSame(startDate, 'day') &&
      selectedDate.isSame(endDate, 'day')
    ) {
      startDate = null;
      endDate = null;
    } else if (selectedDate.isAfter(startDate, 'day')) {
      endDate = moment(selectedDate);
    }

    this.setState({ startDate, endDate });
  };

  render() {
    const { date, startDate, endDate } = this.state;

    return (
      <div className="calendar">
        <Heading
          date={date}
          changeMonth={this.changeMonth}
          resetDate={this.resetDate}
        />
        <Days
          date={date}
          startDate={startDate}
          endDate={endDate}
          onClick={this.changeDate}
        />
      </div>
    );
  }
}

export default Calendar;