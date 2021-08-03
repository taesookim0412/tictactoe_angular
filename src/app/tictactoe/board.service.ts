import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  matrix = new Array(9);
  matrixSubject = new BehaviorSubject<Array<string>>(this.matrix);
  currentTurn = "X"
  constructor() { }
  setIndex(index: number){
    this.matrix[index] = this.currentTurn;
    this.matrixSubject.next(this.matrix);
    this.currentTurn = this.currentTurn == "X" ? "O" : "X";
  }
}
