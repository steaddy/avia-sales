import React from 'react';
import Classes from './FilterItem.module.scss';
import {connect} from "react-redux";
import * as actionCreators from '../../redux/store/actionCreators';
import {bindActionCreators} from "redux";



const FilterItem = ({id, value='', name='Filter Item', action, checked }) => {

  return (
    <div className="FilterItem">
      <input type="checkbox" className={Classes.checkbox} id={id} value={value} checked={checked}  onChange={action}/>
      <label htmlFor={id}>{name}</label>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(/*mapStateToProps,*/ mapDispatchToProps)(FilterItem);