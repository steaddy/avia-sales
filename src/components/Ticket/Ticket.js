import React from 'react';
import * as Helpers from './Helpers';
import Classes from './Ticket.module.scss';

const Ticket = ({ticket: {price, carrier, stops, segments}}) => {

    const originDateToGo = new Date(segments[0].date).getTime();
    const destinationDateToGo = originDateToGo + segments[0].duration * 60 * 1000;

    const originDateToComeBack = new Date(segments[1].date).getTime();
    const destinationDateToComeBack = originDateToComeBack + segments[1].duration * 60 * 1000;

    return (
        <div className={Classes['ticket']}>
            <div className={Classes['header']}>
                <div className={Classes['ticket__price']}>{price} р</div>
                <div>{carrier}</div>
            </div>


            <div className={Classes['fly']}>
                <div>
                    <div
                        className={Classes['ticket__header']}>{`${segments[0].origin} - ${segments[0].destination}`}</div>
                    <div className={Classes['ticket__content']}>{
                        Helpers.getHoursAndMinutes(originDateToGo) + ' - ' +
                        Helpers.getHoursAndMinutes(destinationDateToGo)
                    }</div>
                </div>
                <div>
                    <div className={Classes['ticket__header']}>В пути</div>
                    <div className={Classes['ticket__content']}>{Helpers.flightTime(segments[0].duration)}</div>
                </div>
                <div>
                    <div className={Classes['ticket__header']}>{Helpers.transfersQuantity(segments[0].stops)}</div>
                    <div className={Classes['ticket__content']}>{Helpers.transfersNames(segments[0].stops)}</div>
                </div>
            </div>


            <div className={Classes['fly']}>
                <div>
                    <div
                        className={Classes['ticket__header']}>{`${segments[1].origin} - ${segments[1].destination}`}</div>
                    <div className={Classes['ticket__content']}>{
                        Helpers.getHoursAndMinutes(originDateToComeBack) + ' - ' +
                        Helpers.getHoursAndMinutes(destinationDateToComeBack)
                    }</div>
                </div>
                <div>
                    <div className={Classes['ticket__header']}>В пути</div>
                    <div className={Classes['ticket__content']}>{Helpers.flightTime(segments[1].duration)}</div>
                </div>
                <div>
                    <div className={Classes['ticket__header']}>{Helpers.transfersQuantity(segments[1].stops)}</div>
                    <div className={Classes['ticket__content']}>{Helpers.transfersNames(segments[1].stops)}</div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;