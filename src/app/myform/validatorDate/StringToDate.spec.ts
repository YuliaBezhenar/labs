import { TestBed } from "@angular/core/testing";
import { StringToDade } from "./StringToDate";


describe('StringToDate', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });
    it('Перевірка перетворення дати', () => {
        let s = "12.12.2004"
        let d = new Date("2004.12.12");
        expect(StringToDade(s)).toEqual(d);
    });
    it('Перевірка перетворення дати', () => {
        let s = "12/12/2004"
        let d = new Date("2004.12.12");
        expect(StringToDade(s)).toEqual(d);
    });
});