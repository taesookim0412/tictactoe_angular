import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {BoardService} from "./board.service";

@Component({
  selector: "board",
  template: `
    Winner: None
    <div class="row">
      <Cell [boardElement]="board[0]" [index]="0"></Cell>
      <Cell [boardElement]="board[1]" [index]="1"></Cell>
      <Cell [boardElement]="board[2]" [index]="2"></Cell>
    </div>
    <div class="row">
      <Cell [boardElement]="board[3]" [index]="3"></Cell>
      <Cell [boardElement]="board[4]" [index]="4"></Cell>
      <Cell [boardElement]="board[5]" [index]="5"></Cell>
    </div>
    <div class="row">
      <Cell [boardElement]="board[6]" [index]="6"></Cell>
      <Cell [boardElement]="board[7]" [index]="7"></Cell>
      <Cell [boardElement]="board[8]" [index]="8"></Cell>
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['board.component.scss']
})
export class BoardComponent{
  @Input() board: string[] = [];

  constructor() {
  }

}
