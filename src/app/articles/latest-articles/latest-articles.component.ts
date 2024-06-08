import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import articlesData from '../../../assets/articles.json'; // Import JSON file using default import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-latest-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-articles.component.html',
  styleUrl: './latest-articles.component.css',
})
export class LatestArticlesComponent {
  articles: Article[] = articlesData; // Use the imported data

  constructor() {
    console.log(this.articles);
  }
}
