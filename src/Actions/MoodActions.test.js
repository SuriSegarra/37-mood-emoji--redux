import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK ,takeNap, TAKE_NAP , study, STUDY } from './MoodActions';

describe('mood actions test', () => {
    it('drinks a coffee', () => {
        const actions = drinkCoffee();

        expect(actions).toEqual({
            type: DRINK_COFFEE
        });
    });
});
