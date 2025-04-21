import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../core/services/coffee.service';

@Component({
  selector: 'app-coffee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-table.component.html',
  styleUrls: ['./coffee-table.component.scss']
})
export class CoffeeTableComponent {
  @Input() coffees!: Signal<Coffee[]>;
}
