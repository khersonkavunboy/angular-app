import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card : Card;
  @Input() index : number;



  title : string = 'My card Title';
  text : string = 'My Sample text Loreewgegjewkgweghwellgewngjewngjwngjwenjewngajngenajgejwnglajgnewjnagjanegnjawengjnewjngjaegjeajgbjkewbgjewagjbewakgj';
  number : number = 42;
  array : any = [1, 1, 2, 3, 4, 5];
  obj : object = {
    name: 'Vitek', info: { age: 25, job: 'DevJet' }
  };

  imgUrl : string = 'https://cdn.auth0.com/blog/angular5/logo.png';

  disabled : boolean = false;


  textColor : string = '';


  constructor() { }

  ngAfterContentInit(): void{ console.log("После инициализации содержимого компонента."); }

  ngOnChanges() : void {
    console.log("ngOnChanges!!!");
  }

  ngOnInit(): void {
    console.log("ngOnInit!!!");
  }

  ngDoCheck() : void {
    console.log("ngDoCheck!!!");
  }

  ngAfterContentChecked(): void{ console.log(" После каждой проверки содержимого компонента. Checked"); }
  ngAfterViewInit(): void{ console.log(" После инициализации представлений компонента. ngAfterViewInit"); }
  ngAfterViewChecked(): void{ console.log("После каждой проверки представлений компонента. ngAfterViewChecked"); }
  ngOnDestroy(): void{ console.log(" Непосредственно перед уничтожением директивы. ngOnDestroy"); }


















  getInfo = () : string => 'Hello world';


  changeTitle(): void {
      this.card.title = 'Title has been changed';
  }


  inputHandler(value){
    this.card.title = value;
  }

  changeHandler() : void {
     console.log(this.card.title);
  }


}
