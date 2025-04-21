import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../core/services/coffee.service';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CoffeeCardComponent {
  @Input() coffee!: Coffee;
  @Output() order = new EventEmitter<string>();

  orderNow() {
    this.order.emit(this.coffee.name);
  }
}
