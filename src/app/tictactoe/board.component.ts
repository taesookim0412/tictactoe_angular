import {ChangeDetectionStrategy, Component} from "@angular/core";
import {BoardService} from "./board.service";

@Component({
  selector: "board",
  template: `
    Winner: None
    <div class="row">
      <Cell [index]="0"></Cell>
      <Cell [index]="1"></Cell>
      <Cell [index]="2"></Cell>
    </div>
    <div class="row">
      <Cell [index]="3"></Cell>
      <Cell [index]="4"></Cell>
      <Cell [index]="5"></Cell>
    </div>
    <div class="row">
      <Cell [index]="6"></Cell>
      <Cell [index]="7"></Cell>
      <Cell [index]="8"></Cell>
    </div>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['board.component.scss']
})
export class BoardComponent{
  constructor(private boardService: BoardService) {
  }

}
