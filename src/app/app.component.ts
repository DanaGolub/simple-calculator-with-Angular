import { Component } from '@angular/core';

export class addingNumbers {
  resultValue!: number;
  firstNum!: string;
  secondNum!: string;
  addition() {
    this.resultValue = Number(this.firstNum) + Number(this.secondNum)
  }
}

export class subtractingNumbers {
  resultValue!: number;
  firstNum!: string;
  secondNum!: string;
  subtraction() {
    this.resultValue = Number(this.firstNum) + Number(this.secondNum)
  }


}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';
  sum = 'sum';
  difference = 'difference';
  product = 'product';
  quotient = 'quotient';

  mathematicalOperation: {

  }
}
