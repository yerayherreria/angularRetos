import { Component, Input } from '@angular/core';
import { Product } from './product';
import { StartsComponent } from '../starts/starts.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [StartsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 @Input() productData!:Product;
}
