import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article.model.interface';

@Component({
  selector: 'app-articles-moving',
  templateUrl: './articles-moving.component.html',
  styleUrls: ['./articles-moving.component.css']
})
export class ArticlesMovingComponent {
  @Input() articlesList!: Article[];
}
