import React from 'react';
import Classes from './Ticket.module.scss';

const Ticket = ({ticket: {price, carrier, stops, segments}}) => {

  const originDate_0 = new Date(segments[0].date).getTime();
  const destinationDate_0 = originDate_0 + segments[0].duration * 60 * 1000;

  const originDate_1 = new Date(segments[1].date).getTime();
  const destinationDate_1 = originDate_1 + segments[1].duration * 60 * 1000;

  const getHoursAndMinutes = ms => {
    const date = new Date(ms);
    return `${date.getHours() < 9 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()}`;
  };

  const transfersQuantity = stops => {
    const num = stops.length;
    switch (num) {
      case 0:
        return 'Без пересадок';
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      default:
        return `${num} пересадки`;
    }
    ;
  };

  const transfersNames = stops => {
    let res = '';
    for (let n = 0; n < stops.length; n++) {
      res = res + stops[n] + ', ';
    }
    return res.slice(0, -2);
  };

  const flightTime = duration => {
    let time = '';
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    time = `${hours}ч ${minutes}м`
    return time;
  };

  let start = new Date(segments[0].date);
  start = start.getTime();
  let dur = segments[0].duration * 60 * 1000;
  let finish = start + dur;
  finish = new Date(finish);

  return (
    <div className={Classes['ticket']}>
      <div className={Classes['header']}>
        <div className={Classes['ticket__price']}>{price} р</div>
        <div>{carrier}</div>
      </div>


      <div className={Classes['fly']}>
        <div>
          <div className={Classes['ticket__header']}>{`${segments[0].origin} - ${segments[0].destination}`}</div>
          <div className={Classes['ticket__content']}>{
            getHoursAndMinutes(originDate_0) + ' - ' +
            getHoursAndMinutes(destinationDate_0)
          }</div>
        </div>
        <div>
          <div className={Classes['ticket__header']}>В пути</div>
          <div className={Classes['ticket__content']}>{flightTime(segments[0].duration)}</div>
        </div>
        <div>
          <div className={Classes['ticket__header']}>{transfersQuantity(segments[0].stops)}</div>
          <div className={Classes['ticket__content']}>{transfersNames(segments[0].stops)}</div>
        </div>
      </div>


      <div className={Classes['fly']}>
        <div>
          <div className={Classes['ticket__header']}>{`${segments[1].origin} - ${segments[1].destination}`}</div>
          <div className={Classes['ticket__content']}>{
            getHoursAndMinutes(originDate_1) + ' - ' +
            getHoursAndMinutes(destinationDate_1)
          }</div>
        </div>
        <div>
          <div className={Classes['ticket__header']}>В пути</div>
          <div className={Classes['ticket__content']}>{flightTime(segments[1].duration)}</div>
        </div>
        <div>
          <div className={Classes['ticket__header']}>{transfersQuantity(segments[1].stops)}</div>
          <div className={Classes['ticket__content']}>{transfersNames(segments[1].stops)}</div>
        </div>
      </div>


    </div>
  );
};

export default Ticket;