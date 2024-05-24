import { Injectable } from '@angular/core';
import { PositionList } from './PositionList';
import { BehaviorSubject } from 'rxjs';
import { Position } from './Position';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  currentPos = DEFAULT_POS;
  pos$: BehaviorSubject<Position> = new BehaviorSubject<Position>(DEFAULT_POS);
  setPos(pos: Position) {
    //console.log("Зміни!");
    this.pos$.next(pos);
  }
  constructor() { }
}

const DEFAULT_POS = { "id": 1, "name": "Директор" };