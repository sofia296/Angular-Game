import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Game';

  cardList: any = []; //Containes all the 52 cards
  suits = ['H', 'S', 'C', 'D'];
  randomCard: any; // gets just one random card
  shownCards: any = [];
  generatedCardList: any = [];
  removeRandomCard: any;
  selectedCards: any = [];

  cards() {
    //this function populates the cardlist
    if (this.cardList.length === 52) {
      // console.log('Card List already contains 52 cards.');
      return;
    }
    for (let i = 1; i <= 13; i++) {
      this.suits.forEach((suit) => {
        this.cardList.push(suit + '_' + i);
      });
    }
    console.log('Card List: ', this.cardList);
  }

  onClick() {
    this.cards();

    while (this.selectedCards.length < 4) {
      const randomIndex = Math.floor(Math.random() * this.cardList.length);
      const randomCard = this.cardList[randomIndex];
      if (!this.selectedCards.includes(randomCard)) {
        this.selectedCards.push(randomCard);
      }
    }

    console.log('Selected Cards: ', this.selectedCards);

    // this.generatedCardList.push(this.selectedCards); // List of cards already generated
    // console.log('Generated card list: ', this.generatedCardList);

    const result = this.cardList.filter(
      (value: any) => !this.selectedCards.includes(value)
    );
    console.log('Modified Card List:', result);
  }
}
