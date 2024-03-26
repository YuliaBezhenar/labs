import { IShow } from "../interface/IShow";

export class ShowConsole implements IShow{
    show(s: string) {
        console.log(s);
    }
}