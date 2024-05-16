import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CollectionInterface } from '../../Interfaces';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NgFor, DatePipe } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule, DatePipe],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  @Input() collection: CollectionInterface = { block: '', name: 'PlaceHolder', releaseDate: new Date(), code: '' };
  @Output() collectionChooseEvent = new EventEmitter();
  collectionChoose(): void {
    this.collectionChooseEvent.emit(this.collection.code);
  }
}
