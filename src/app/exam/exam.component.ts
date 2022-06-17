import {Component} from "@angular/core";
import {exam} from "../iterface/exam.interface";

@Component({
  selector:'app-exam',
  templateUrl:'./exam.component.html'
})
export class examComponent{
  michale:exam[]=[
    {title:'Sale Representative',date:'10/5/1996',address:'7 Houndstooth Rd.',city:'London',phone:'(71)555-4444'}
  ]
  laura:exam[]=[
    {title:'Marketing',date:'12/6/1995',address:'So 8 Ton That Thuyet.',city:'England',phone:'678901213'}
  ]
  robert:exam[]=[
    {title:'Sale ',date:'27/5/2003',address:'So 8 Ton That Thuyet',city:'Viet Nam',phone:'123456987'}
  ]
  albert:exam[]=[
    {title:'Responbility',date:'10/5/1996',address:'So 8 Ton That Thuyet.',city:'Viet Nam',phone:'678678678678'}
  ]

}
