import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee, CoffeeService } from '../../core/services/coffee.service';
import { CoffeeTableComponent } from '../../shared/coffee-table/coffee-table.component';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule, CoffeeTableComponent, HeaderComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  coffees = signal<Coffee[]>([]);

  constructor(private coffeeService: CoffeeService) {}

  ngOnInit(): void {
    this.coffees.set(this.coffeeService.getCoffees()());
  }
}
