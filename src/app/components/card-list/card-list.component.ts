import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardService } from '../../services/card.service';
import { NgFor } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardInterface } from '../../Interfaces';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})

export class CardListComponent implements OnChanges {
  @Input() listCards: Array<CardInterface> | null = null;

  constructor(private cardService: CardService) { }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
  }
  /*
  ngOnInit(): void {
    this.loadCards();
  }
  */
  // loadCards(): void {
  //   this.cardService.getCards().subscribe(
  //     (cards) => {
  //       this.listCards = cards;
  //     },
  //     (error) => {
  //       console.error('Error fetching cards:', error);
  //     }
  //   );
  // }
}


