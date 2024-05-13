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
    console.log("Зміни!");
    this.pos$.next(pos);
  }
  constructor() { }
}

var positionList = new PositionList();
const DEFAULT_POS = positionList.position.get(0);