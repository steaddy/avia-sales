import getTickets from "../api";

export const getAllTickets = () => async dispatch => {
  let res = await getTickets.get('/search');
  res = await getTickets.get(`/tickets?searchId=${res.data.searchId}`);

  dispatch (
    {
      type: 'ALL_TICKETS',
      payload: res.data.tickets
    }
  );
};

export const actionAllTransfers = () => {
  return {
    type: 'ALL_TRANSFERS',
  };
};
export const actionTransfer_0 = () => {
  return {
    type: 'TRANSFER_0',
  };
};

export const actionTransfer_1 = () => {
  return {
    type: 'TRANSFER_1',
  };
};

export const actionTransfer_2 = value => {
  return {
    type: 'TRANSFER_2',
    payload: value,
  };
};

  export const actionTransfer_3 = value => {
    return {
      type: 'TRANSFER_3',
      payload: value,
    };
};

