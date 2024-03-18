import { cubic } from "./cubic"


describe('Cubic Testing', () => {
    let c: cubic;
    beforeEach(() => {
        c = new cubic("Cubic", 4, -10, 5, 2, 5)
    })
    it("Створення екземпляру класу", () => {
        expect(c).toBeTruthy();
    });
    it("Екземпляр з некоректним ім'ям", () => {
        expect(() => new cubic("hhcddoa;oa", 4, -10, 5, 2, 0)).toThrow(new Error('Invalid name'));
    });
    it('Розрахунок значення кубічного рівняння 4x^3 - 10х^2 + 5x + 2, x=5', () => {
        c.Y();
        let y = c.znach;
        let z = 4*Math.pow(5, 3) - 10 * Math.pow(5, 2) + 5 * 5 + 2;
        expect(y).toBe(z);
    });
 })