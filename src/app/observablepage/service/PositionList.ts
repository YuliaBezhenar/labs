import { Position } from './Position';

export class PositionList{
    position = new Map();
    constructor() {
        this.position.set(0, { id: 0, name: "Директор" });
        this.position.set(1, { id: 1, name: "Помічник директора" });
    }
    add(pos: Position) {
        this.position.set(pos.id, { id: pos.id, name: pos.name });
    }
}