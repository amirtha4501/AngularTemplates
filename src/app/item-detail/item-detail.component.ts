import { Component, OnInit, Input } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }

}
