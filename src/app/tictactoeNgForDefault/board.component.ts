import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {BoardService} from "../board.service";

@Component({
  selector: "board",
  template: `
    Winner: None
    <Cell *ngFor="let item of range; index as index"[index]="index"></Cell>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['board.component.scss']
})
export class BoardComponent{
  range = [0,1,2,3,4,5,6,7,8];

  constructor(private boardService: BoardService) {
  }

}
