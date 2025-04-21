import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [CommonModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <div class="about">
      <h2>About Us</h2>
      <p><strong>Name:</strong> Bondoc Daniel</p>
      <p><strong>Semigroup:</strong> 10Lf331</p>
      <p>We are a friendly, passionate family business with generations of love for coffee.</p>
      <p> Our journey began with a small shop and a big dream — to bring people together over the perfect cup. Every bean we roast tells a story of tradition, patience, and care passed down through generations. </p>
      <p> We believe great coffee isn’t just about taste — it’s about moments shared, memories created, and the warmth it brings. From sourcing the finest beans to perfecting each blend, we pour our hearts into every step. </p>
      <p>Taste our coffee, and you’ll taste the love, heritage, and craftsmanship behind it.</p>

      <picture class="about-image">
       <img src="https://www.oldcoffeeroaster.com/resources/Final-Site.jpg" alt="Family Coffee Tradition">
      </picture>


    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}

