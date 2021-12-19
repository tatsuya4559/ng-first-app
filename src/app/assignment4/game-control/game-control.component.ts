import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  n: number = 0;
  gameTimerId: any;
  @Output() increment = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.gameTimerId = setInterval(() => {
      this.n++;
      this.increment.emit(this.n);
    }, 1000)
  }

  stop() {
    clearInterval(this.gameTimerId);
  }

}
