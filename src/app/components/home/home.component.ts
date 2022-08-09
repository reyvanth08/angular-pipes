import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor() {}
    str: string = 'Good MoRnInG! HaVe A nIce dAy!';
    today: any = new Date();
    usd: number = 1200;
    jsonObj = {
      build: "2022",
      manufacturer: "Tata",
      model: 'Harrier'
    }
    months: any = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May"
    ]
    // obj = JSON.stringify(this.jsonObj);


    ngOnInit(): void {}
}
