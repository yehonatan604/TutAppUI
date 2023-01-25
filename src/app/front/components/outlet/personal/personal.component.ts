import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/enterprise/data-services/users.service';
import { ArticlesService } from 'src/app/enterprise/data-services/articles.service';
import { Article } from 'src/app/enterprise/models/article.model';
import { UserDetailsService } from 'src/app/enterprise/data-services/user-details.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  constructor(
    private usersService: UsersService, 
    private articlesService: ArticlesService, 
    private userDetailsService: UserDetailsService
  ) { }

  articles!: Article[];
  userDetails = {};
  userStats = {};
  
  showForm: boolean = false;

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.articlesService.fetchUserArticles(this.usersService.loggedInUser.email).subscribe(articles => {
      this.articles = articles;
      this.userDetailsService.fillLists(this.usersService.loggedInUser, articles);
      this.userDetails = this.userDetailsService.userDetails;
      this.userStats = this.userDetailsService.userStats;
    });
  }

  onClickToggleShowEditForm() {
    this.showForm = !this.showForm;
  }
}
