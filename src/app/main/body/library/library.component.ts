import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model.interface';
import { ArticlesListTypes, CategoryTypes, SenderTypes } from 'src/app/models/enums';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  articlesList!: Article[];
  articlesByProgramming!: Article[];
  articlesByInternet!: Article[];
  articlesByDesign!: Article[];
  articlesByIOT!: Article[];
  categoryTypes = CategoryTypes;

  constructor(
    private articlesService: ArticlesService,
    private router: Router) { }

  ngOnInit(): void {
    this.articlesService.fetchArticles().subscribe( items => {
    this.articlesList = items;
    this.articlesByProgramming = this.articlesList.filter(x => x.category == CategoryTypes.Programming);
    this.articlesByInternet = this.articlesList.filter(x => x.category == CategoryTypes.Internet);
    this.articlesByDesign = this.articlesList.filter(x => x.category == CategoryTypes.Design);
    this.articlesByIOT = this.articlesList.filter(x => x.category == CategoryTypes.IOT);
    });
  }

  onClick(categoryType: CategoryTypes) {
    this.router.navigate(['/category', SenderTypes.Library, categoryType])
  }

  move(sender: CategoryTypes, location: any) {
    switch (sender) {
      case CategoryTypes.Programming:
        {
          if (this.articlesByInternet.length > 3) {
            this.articlesByProgramming = this.articlesList
              .slice(location, location + 3);
          }
          break;
        }
      case CategoryTypes.Internet:
        {
          if (this.articlesByInternet.length > 3) {
            this.articlesByInternet = this.articlesList.slice(location, location + 3);
          }
          break;
        }
      case CategoryTypes.Design:
        {
          if (this.articlesByInternet.length > 3) {
            this.articlesByDesign = this.articlesList
              .filter(x => x.category == CategoryTypes.Design).slice(location, location + 3);
          }
          break;
        }
      case CategoryTypes.IOT:
        {
          if (this.articlesByInternet.length > 3) {
            this.articlesByIOT = this.articlesList
              .filter(x => x.category == CategoryTypes.IOT).slice(location, location + 3);
          }
          break;
        }
    }
  }

}
