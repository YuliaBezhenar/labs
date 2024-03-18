import { quadratic } from "./quadratic";

describe('Quadratic Testing', () => {
    let q: quadratic;
    beforeEach(() => {
        q = new quadratic("Quadratic", 10, 5, 2, 5)
    })
    it("Створення екземпляру класу", () => {
        expect(q).toBeTruthy();
    });
    it("Екземпляр з некоректним ім'ям", () => {
        expect(() => new quadratic("hhcddoa;oa", 10, 5, 2, 0)).toThrow(new Error('Invalid name'));
    });
    it('Розрахунок значення квадратного рівняння 10х^2 + 5x + 2, x=5', () => {
        q.Y();
        let y = q.znach;
        let z = 10 * Math.pow(5, 2) + 5 * 5 + 2;
        expect(y).toBe(z);
    });
})
