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
  interpolationTitle = "My interpolated title";
  propertyTitle = "My property title";
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  itemImageUrl1 = '../assets/image/hero.png';
  itemImageUrl2 = '../assets/image/villain.png';
  actionName = 'Ammu';
  color = 'red';
  classExpr = 'special clearance';
  styleExpr = 'color: red';
  isFoo = true;
  isSpecial = true;
  
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  currentItems = [{
    id: 21,
    name: 'phone'
  }];


  getVal() {
    return 4;
  }
  
  deleteHero(hero?: Hero) {
    alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }
  
  onSubmit(data: any) {
    /* referenced but not used */
  }
}
