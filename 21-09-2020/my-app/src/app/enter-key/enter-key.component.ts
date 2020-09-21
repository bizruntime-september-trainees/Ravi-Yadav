import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-key',
  templateUrl: './enter-key.component.html',
  styleUrls: ['./enter-key.component.scss']
})
export class EnterKeyComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
