import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {BoardService} from "./board.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: "Cell",
  template: `
  <div (click)="onClickCell()" class="cell">{{(boardService.matrixSubject | async | slice :index:index+1)}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['Cell.component.scss']
})
export class CellComponent{
  @Input() index: number = 0;
  constructor(public boardService: BoardService) {
  }
  onClickCell(){
    // this.boardService.matrix = new Array(9).fill(this.boardService.currentTurn);
    this.boardService.setIndex(this.index);
  }
}
