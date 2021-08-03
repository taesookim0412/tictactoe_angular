import { Component } from '@angular/core';
import {BoardService} from "./tictactoe/board.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public boardService: BoardService) {
  }
  setBoard(){
    this.boardService.matrix = ["O","X","O","X","O","X","O","X","O"];
    this.boardService.matrixSubject.next(this.boardService.matrix);

  }
  title = 'app';
}
