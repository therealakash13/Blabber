import { Component } from '@angular/core';
import { LatestArticlesComponent } from '../articles/latest-articles/latest-articles.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [LatestArticlesComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {}
