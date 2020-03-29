import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  host: {
    '[class.foo]': 'hasFoo',
    '[style.color]': 'color'
  }
})
export class ItemDetailComponent implements OnInit {
  @Input() childItem: string;
  @Input() items: Item[];
  @Input() prefix: string;
  @Input() item;
  itemImageUrl2 = '../assets/image/villain.png';

  lineThrough = '';
  displayNone = '';

// This component makes a request but it can't actually delete a hero.
  @Output() deleteRequest = new EventEmitter<Item>();

  delete() {
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
