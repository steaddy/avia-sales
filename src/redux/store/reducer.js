import {combineReducers} from "redux";



// Reducer for property 'tickets'

const ticketsInitialState = {
    allTickets: [],
    sortedTickets: [],
}

function tickets(state = ticketsInitialState, action) {
    switch (action.type) {
        case 'ALL_TICKETS':
            return {allTickets: action.payload, sortedTickets: action.payload}
        default:
            return state;
    }
};



// Reducer for property 'ticketsToShow'

const ticketsToShow = (state = 5, action) => {
    switch (action.type) {
        case 'SHOW_MORE_TICKETS':
            return state + 5;
        default:
            return state;
    }
};



// Reducer for property 'filter'

const filterInitialState = {
    all: true,
    no_stops: true,
    one_stop: true,
    two_stops: true,
    three_stops: true,
};

const filter = (state = filterInitialState, action) => {

    const forAllFilters = (value) => {
        const filterCopy = {...state};
        for (let key in filterCopy) {
            filterCopy[key] = value;
        }
        return filterCopy;
    };

    const allToTrue = (filter) => {
        for (let key in filter) {
            if (key !== 'all' && filter[key] === false) {
                return filter;
            }
        }
        return forAllFilters(true);
    };

    switch (action.type) {
        case 'ALL_TRANSFERS':
            const res = forAllFilters(!state.all);
            return res;
        case 'TRANSFER_0': {
            let filter = {...state, no_stops: !state.no_stops, all: false};
            filter = allToTrue(filter);
            return filter;
        }
        case 'TRANSFER_1': {
            let filter = {...state, one_stop: !state.one_stop, all: false};
            filter = allToTrue(filter);
            return filter;
        }
        case 'TRANSFER_2': {
            let filter = {...state, two_stops: !state.two_stops, all: false};
            filter = allToTrue(filter);
            return filter;
        }
        case 'TRANSFER_3': {
            let filter = {...state, three_stops: !state.three_stops, all: false};
            filter = allToTrue(filter);
            return filter;
        }
        default:
            return state;
    }
};


export default combineReducers({
    tickets,
    ticketsToShow,
    filter
});

