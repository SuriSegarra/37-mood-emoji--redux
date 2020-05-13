import { isEducated, isHungry, isHyper, isTired } from './MoodSelector';

describe('mood selector testing', () => {
    it('true if coffee and naps are less than 1', () => {
        const state = {
            coffees: 0,
            snacks: 2,
            naps: 0,
            studies: 5
        };
        const tired = isTired(state);
        expect(tired).toEqual(true)
    });
    it('false if coffee || naps are greater than 1', () => {
        const state = {
            coffees: 2,
            snacks: 0,
            naps: 4,
            studies: 0
        }
        const tired = isTired(state);
        expect(tired).toEqual(false);
    });
    it('true if cofee is greater than 3', () => {
        const state = {
            coffees: 4,
            snacks: 0,
            naps: 0,
            studies: 5
        }
        const hyper = isHyper(state);
        expect(hyper).toEqual(true);
    });
    it('false if cofee is less than 3', () => {
        const state = {
            coffees: 0,
            snacks: 2,
            naps: 0,
            studies: 5
        }
        const hyper = isHyper(state);
        expect(hyper).toEqual(false);
    });
    it('true if educated if greater than 2', () => {
        const state = {
            coffees: 0,
            snacks: 2,
            naps: 0,
            studies: 5
        }
        const educated = isEducated(state);
        expect(educated).toEqual(true);;
    });
    it('false if educated is less than 2', () => {
        const state = {
            coffees: 0,
            snacks: 2,
            naps: 0,
            studies: 1
        }
        const educated = isEducated(state);
        expect(educated).toEqual(false);
    });
    it('true if hungry is less than 1', () => {
        const state = {
            coffees: 0,
            snacks: 0,
            naps: 0,
            studies: 5
        }
        const hunry = isHungry(state);
        expect(hunry).toEqual(true);
    });
    it('false if hungry is greater than 1', () => {
        const state = {
            coffees: 0,
            snacks: 2,
            naps: 0,
            studies: 5
        }
        const hungry  = isHungry(state);
        expect(hungry).toEqual(false);
    });
});