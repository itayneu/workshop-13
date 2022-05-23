const getCounterState = state => state.counter;

export const getCounterValue = state => getCounterState(state).value;
