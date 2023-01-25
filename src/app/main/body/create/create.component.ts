import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Article } from 'src/app/models/article.model.interface';
import { Image } from 'src/app/models/image.model.interface';
import { ArticlesService } from 'src/app/services/articles.service';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
import { EditorService } from 'src/app/services/editor.service';
import { ImagesService } from 'src/app/services/images.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css', '../../../styles/form-styles.css'],
  providers: [EditorService]
})
export class CreateComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private articlesService: ArticlesService,
    private imagesService: ImagesService,
    private dialog: DialogBoxService,
    private editorService: EditorService) {
  }

  createArticleForm!: FormGroup;

  editorConfig!: AngularEditorConfig;

  article!: Article;
  image!: Image;
  categoryImageList!: Image[];
  categoriesList!: string[];

  titleRegex!: string;
  contentRegex!: string;

  ngOnInit(): void {
    this.titleRegex = "(?=.*[a-z]).{8,20}|(?=.*[A-Z]).{8,20}|(?=.*[א-ת]).{8,20}";
    this.contentRegex = "(?=.*[a-z]).{100,1000}|(?=.*[A-Z]).{100,1000}|(?=.*[א-ת]).{100,1000}";
    this.categoriesList = ['Programming', 'Internet', 'IOT', 'Design'];

    this.editorConfig = this.editorService.editorConfig;
    this.imagesService.fetchImages().subscribe(images => {
      this.categoryImageList = images;
    });

    this.createForm();
  }

  createForm() {
    this.createArticleForm = new FormGroup({
      'content': new FormControl(
        null,
        [Validators.required, Validators.pattern(this.contentRegex)]
      ),
      'title': new FormControl(
        null,
        [Validators.required, Validators.pattern(this.titleRegex)]
      ),
      'category': new FormControl(
        null,
        [Validators.required]
      ),
      'image': new FormControl(
        null,
        [Validators.required]
      ),
    });
  }

  createArticle() {
    // this.article = {
    //   id: 0,
    //   userId: this.usersService.loggedInUser ? this.usersService.loggedInUser.id : 0,
    //   title: this.createArticleForm.value.title,
    //   image: this.createArticleForm.value.image,
    //   content: this.createArticleForm.value.content,
    //   category: this.categoriesList.indexOf(this.createArticleForm.value.category),
    //   date: new Date(),
    //   stars: 0,
    //   views: 0
    // }
  }

  showImage() {
    this.categoryImageList.forEach(e => {
      if (e.title === this.createArticleForm.value.image) {
        this.image = e;
      }
    })
  }

  onSubmit() {
    this.createArticle();
      this.articlesService.postArticle(this.article, this.image.id)
        .subscribe((res: any) => {
          !res ?
            this.dialog.fire('שגיאה', 'הגישה אל השרת נכשלה', 'error') :
            this.dialog.fire('פרסום מאמר חדש', 'המאמר פורסם בהצלחה', 'success');
        });
  }
}
