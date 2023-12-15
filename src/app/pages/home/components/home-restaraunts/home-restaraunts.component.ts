import { Component } from '@angular/core';

@Component({
  selector: 'app-home-restaraunts',
  templateUrl: './home-restaraunts.component.html',
  styleUrls: ['./home-restaraunts.component.scss']
})
export class HomeRestarauntsComponent {
  public restaraunts = [
    {
      img: 'assets/restaurants/img1.png',
      name: 'Royal Sushi House',
      time: '30-40 min',
      price: '$32 min sum',
      cartImg: 'assets/restaurants/cart.svg',
      tags: [
        {
          sushi: 'assets/categories/sushi4.svg',
          info: 'Sushi'   
        },
      ]
    },
    {
      img: 'assets/restaurants/img2.png',
      name: 'Burgers & Pizza',
      time: '40-60 min',
      price: '$24 min sum',
      cartImg: 'assets/restaurants/cart.svg',
      tags: [
        {
          sushi: 'assets/categories/pizza2.svg',
          info: 'Burger'   
        },
        {
          sushi: 'assets/categories/pizza1.svg',
          info: 'Pizza'   
        },
      ]
    },
    {
      img: 'assets/restaurants/img3.png',
      name: 'Ninja sushi',
      time: '20-40 min',
      price: '$40 min sum',
      cartImg: 'assets/restaurants/cart.svg',
      tags: [
        {
          sushi: 'assets/categories/sushi4.svg',
          info: 'Sushi'   
        },
      ]
    },
    {
      img: 'assets/restaurants/img4.png',
      name: 'Sushi master',
      time: '60-70 min',
      price: '$49 min sum',
      cartImg: 'assets/restaurants/cart.svg',
      tags: [
        {
          sushi: 'assets/categories/sushi4.svg',
          info: 'Sushi'   
        },
        
      ]
      
    },
    {
      img: 'assets/restaurants/img5.png',
      name: 'Japanese sushi',
      time: '30-50 min',
      price: '$104 min sum',
      cartImg: 'assets/restaurants/cart.svg',
      tags: [
        {
          sushi: 'assets/categories/sushi4.svg',
          info: 'Sushi'   
        },
        
      ]
      
    },
    {
      img: 'assets/restaurants/img6.png',
      name: 'Kobe',
      time: '20-30 min',
      price: '$57 min sum',
      cartImg: 'assets/restaurants/cart.svg',
      tags: [
        {
          sushi: 'assets/categories/sushi4.svg',
          info: 'Sushi'   
        },
        
      ]
      
    },
    
  ]

}
