import * as Actions from "./actions";

export function counter(state = 0, action) {
    switch (action.type) {

    case Actions.INCREMENT:
        return state + 5;
    case Actions.DECREMENT:
        return state - 5;
    case Actions.RESET:
        return 0;
    default:
        return state;

    }
}
