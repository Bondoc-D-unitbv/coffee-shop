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
      imageUrl: 'placeholder1.jpg' // replace with image later
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk foam.',
      price: 3.0,
      imageUrl: 'placeholder2.jpg'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth coffee with lots of milk.',
      price: 3.5,
      imageUrl: 'https://via.placeholder.com/150'
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
