import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model.interface';
import { ArticlesListTypes } from 'src/app/models/enums';
import { ArticlesService } from 'src/app/services/articles.service';
import { LoremIpsumService } from 'src/app/services/lorem-ipsum.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articlesList!: Article[];
  articlesByNew!: Article[];
  articlesByStarred!: Article[];
  articlesByVisited!: Article[];
  articleListType = ArticlesListTypes;

  constructor(
    private articlesService: ArticlesService,
    private loremService: LoremIpsumService,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.articlesService.fetchArticles().subscribe(items => {
      this.articlesList = items;
      this.articlesList.forEach(article => {
        article.content = (
          article.content == '*' ?
            this.loremService.lorem :
            article.content
        );
      })
      this.articlesByNew = this.articlesList.slice(0, 3);
      this.articlesByStarred = this.articlesList.slice(0, 3);
      this.articlesByVisited = this.articlesList.slice(0, 3);
    });
  }

  move(sender: ArticlesListTypes, location: any) {
    switch (sender) {
      case ArticlesListTypes.New:
        {
          this.articlesByNew = this.articlesList.slice(location, location + 3);
          break;
        }
      case ArticlesListTypes.Starred:
        {
          this.articlesByStarred = this.articlesList.slice(location, location + 3);
          break;
        }
      case ArticlesListTypes.Visited:
        {
          this.articlesByVisited = this.articlesList.slice(location, location + 3);
          break;
        }
    }
  }
}