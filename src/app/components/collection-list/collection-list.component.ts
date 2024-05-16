import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { CollectionInterface } from '../../Interfaces';
import { NgFor } from '@angular/common';
import { CollectionComponent } from "../collection/collection.component";

@Component({
  selector: 'app-collection-list',
  standalone: true,
  imports: [NgFor, CollectionComponent],
  templateUrl: './collection-list.component.html',
  styleUrl: './collection-list.component.css'
})
export class CollectionListComponent implements OnChanges {
  @Input() listCollection: Array<CollectionInterface> | null = null;
  @Output() codeChooseHandling = new EventEmitter();
  constructor(private collectionService: CollectionService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  codeHaveBeenChoose($event: any) {
    this.codeChooseHandling.emit($event);
  }

}
