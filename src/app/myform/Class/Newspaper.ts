export class Newspaper {
    name: string = "";
    num: number = 0;
    date: Date = new Date("12/12/1900");
    pages: number = 0;
    newspaper_list: string[] = [];

    constructor(name: string, num: number, date: Date, pages: number, newspaper_list: string[]) {
        this.name = name;
        this.num = num;
        this.date = date;
        this.pages = pages;
        this.newspaper_list = newspaper_list;
    }
}

//Назва газети, Номер, Дата виходу, Кількість сторінок.
//Інформація, яка додається динамічно: Список статей у випуску