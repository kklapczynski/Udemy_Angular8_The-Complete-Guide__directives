import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;
  values = [1, 3, 5, 7, 10, 13, 15, 50, 100];
  value: number = this.values[0];
  previousValueIndex = -1;

  getCurrentValueIndex(value: number) {
    return this.values.indexOf(value);
  }

  changeValue(currentValue: number) {
    let currentValueIndex = this.getCurrentValueIndex(currentValue);
    
    if (currentValueIndex === 0 || (currentValueIndex < this.values.length -1 && this.previousValueIndex < currentValueIndex)) {
      this.previousValueIndex = currentValueIndex;
      this.value = this.values[++currentValueIndex];
    } else {
      this.value = this.values[--currentValueIndex];
    }
  }
}
