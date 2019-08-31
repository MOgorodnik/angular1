import { Component } from '@angular/core';
// import {log} from "util";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  // One Way Binding changingInComponent ==>> changingInTemplate
  // canAddCar = false;
  //
  // constructor() {
  //   setTimeout( () => {
  //     this.canAddCar = true;
  //   }, 2000);
  // }

  //  One Way Binding  changingInTemplate ==>> changingInComponent
  // addCarStatus = '';
  // addText = '';
  // addCar() {
  //   this.addCarStatus = 'Some car was add.';
  // }
  // 1
  // onKeyUp(event) {
  //   console.log(event);
  //   this.inputText = event.target.value;
  //   // this.inputText = (<HTMLInputElement>event.target).value;  // for   onKeyUp(event: Event) { ...
  // }

  // 2
  // onKeyUp(value) {
  //   console.log(event);
  //   this.inputText = value;
  // }

  // 3
  // onKeyUp(event) {
  //   console.log(event);
  //   if (event.key === 'Enter') {
  //       this.inputText = event.target.value;
  //   }
  // }

  // 4
  // onKeyUp(event) {
  //   this.inputText = event.target.value;
  // }

  /*
  Two Way Binding  changingInTemplate << == >> changingInComponent
  First input as early filling text after press "Enter"
  */
  // inputText = "default"
  // onKeyUp(event) {
  //   this.inputText = event.target.value;
  // }

  // ngIf else
  carName = '';
  carYear = '2018';
  addCarStatus = false;

  // ngFor
  // cars = ['Ford', 'Audi', 'Tesla', 'BMW', 'KIA'];
  // items = [{id: 3, name: 'Bob 1'}, {id: 2, name: 'Bob 2'}, {id: 1, name: 'Bob 3'}]

  // addCar() {
  //   this.addCarStatus = true;
  //   this.cars.push(this.carName);
  //   this.carName = '';
  // }
  //
  // setBigCarText(car: string) {
  //   return (car.length > 4) ? true : false;
  // }

  // cars: [{name: string, year: number}] = [{
  //     name: 'Ford',
  //     year: 2018
  // }, {
  //     name: 'KIA',
  //     year: 2017
  // }, {
  //     name: 'Tesla',
  //     year: 2019
  // }];

  // addCarInfo() {
  //   this.cars.push({
  //     name: this.carName,
  //     year: this.carYear
  //   });
  //   this.carName = '';
  //   this.carYear = '2018';
  // }

}
