import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article.model.interface';
import { ImagesService } from 'src/app/services/images.service';
import { LoremIpsumService } from 'src/app/services/lorem-ipsum.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
  @Input() article!: Article;
  author!: string;
  imagePath!: string;

  constructor(
    
    private router: Router, 
    private loremService: LoremIpsumService, 
    private usersService: UsersService,
    private imagesService: ImagesService) 
  { }

  ngOnInit(): void {
    this.article.content = (
      this.article.content == '*' ?
        this.loremService.lorem :
        this.article.content
        );
    this.imagesService.fetchImageById(this.article.id).subscribe(image => {
      this.imagePath = image.location;
    })
    // this.usersService.getUserName(this.article.userId).subscribe(name => {
    //   this.author = name.name;
    // })
    // this.usersService.getKey().subscribe(e => {
    //   console.log(e)
    // });
  }

  onClick() {
    this.router.navigate(['/articles', this.article.id]);
    this.usersService.getKey().subscribe(e => {
      console.log(e)
    });
  }
}
