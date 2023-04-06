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

  //this function populates the cardlist
  cards() {
    this.cardList = [];
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
    this.selectedCards.length = 0;

    while (this.selectedCards.length < 4) {
      const randomIndex = Math.floor(Math.random() * this.cardList.length);
      const randomCard = this.cardList[randomIndex];
      if (!this.selectedCards.includes(randomCard)) {
        this.selectedCards.push(randomCard);
        this.cardList.splice(randomIndex, 1); //To remove selected card from cardlist
      }
    }
    console.log('Selected Cards: ', this.selectedCards);

    this.generatedCardList.push(this.selectedCards);
    console.log('Generated card list: ', this.generatedCardList);

    this.generatedCardList.forEach((innerArr: any) => {
      innerArr.forEach((card: any) => {
        this.cardList = this.cardList.filter((item: any) => item !== card);
      });
    });

    console.log('Modified Card List:', this.cardList);

    if (this.cardList.length === 0) {
    }
  }
}
