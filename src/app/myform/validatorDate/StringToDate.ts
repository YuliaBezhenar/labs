// Переведення з тексту формату дд.мм.рррр або 
// дд/мм/ррр у дату

export function StringToDade(value: string): Date {
    let arrD: string[] = [];
    arrD = value.split(/[.-/]/);
    let arrDate: number[] = [];
    arrD.forEach((el) => { arrDate.push(Number(el)) });

    arrDate[1] -= 1;

    return new Date(arrDate[2], arrDate[1], arrDate[0]);
}