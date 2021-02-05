import { Component } from '@angular/core';


export interface Card {
  title: string;
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    toggle = true;

    cards: Card[]= [
      {title:'Card 1', text:'This 1'},
      {title:'Card 2', text:'This 2'},
      {title:'Card 3', text:'This 3'},
      {title:'Card 4', text:'This 4'}
    ];



    toggleCards() : void{
        this.toggle = !this.toggle;
    }
}
