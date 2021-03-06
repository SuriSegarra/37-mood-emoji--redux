import { drinkCoffee, DRINK_COFFEE, eatSnack, EAT_SNACK ,takeNap, TAKE_NAP , study, STUDY } from './MoodActions';

describe('mood actions test', () => {
    it('drinks a coffee', () => {
        const actions = drinkCoffee();

        expect(actions).toEqual({
            type: DRINK_COFFEE
        });
    });

    it('eats a snack', () => {
        const actions = eatSnack();

        expect(actions).toEqual({
            type: EAT_SNACK
        });
    });

    it('takes a nap', () => {
        const actions = takeNap();

        expect(actions).toEqual({
            type: TAKE_NAP
        });
    });
    it('study', () => {
        const actions = study();

        expect(actions).toEqual({
            type: STUDY
        });
    });
});

