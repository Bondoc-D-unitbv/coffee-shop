import { Injectable, signal } from '@angular/core';

export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private coffees = signal<Coffee[]>([
    {
      id: 1,
      name: 'Espresso',
      description: 'Strong and bold coffee.',
      price: 2.5,
      imageUrl: 'https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk foam.',
      price: 3.0,
      imageUrl: 'https://lorcoffee.com/cdn/shop/articles/Cappuccino-exc.jpg?v=1684870907'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth coffee with lots of milk.',
      price: 3.5,
      imageUrl: 'https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg'
    },
    {
      id: 4,
      name: 'Mocha',
      description: 'Flavoured variant of caffè latte.',
      price: 4.5,
      imageUrl: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/the_perfect_mocha_coffee_29100_16x9.jpg'
    }, 
    {
      id: 5,
      name: 'Doppio',
      description: 'A robust coffee ideal for those who need a boost to get through the day',
      price: 3.0,
      imageUrl: 'https://www.nestleprofessional.in/sites/default/files/2021-08/Doppio.jpg'
    },
    {
      id: 6,
      name: 'Black',
      description: 'As simple as it gets with ground coffee beans steeped in hot water, served warm.',
      price: 2.0,
      imageUrl: 'https://drberg-dam.imgix.net/others/black-coffee-glass-cup-beans-jumping.jpg?w=992&auto=compress,format'
    },
    {
      id: 7,
      name: 'Irish Coffee',
      description: 'An iconic hot beverage that dates back to the 1940s, consisting of Irish whiskey, Coffee, sugar, and cream.',
      price: 3.0,
      imageUrl: 'https://coffeewithnora.com/wp-content/uploads/2024/12/Irish-Coffee-Whiskey-IMG_0233-6-768x1024.jpg'
    }
  ]);

  getCoffees() {
    return this.coffees;
  }

  searchCoffee(term: string): Coffee[] {
    return this.coffees().filter(c =>
      c.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
