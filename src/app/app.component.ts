import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';

  resultVal!: number;

  clearningEquations() {
    this.equationAdd = ""
    this.equationSubtract = ""
    this.equationDivide = ""
    this.equationMultiply = ""
  }

  //ADDITION//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  firstNumAdd = "";
  secondNumAdd = "";
  equationAdd = "";

  createAddEquation() {
    this.clearningEquations()
    this.equationAdd = this.firstNumAdd + " + " + this.secondNumAdd + " = " + this.resultVal.toString()
    this.firstNumAdd = "";
    this.secondNumAdd = "";
  }
  performAddition() {
    this.resultVal = Number(this.firstNumAdd) + Number(this.secondNumAdd);
    return this.resultVal
  }

  //SUBTRACTION//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  firstNumSubtract = "";
  secondNumSubtract = "";
  equationSubtract = "";

  createSubtractEquation() {
    this.clearningEquations()
    this.equationSubtract = this.firstNumSubtract + " - " + this.secondNumSubtract + " = " + this.resultVal.toString()
    this.firstNumSubtract = "";
    this.secondNumSubtract = "";
  }
  performSubtraction() {
    this.resultVal = Number(this.firstNumSubtract) - Number(this.secondNumSubtract);
    return this.resultVal
  }

  //MULTIPLICATION//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  firstNumMultiply = "";
  secondNumMultiply = "";
  equationMultiply = "";

  createMultiplyEquation() {
    this.clearningEquations()
    this.equationMultiply = this.firstNumMultiply + " * " + this.secondNumMultiply + " = " + this.resultVal.toString()
    this.firstNumMultiply = "";
    this.secondNumMultiply = "";
  }
  performMultiplication() {
    this.resultVal = Number(this.firstNumMultiply) * Number(this.secondNumMultiply);
    return this.resultVal
  }

  //DIVISION//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  firstNumDivide = "";
  secondNumDivide = "";
  equationDivide = "";

  createDivideEquation() {
    this.clearningEquations()
    this.equationDivide = this.firstNumDivide + " / " + this.secondNumDivide + " = " + this.resultVal.toString()
    this.firstNumDivide = "";
    this.secondNumDivide = "";
  }
  performDivision() {
    this.resultVal = Number(this.firstNumDivide) / Number(this.secondNumDivide);
    return this.resultVal
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}

