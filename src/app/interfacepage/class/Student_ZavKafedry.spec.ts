import { ShowConsole } from "./ShowConsole"
import { ShowScreen } from "./ShowScreen";
import { Student } from "./Student";
import { ZavKafedry } from "./Zav_kafedry";


describe("Student & ZavKafedry Testing", () => {
    let shower1: ShowConsole;
    let shower2: ShowScreen;
    let student: Student;
    let zav_kafedry: ZavKafedry;

    beforeEach(() => {
        shower1 = new ShowConsole();
        shower2 = new ShowScreen();
        student = new Student("Галиницький Д. Р.", 19, "чоловік", 3, shower1);
        zav_kafedry = new ZavKafedry("Романович О. В.", 42, "чоловік", shower1);
    })

    //Тестування створення класів
    it('Створення екземпляру класу ShowerConsole', () => {
        expect(shower1).toBeTruthy();
    })
    it('Створення екземпляру класу ShowerScreen', () => {
        expect(shower2).toBeTruthy();
    })
    it('Створення екземпляру класу Student', () => {
        expect(student).toBeTruthy();
    })
    it('Створення екземпляру класу Завідувача Кафедри', () => {
        expect(zav_kafedry).toBeTruthy();
    })
    it('Метод go у класі Student', () => {
        expect(student.go()).toBe("Я відвідую університет.");
    })
    it('Метод study у класі Student', () => {
        expect(student.study()).toBe("Я навчаюся.");
    })
    it('Метод go у класі Завідувача кафедри', () => {
        expect(zav_kafedry.go()).toBe("Я займаю посаду завдувача кафедри в університеті.");
    })
    it('Метод teach у класі Завідувача кафедри', () => {
        expect(zav_kafedry.teach()).toBe("Я викладаю.");
    })


})