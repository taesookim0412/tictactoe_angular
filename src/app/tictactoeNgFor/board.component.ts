import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {BoardService} from "../board.service";

//9: index - 1.3-2ms
//9: item: 1.3ms-1.6
//9: no index: 1ms
@Component({
  selector: "board",
  template: `
    Winner: None

    <Cell *ngFor="let item of range" [boardElement]="boardService.matrix[item]" [index]="item"></Cell>
<!--    <Cell *ngFor="let cell of board; index as index" [boardElement]="cell" [index]="index"></Cell>-->

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['board.component.scss']
})
export class BoardComponent{
  range = [0,1,2,3,4,5,6,7,8];
  // @Input() board: string[] = [];

  constructor(public boardService: BoardService) {
  }

}
