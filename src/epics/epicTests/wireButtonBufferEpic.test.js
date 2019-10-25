import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as Actions from "../../actions";
import * as actionTypes from "../../constants/actionTypes";

describe('wireButtonBufferEpic', () => {

  it('should (the number of arguments is equal or greater than 3) return ADD_PROJECT, TOGGLE_WIRE_BUYER_PROJECT',
    () => {
        const action$ = ActionsObservable.of({
            type: actionTypes.CLICK_WIRE_BUTTON
        },
        {
            type: actionTypes.CLICK_WIRE_BUTTON
        },
        {
            type: actionTypes.CLICK_WIRE_BUTTON
        },
        {
            type: actionTypes.CLICK_WIRE_BUTTON
        });
        const state$ = {
            value: {
                business: {
                    wireBuyerProjectIsShown: false,
                    wireToAdd: 1500
                }
            }
        }
        const epic$ = Epic.wireButtonBufferEpic(action$, state$);
        const array = [];
        epic$.subscribe(
            (action) => array.push(action)
        )

        expect(array).toEqual([
            { 
                type: actionTypes.ADD_PROJECT,
                project: {
                    text1: "WireBuyer (7,000 ops)",
                    text2: "Automatically purchases wire when you run",
                    text3: "out",
                    price: {
                        ops: 3
                    },
                    action: 1,
                    next: 'wireBuyer',
                    valid: false,
                    id: "card36",
                    terminal: "WireBuyer online"
                }
            },
            { 
                type: actionTypes.TOGGLE_WIRE_BUYER_PROJECT
            }
        ])
    })

    it('should (the number of arguments is equal or greater than 3 and wireBuyerProjectIsShown is true and wireToAdd is equal to 1500) return nothing',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            });
            const state$ = {
                value: {
                    business: {
                        wireBuyerProjectIsShown: true,
                        wireToAdd: 1500
                    }
                }
            }
            const epic$ = Epic.wireButtonBufferEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([])
        })

    it('should (the number of arguments is equal or greater than 3 and wireBuyerProjectIsShown is true and wireToAdd is not equal to 1500) return nothing',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            });
            const state$ = {
                value: {
                    business: {
                        wireBuyerProjectIsShown: false,
                        wireToAdd: 400
                    }
                }
            }
            const epic$ = Epic.wireButtonBufferEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([])
        })

    it('should (the number of arguments is less than 3) return nothing',
        () => {
            const action$ = ActionsObservable.of({
                type: actionTypes.CLICK_WIRE_BUTTON
            },
            {
                type: actionTypes.CLICK_WIRE_BUTTON
            });
            const state$ = {
                value: {
                    business: {
                        wireBuyerProjectIsShown: false,
                        wireToAdd: 1500
                    }
                }
            }
            const epic$ = Epic.wireButtonBufferEpic(action$, state$);
            const array = [];
            epic$.subscribe(
                (action) => array.push(action)
            )

            expect(array).toEqual([])
        })
});