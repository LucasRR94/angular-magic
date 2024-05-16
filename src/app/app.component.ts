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
import { Observable, of, Subscription } from 'rxjs';

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
  private listCardsSubscription: Subscription | undefined;
  public isCardListRender: boolean = false;
  public listCollection: Array<CollectionInterface> = [];
  public listCards: Array<CardInterface> = []
  public changeVisibilityCard = () => this.isCardListRender = !this.isCardListRender;
  constructor(private cardService: CardService) { }

  public setListCollections($event: any) {
    this.listCollection = $event;
  }

  private fetchCards($event: any, targetCount: number) {
    if (this.listCards.length >= targetCount) {
      return; // Exit recursion if target count is reached
    }

    // Call the card service API and accumulate cards
    this.listCardsSubscription = this.cardService.getCards($event).subscribe({
      next: (response: any) => {
        const filteredCards = response?.cards.filter((card: any) => {
          const c = card.types.includes('Creature')
          console.log(c, card.types)
          return c;
        });
        console.log(filteredCards);
        if (filteredCards.length > 0) {
          this.listCards = this.listCards.concat(filteredCards);
        }

        if (this.listCards.length < targetCount) {
          this.fetchCards($event, targetCount);
        } else {
          if (this.listCardsSubscription) {
            this.listCardsSubscription.unsubscribe();
          }
        }
      },
      error: (error) => {
        alert("No cards found");
        if (this.listCardsSubscription) {
          this.listCardsSubscription.unsubscribe();
        }
      }
    });
  }

  public collectionChoose($event: any) {
    this.fetchCards($event, 20)

  }
}
