import { Component } from '@angular/core';
import {UserType} from './card.type';
import { CommonModule } from '@angular/common';

const userArr:Array<UserType> = [
  {id: 1, name: 'John Doe', age: 30},
  {id: 2, name: 'John Doe', age: 40},
  {id: 3, name: 'John Doe', age: 50, surname: 'Doe'},
  {id: 4, name: 'John Doe', age: 60}
]

@Component({
  selector: 'app-card',
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})



export class CardComponent {
  user:Array<UserType> = [];

  constructor() {
    this.user = userArr;
  }





}
