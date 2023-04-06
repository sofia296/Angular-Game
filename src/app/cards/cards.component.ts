import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  cards=[1,2,3,4]
  @Input() selectedCard = [];

  isFlipped = false;

  isCardFlipped(){
    this.isFlipped != this.isFlipped;
  }
}
