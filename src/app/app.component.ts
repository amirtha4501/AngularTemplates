import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Syntax';
  text = 'My hero';
  isUnchanged = true;
  classes = 'special';
  parentItem = 'lamp';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  currentItems = [{
    id: 21,
    name: 'phone'
  },];
  itemImageUrl1 = '../assets/image/hero.png';
  itemImageUrl2 = '../assets/image/villain.png';
  getVal() {
    return 4;
  }
  deleteHero(hero?: Hero) {
    alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }
  onSubmit(data: any) {/* referenced but not used */}
}
