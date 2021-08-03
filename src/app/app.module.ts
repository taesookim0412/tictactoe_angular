import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BoardComponent} from "./tictactoe/board.component";
import {BoardService} from "./tictactoe/board.service";
import {CellComponent} from "./tictactoe/Cell.component";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
