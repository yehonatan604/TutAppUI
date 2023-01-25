import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model.interface';
import { ArticlesListTypes, SenderTypes } from 'src/app/models/enums';

@Component({
  selector: 'app-category-headline',
  templateUrl: './category-headline.component.html',
  styleUrls: ['./category-headline.component.css']
})
export class CategoryHeadlineComponent {
  constructor(private router: Router) { }

  @Output() moveWasClicked = new EventEmitter<number>();
  @Input() title!: string;
  @Input() category!: ArticlesListTypes;
  @Input() articlesList!: Article[];
  
  articleListType = ArticlesListTypes;
  location: number = 1;

  onClickCategory(articleType: ArticlesListTypes) {
    this.router.navigate(['/category', SenderTypes.Home, articleType])
  }

  onClickRight() {
    if (this.location !== 1) {
      this.moveWasClicked.emit(this.location);
      this.location--;
    }
  }

  onClickLeft() {
    if (this.location !== 3) {
      this.moveWasClicked.emit(this.location);
      this.location++;
    }
  }
}
