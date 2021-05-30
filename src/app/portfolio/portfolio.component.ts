import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  images =
  [
    {imgSrc : '../../assets/images/cabin.png' , imgName : 'log cabin'},
    {imgSrc : '../../assets/images/cake.png' , imgName : 'tasty cake'},
    {imgSrc : '../../assets/images/circus.png' , imgName : 'circus tent'},
    {imgSrc : '../../assets/images/game.png' , imgName : 'controller'},
    {imgSrc : '../../assets/images/safe.png' , imgName : 'locked safe'},
    {imgSrc : '../../assets/images/submarine.png' , imgName : 'submarine'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
