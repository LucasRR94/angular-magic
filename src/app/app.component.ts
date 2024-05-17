import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardService } from './services/card.service';
import { HttpClientModule } from '@angular/common/http';
import { FormSearchCollectionComponent } from './components/form-search-collection/form-search-collection.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { CollectionInterface } from './Interfaces';
import { CardInterface } from './Interfaces';
import { CollectionService } from './services/collection.service';
import { NgIf } from "@angular/common";
import { Observable, of, Subscription, map, scan, catchError } from 'rxjs';
import { MAX_REQUEST_LIST } from "./components/constants";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [CardService, CollectionService],
  imports: [NgIf, RouterOutlet, CardListComponent, HttpClientModule, FormSearchCollectionComponent, CollectionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-magic';
  listCards$: Observable<any> = of(undefined);
  private listCardsSubscription$: Subscription | undefined;
  public isCardListRender: boolean = false;
  public ErrorInRequest: boolean = false;
  public listCollection: Array<CollectionInterface> = [];
  public listCards: Array<CardInterface> = []

  public changeVisibilityCard = () => this.isCardListRender = !this.isCardListRender;
  constructor(private cardService: CardService) { }

  public setListCollections($event: any) {
    if (this.isCardListRender) {
      this.changeVisibilityCard();
    }

    this.listCollection = $event;
  }

  private receiveCards(arrayCards: Array<CardInterface>) {
    this.changeVisibilityCard();
    this.listCards = arrayCards;
  }

  /*
  params ***
  event represent the information necessary to make the request
  targetCount represent the number of times the function executed the request
  */
  private fetchCards($event: any, targetCount: number, accumulator: Array<CardInterface>) {
    if (this.listCards.length >= targetCount) {
      this.listCards = [];
      this.ErrorInRequest = true;
      return; // Exit recursion if target count is reached
    }
    this.cardService.getCards($event)
      .pipe(
        map((request: any) => request?.cards.filter((actualCard: any) => actualCard.types.includes('Creature'))),
      )
      .subscribe({
        next: (cardsFiltered) => {
          const temporaryAccumulator: Array<any> = accumulator.concat(cardsFiltered);
          if (temporaryAccumulator.length >= 30) {
            this.receiveCards(temporaryAccumulator);
            this.listCards = temporaryAccumulator;
            return;
          }
          if (targetCount + 1 > MAX_REQUEST_LIST) {
            return;
          }
          this.fetchCards($event, targetCount + 1, temporaryAccumulator);
        },
        error: () => { alert('Error no cards found') }
      });

    // Call the card service API and accumulate cards

  }

  public collectionChoose($event: any) {
    this.fetchCards($event, 20, [])

  }
}
