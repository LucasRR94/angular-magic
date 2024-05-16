import { Component, Input, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule, NgFor],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent implements OnInit {
  @Input() currentList: Array<any> = [];
  currentPage: number = 0;
  pageSize: number = 5;
  pageContent: Array<any> = [];

  constructor(private paginator: MatPaginator) {

  }

  ngOnInit() {
    this.paginator.pageSize = this.pageSize;
    this.updateContentPage();
  }

  updateContentPage() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pageContent = this.currentList.slice(startIndex, endIndex)
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex; // selected page
    this.updateContentPage();
  }

}
