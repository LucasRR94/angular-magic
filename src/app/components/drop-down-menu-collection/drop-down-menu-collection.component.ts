import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LIST_BLOCKS } from "../constants"

@Component({
  selector: 'app-drop-down-menu-collection',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule],
  templateUrl: './drop-down-menu-collection.component.html',
  styleUrl: './drop-down-menu-collection.component.css'
})
export class DropDownMenuCollectionComponent implements OnChanges {
  public selectedBlock: string = '';
  public selectedCar: string = '';
  public borderStyle: string = '';
  @Input() public warningActive: boolean = true;
  @Output() blockEvent = new EventEmitter<string>();
  public collectionBlock = LIST_BLOCKS;

  resetForDefaultStyle() {
    this.borderStyle = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['warningActive'] && changes['warningActive'].currentValue) {
      // Set border style to '2px solid red' when warningActive becomes true
      this.borderStyle = '2px solid red';

      // Reset border style after 5 seconds
      setTimeout(() => {
        this.resetForDefaultStyle();
      }, 5000);
    }
  }

  getBlock() {
    this.blockEvent.emit(this.selectedBlock)
  }
}
