import React from 'react';
import Ticket from "../Ticket";
import classes from './Tabs.module.scss';
import { connect } from "react-redux";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import { v4 } from 'uuid';

const Tabs = ({ state }) => {

  const filterTickets = (state) => {
    const result = state.allTickets.filter(ticket => {
      const stops = ticket.segments[0].stops.length;
      if(stops === 0 && state.filter.transfer_0) return ticket;
      if(stops === 1 && state.filter.transfer_1) return ticket;
      if(stops === 2 && state.filter.transfer_2) return ticket;
      if(stops === 3 && state.filter.transfer_3) return ticket;
    });
    return result;
  };


  const getFirstFiveTickets = (sorted)=> {
    let res = [];
    for(let i = 0; i < 5; i++) {
      if(sorted[i]) {
        res.push(sorted[i])
      } else {
        break;
      }
    }
    return res;
  };

  const sortedView = filterTickets(state);


  const ticketsView = (sortedView) => {
    console.log(sortedView[0]);
    const res = sortedView.map((ticket) => {
      const stops = ticket.segments[0].stops.length;
      return(
        <Ticket
          key={v4()}
          ticket={ticket}
        />
      );
    })
    return getFirstFiveTickets(res);
  };

  return (
    <div className={classes['tab']}>
      <div className={classes['btn-group']}>
        <button  className={classes['btn']}>Самый дешевый</button>
        <button className={classes['btn']}>Самый быстрый</button>
        {/*<button className={classes['btn']}>Оптимальный</button>*/}
      </div>
      {ticketsView(sortedView)}
    </div>
  );
};

const mapStateToProps = state => {
  return {state}
};

export default connect(mapStateToProps)(Tabs);