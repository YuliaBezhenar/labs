import { IShow } from "../interface/IShow";

export class ShowScreen implements IShow{
    info: string = "";
    show(s: string) {
        this.info = "Інформація про особу: " + s;
    }
}