import { Component, signal, OnInit } from '@angular/core';
import { CoffeeService, Coffee } from '../../core/services/coffee.service';
import { CoffeeCardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, CoffeeCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coffees = signal<Coffee[]>([]);
  selectedCoffee = signal<string | null>(null);

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffees.set(this.coffeeService.getCoffees()());
  }

  onOrder(coffeeName: string) {
    this.selectedCoffee.set(coffeeName);
  }
}
