import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = "daniel.bondoc@student.unitbv.ro";
}
