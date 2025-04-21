import { Component, signal, OnInit } from '@angular/core';
import { CoffeeService, Coffee } from '../../core/services/coffee.service';
import { CoffeeCardComponent } from '../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { computed } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterModule, CoffeeCardComponent, SearchBarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coffees = signal<Coffee[]>([]);
  selectedCoffee = signal<string | null>(null);
  searchQuery = signal('');

  filteredCoffees = computed(() =>
    this.coffees().filter(c =>
      c.name.toLowerCase().includes(this.searchQuery().toLowerCase())
    )
  );

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffees.set(this.coffeeService.getCoffees()());
  }

  onOrder(coffeeName: string) {
    this.selectedCoffee.set(coffeeName);
  }
}
