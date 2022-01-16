import { Component } from '@angular/core';

// export class addingNumbers {
//   resultValue!: number;
//   firstNum!: string;
//   secondNum!: string;
//   addition() {
//     this.resultValue = Number(this.firstNum) + Number(this.secondNum)
//   }
// }

// export class subtractingNumbers {
//   resultValue!: number;
//   firstNum!: string;
//   secondNum!: string;
//   subtraction() {
//     this.resultValue = Number(this.firstNum) - Number(this.secondNum)
//   }
// }
// export class multiplyingNumbers {
//   resultValue!: number;
//   firstNum!: string;
//   secondNum!: string;
//   multiplication() {
//     this.resultValue = Number(this.firstNum) * Number(this.secondNum)
//   }
// }

// export class dividingNumbers {
//   resultValue!: number;
//   firstNum!: string;
//   secondNum!: string;
//   division() {
//     this.resultValue = Number(this.firstNum) / Number(this.secondNum)
//   }
// }

// export class performMathOperation {
//   resultValue!: number;
//   operator!: string;
//   firstNum!: string;
//   secondNum!: string;
//   choosingOperation() {
//     if (this.operator === '+'){
//       this.resultValue = Number(this.firstNum) + Number(this.secondNum)
//     }
//     else if (this.operator === '-'){
//       this.resultValue = Number(this.firstNum) - Number(this.secondNum)
//     }
//     else if (this.operator === '*'){
//       this.resultValue = Number(this.firstNum) * Number(this.secondNum)
//     }
//     else if (this.operator === '/'){
//       this.resultValue = Number(this.firstNum) / Number(this.secondNum)
//     }
//     return this.resultValue
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';

  // resultValue!: number;
  // operator!: "+";
  // firstNum!: string;
  // secondNum!: string;
  // doAddition() {
  //   this.resultValue=Number(this.firstNum) + Number(this.secondNum);
  // }

  resultVal!: number;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  firstNumAdd = "";
  secondNumAdd = "";
  equationAdd = "";

  createAddEquation() {
    this.equationAdd = this.firstNumAdd + " + " + this.secondNumAdd + " = " + this.resultVal.toString()
    console.log(this.equationAdd)
    // this.equation = 'this.firstNum + " " + this.secondNum + " = " this.result'
  }
  performAddition() {
    this.resultVal=Number(this.firstNumAdd) + Number(this.secondNumAdd);
    // console.log(this.resultVal)
    return this.resultVal
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  firstNumSubtract = "";
  secondNumSubtract = "";
  equationSubtract = "";

  createSubtractEquation() {
    this.equationSubtract = this.firstNumSubtract + " - " + this.secondNumSubtract + " = " + this.resultVal.toString()
    console.log(this.equationSubtract)
    // this.equation = 'this.firstNum + " " + this.secondNum + " = " this.result'
  }
  performSubtraction() {
    this.resultVal=Number(this.firstNumSubtract) - Number(this.secondNumSubtract);
    // console.log(this.resultVal)
    return this.resultVal
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  clearEquation() {
    
  }



  }


  // sum = 'sum';
  // difference = 'difference';
  // product = 'product';
  // quotient = 'quotient';

  // add: addingNumbers = {
  //   resultValue: 0,
  //   firstNum: " ",
  //   secondNum: " ",
  //   addition: function (): void {
  //     throw new Error('Function not implemented.');
  //   }
  // }

  // operation: performMathOperation = {
  //   resultValue: 0,
  //   firstNum: "",
  //   secondNum: "",
  //   operator: "",
  //   choosingOperation: function (): number {
  //     throw new Error('Function not implemented.');
  //   }
  // }
// }
