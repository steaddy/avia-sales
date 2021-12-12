export default function reducer(state, action) {


  const forAllFilters = (value) => {
    const filterCopy = {...state.filter};
    for (let key in filterCopy) {
      filterCopy[key] = value;
    }
    return filterCopy;
  };

  const allToTrue = (filter) => {
    for (let key in filter) {
      if (key !== 'allTransfers' && filter[key] === false) {
        return filter;
      }
    }
    return forAllFilters(true);
  };

  switch (action.type) {
    case 'ALL_TICKETS':
      return {...state, allTickets: action.payload, sortedTickets: action.payload}

    case 'ALL_TRANSFERS':
      const res = forAllFilters(!state.filter.allTransfers);
      return {...state, filter: res};

    case 'TRANSFER_0': {
      let filter = {...state.filter, transfer_0: !state.filter.transfer_0, allTransfers: false};
      filter = allToTrue(filter);
      return {...state, filter};
    }

    case 'TRANSFER_1': {
      let filter = {...state.filter, transfer_1: !state.filter.transfer_1, allTransfers: false};
      filter = allToTrue(filter);
      return {...state, filter};
    }

    case 'TRANSFER_2': {
      let filter = {...state.filter, transfer_2: !state.filter.transfer_2, allTransfers: false};
      filter = allToTrue(filter);
      return {...state, filter};
    }

    case 'TRANSFER_3': {
      let filter = {...state.filter, transfer_3: !state.filter.transfer_3, allTransfers: false};
      filter = allToTrue(filter);
      return {...state, filter};
    }

    default:
      return state;
  }

};