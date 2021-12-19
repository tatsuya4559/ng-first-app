import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  numbers: number[] = [];

  onIncrement(event: number) {
    this.numbers.push(event);
  }
}
