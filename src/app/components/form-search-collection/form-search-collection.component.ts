import { Component, Output, EventEmitter } from '@angular/core';
import { DropDownMenuCollectionComponent } from '../drop-down-menu-collection/drop-down-menu-collection.component';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CollectionService } from '../../services/collection.service';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-form-search-collection',
  standalone: true,
  imports: [DropDownMenuCollectionComponent, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './form-search-collection.component.html',
  styleUrl: './form-search-collection.component.css'
})
export class FormSearchCollectionComponent {
  collectionName = new FormControl('', []);
  public warningActive: boolean = false;
  private collectionBlock: string = '';
  collectionsResponse$: Observable<any> = of(undefined);
  @Output() collectionEvent = new EventEmitter();
  constructor(private collectionService: CollectionService) {

  }
  validatecollectionBlock() {
    return this.collectionBlock !== '';
  }

  updateCollectionBlock($event: string) {
    this.collectionBlock = $event;
  }

  onFormSubmit() {
    if (!this.validatecollectionBlock()) {
      this.warningActive = true;
      setTimeout(() => { this.warningActive = false }, 3000);
    }
    //calls api
    this.collectionsResponse$ = this.collectionService.getCollections(`${this.collectionName.value}|${this.collectionBlock}`);
    this.collectionsResponse$.subscribe((data) => {
      const answer = data?.sets ?? null;
      if (!answer) {
        return;
      }
      this.collectionEvent.emit(answer);
    })
  }

}
