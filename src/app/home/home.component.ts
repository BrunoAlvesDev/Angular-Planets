import { Component, OnInit } from '@angular/core';
import { Planet } from '../interfaces/planet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public planets: Planet[];

  constructor() {
    this.planets = [];
  }

  ngOnInit(): void {
    this.randomPlanetsNumber();
  }

  public randomPlanetsNumber(): void {
    let planetsNumber = Math.random() * (10 - 1) + 1;

    for (let i = 0; i < planetsNumber; i++) {
      let size = this.randomPlanetSize();
      let speed = this.randomOrbitSpeed();
      let color = this.randomPlanetColor();
      let distance = this.randomOrbitDistance();

      this.planets.push({
        size,
        speed,
        color,
        distance,
        moons: 5,
      });
    }
  }

  public randomOrbitDistance(): string {
    let distance = Math.random() * (50 - 10) + 10;
    return `${distance}rem`;
  }

  public randomOrbitSpeed(): string {
    let speed = Math.random() * (50 - 10) + 10;
    return `translation ${speed}s linear infinite`;
  }

  public randomPlanetSize(): string {
    let rand = Math.random() * (2 - 1) + 1;
    let decimals = Math.pow(10, 2);
    let size = Math.floor(rand * decimals) / decimals;
    return `${size}vw`;
  }

  public randomPlanetColor(): string {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
