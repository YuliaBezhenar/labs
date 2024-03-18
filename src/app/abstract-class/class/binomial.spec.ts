import { binomial } from "./binomial"

describe('Binomial Testing', () => { 
    let b: binomial;
    beforeEach(() => {
        b = new binomial("Binomial", 5, 2, 5)
    })
    it("Створення екземпляру класу", () => {
        expect(b).toBeTruthy();
    });
    it("Екземпляр з некоректним ім'ям", () => {
        expect(() => new binomial("hhcddoa;oa", 5, 2, 0)).toThrow(new Error('Invalid name'));
    });
    it('Розрахунок значення квадратного рівняння + 5x + 2, x=5', () => {
        b.Y();
        let y = b.znach;
        let z = 5 * 5 + 2;
        expect(y).toBe(z);
    });
})