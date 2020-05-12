export const getMoods = state => state;

export const getMoodsByIndex = (state, i) => {
    const foundByIndex = getMoods(state).findIndex(mood => mood === state[i]);
    return state[foundByIndex];
};