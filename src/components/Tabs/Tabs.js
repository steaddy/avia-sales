import React from 'react';
import Ticket from "../Ticket";
import { actionShowMoreTickets } from "../../redux/store/actionCreators";
import classes from './Tabs.module.scss';
import { connect } from "react-redux";
import { v4 } from 'uuid';

const Tabs = ({ state, dispatch }) => {

  const filterTickets = (state) => {
    const result = state.tickets.allTickets.filter(ticket => {
      const numberOfStops = ticket.segments[0].stops.length;
      if(numberOfStops === 0 && state.filter.no_stops) return ticket;
      if(numberOfStops === 1 && state.filter.one_stop) return ticket;
      if(numberOfStops === 2 && state.filter.two_stops) return ticket;
      if(numberOfStops === 3 && state.filter.three_stops) return ticket;
    });
    return result;
  };


  const ticketsToShow = (sorted, showMore = 0)=> {
    let res = [];
    for(let i = 0; i < state.ticketsToShow; i++) {
      if(sorted[i]) {
        res.push(sorted[i])
      } else {
        break;
      }
    }
    return res;
  };

  const showMoreTicketsButton = () => {
    let res = false;
     for (let key in state.filter)  {
       if(state.filter[key] === true) res = true;
    };
     return res;
  };

  const sortedView = filterTickets(state);

  const ticketsView = (sortedView) => {
    const res = sortedView.map((ticket) => {
      const stops = ticket.segments[0].stops.length;
      return(
        <Ticket
          key={v4()}
          ticket={ticket}
        />
      );
    })
    return ticketsToShow(res);
  };


  return (
    <div className={classes['tab']}>
      <div className={classes['btn-group']}>
        <button  className={classes['btn']}>Самый дешевый</button>
        <button className={classes['btn']}>Самый быстрый</button>
        {/*<button className={classes['btn']}>Оптимальный</button>*/}
      </div>
      {ticketsView(sortedView)}
      {
        showMoreTicketsButton()  &&
        <button className={classes['btn__more-tickets']} onClick={() => {
        dispatch(actionShowMoreTickets(5));
      }
      }>More Tickets</button>
      }
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const mapStateToProps = state => {
  return {state}
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);