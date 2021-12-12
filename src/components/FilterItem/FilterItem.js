import React from 'react';
import Classes from './FilterItem.module.scss';
import {connect} from "react-redux";
import * as actionCreators from './../../store/actionCreators';
import {bindActionCreators} from "redux";



const FilterItem = ({id, value='', name='Filter Item', /*filter_1, actionTransfer_1, getAllTickets,*/ action, checked }) => {


/*
  const testFunc = ({target}) => {

/!*
    getTickets.get('/search').
      then(res =>
    getTickets.get(`/tickets?searchId=${res.data.searchId}`)
    ).
      then(res=> console.log(res.data.tickets[100]))

*!/
    getAllTickets();

    actionTransfer_1(target.checked);
    // console.log("Target ", target.checked);
    // console.log('State filter 1 ', filter_1);
  };*/


  return (
    <div className="FilterItem">
      <input type="checkbox" className={Classes.checkbox} id={id} value={value} checked={checked}  onChange={action}/>
      <label htmlFor={id}>{name}</label>
    </div>
  );
};
/*
const mapStateToProps = state => {

  return {
    filter_1: state.filter.transfer_1,
  };
};*/

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(/*mapStateToProps,*/ mapDispatchToProps)(FilterItem);