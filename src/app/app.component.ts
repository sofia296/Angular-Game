import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Game';

  private cardList: any = []; //Containes all the 52 cards
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

    this.selectedCards = [];

    // const numCardsToSelect = Math.min(4, this.cardList.length);

    while (this.selectedCards.length < 4) {
      const randomIndex = Math.floor(Math.random() * this.cardList.length);
      // console.log('Random Card Index: ', randomIndex);
      const randomCard = this.cardList[randomIndex];
      // console.log('Random Cards: ', randomCard);
      if (!this.selectedCards.includes(randomCard)) {
        this.selectedCards.push(randomCard);
        // this.cardList.splice(randomIndex, 1); //To remove selected card from cardlist
      }
    }
    console.log('Selected Cards: ', this.selectedCards);

    this.generatedCardList += this.selectedCards; // List of cards already generated
    console.log('Generated card list: ', this.generatedCardList);

    const result = this.cardList.filter(
      (value: any) => !this.generatedCardList.includes(value)
    );
    console.log('Modified Card List:', result);

    // if (this.generatedCardList.includes(this.selectedCards)) {
    //   console.log('True');
    // }
  }
}
