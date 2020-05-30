import { drinkCoffee, eatSnack, takeNap, study } from '../Actions/MoodActions';
import reducer from './MoodReducer';

describe('drink coffee reducer', () => {
    it('handles drink coffee action', () => {
        const state = {
            coffees: 0,
            snacks: 0,
            naps: 0,
            studies: 0
        };
        const action  = drinkCoffee();
        const newState = reducer(state, action);

        expect(newState).toEqual({
            coffees: 1,
            snacks: 0,
            naps: 0,
            studies: 0
        });
    });

    it('handles eat snack action',() => {
        const state = {
            coffees: 1,
            snacks: 0,
            naps: 0,
            studies: 0
        }
        const action = eatSnack();
        const newState = reducer(state, action);

        expect(newState).toEqual({
            coffees: 1,
            snacks: 1,
            naps: 0,
            studies: 0
        });
    });

    it('handles take a nap',() => {
        const state = {
            coffees: 1,
            snacks: 1,
            naps: 0,
            studies: 0
        }
        const action = takeNap();
        const newState = reducer(state, action);

        expect(newState).toEqual({
            coffees: 1,
            snacks: 1,
            naps: 1,
            studies: 0
        });
    });

    it('handles study action', () => {
        const state = {
            coffees: 1,
            snacks: 1,
            naps: 1,
            studies: 0
        }
        const action = study();
        const newState = reducer(state, action);

        expect(newState).toEqual({
            coffees: 1,
            snacks: 1,
            naps: 1,
            studies: 1
        });
    });
});