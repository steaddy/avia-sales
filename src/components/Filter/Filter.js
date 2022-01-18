import React, { useEffect } from 'react';
import Classes from './Filter.module.scss';
import FilterItem from "../FilterItem";
import { connect } from "react-redux";
import * as actionCreators from '../../redux/store/actionCreators';
import {bindActionCreators} from "redux";

const Filter = ({ getAllTickets, actionTransfer_1, actionTransfer_2, actionTransfer_3, actionTransfer_0, actionAllTransfers,  filter }) => {
  const { no_stops, one_stop, two_stops, three_stops, all  } = filter;

  useEffect(()=>{
    getAllTickets();
  }, []);


  return (
    <div className={Classes.filterContainer}>
      <h3 className="filter-header">Количество пересадок</h3>
      <FilterItem checked={all} id='all' value='all' name='Все'  action={actionAllTransfers}/>
      <FilterItem checked={no_stops} id='no-transfer' value='no-transfer' name='Без пересадок' action={actionTransfer_0} />
      <FilterItem checked={one_stop} id='one-transfer' value='one-transfer' name='1 Пересадка' action={actionTransfer_1}/>
      <FilterItem checked={two_stops} id='two-transfers' value='two-transfers' name='2 Пересадки' action={actionTransfer_2}/>
      <FilterItem checked={three_stops} id='three-transfers' value='three-transfers' name='3 Пересадки' action={actionTransfer_3} />
    </div>
  );
};

const mapStateToProps = store => {
  return {
    filter: store.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);