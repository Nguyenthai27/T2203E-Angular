import {Component} from "@angular/core";
import {Imail} from "../iterface/mail.interface";
import {Icategory} from "../iterface/category.interface";

@Component({
  selector:'app-ass1',
  templateUrl:'./ass1.component.html'
})
export class ass1Component{
  mails: Imail[] = [
    {userName:'Emma Heard', subject:'Apologize for late response', shortContent:'I am here'},
    {userName:'Roberson', subject:'Have a good day', shortContent:'Something'},
    {userName:'Donal Trump', subject:'Is presient', shortContent:'USA'},
  ];
  categories: Icategory[]= [
    {name:'Favorite', childs:[{name:'inbox'},{name:'send iteams'}]},
    {name:'John', childs:[{name:'inbox'},{name:'send iteams'},{name:'out box'}]},
  ];
}

