import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  matrix = new Array(9);
  currentTurn = "X"
  constructor() { }
  setIndex(index: number){
    this.matrix[index] = this.currentTurn;
    this.currentTurn = this.currentTurn == "X" ? "O" : "X";
  }
  setThisMatrix(){
    this.matrix = ["O","X","O","X","O","X","O","X","O"];
  }
}
