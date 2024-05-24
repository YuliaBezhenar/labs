import { Position } from './Position';

export class PositionList{
    position = new Array();
    constructor() { }
    add(pos: Position) {
        this.position.push(pos);
    }
}