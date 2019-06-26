import { decodeWithEntities } from '../helpers';

describe('decodeWithEntities method', () => {
    it('returns proper string when found correct entities', () => {
        const text1 = 'The retail disc of Tony Hawk&#039;s Pro Skater 5 only comes with the tutorial.';
        const expectedResult1 = `The retail disc of Tony Hawk's Pro Skater 5 only comes with the tutorial.`;

        expect(decodeWithEntities(text1)).toBe(expectedResult1);

        const text2 = 'In the game &quot;Melty Blood Actress Again Current Code&quot;, you can enter Blood Heat mode in Half Moon style.';
        const expectedResult2 = 'In the game "Melty Blood Actress Again Current Code", you can enter Blood Heat mode in Half Moon style.';

        expect(decodeWithEntities(text2)).toBe(expectedResult2);
    });

    it('returns same string when not found correct entities', () => {
        const text = 'In the game &qdfauot;Melty Blood Actress Again Current Code&qdfauot;, you can enter Blood Heat mode in Half Moon style.';
        const expectedResult = 'In the game &qdfauot;Melty Blood Actress Again Current Code&qdfauot;, you can enter Blood Heat mode in Half Moon style.';

        expect(decodeWithEntities(text)).toBe(expectedResult);
    });
});