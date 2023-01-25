import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ImagesService } from 'src/app/enterprise/data-services/images.service';
import { AuthComponent } from 'src/app/front/components/outlet/auth/auth.component';
import { LoginFormComponent } from 'src/app/front/components/outlet/auth/login-form/login-form.component';
import { RegisterFormComponent } from 'src/app/front/components/outlet/auth/register-form/register-form.component';
import { CreateComponent } from 'src/app/front/components/outlet/create/create.component';
import { HomeComponent } from 'src/app/front/components/outlet/home/home.component';
import { InboxComponent } from 'src/app/front/components/outlet/inbox/inbox.component';
import { LibraryComponent } from 'src/app/front/components/outlet/library/library.component';
import { MessageListComponent } from 'src/app/front/components/outlet/messages/message-list/message-list.component';
import { MessagesComponent } from 'src/app/front/components/outlet/messages/messages.component';
import { EditUserFormComponent } from 'src/app/front/components/outlet/personal/edit-user-form/edit-user-form.component';
import { FreeTextFormComponent } from 'src/app/front/components/outlet/personal/free-text-form/free-text-form.component';
import { PersonalComponent } from 'src/app/front/components/outlet/personal/personal.component';
import { SearchComponent } from 'src/app/front/components/outlet/search/search.component';
import { ArticleItemComponent } from 'src/app/front/components/shared-components/articles-shared-components/article-item/article-item.component';
import { ArticleComponent } from 'src/app/front/components/shared-components/articles-shared-components/article/article.component';
import { ArticlesMovingComponent } from 'src/app/front/components/shared-components/articles-shared-components/articles-moving/articles-moving.component';
import { ArticlesSteadyComponent } from 'src/app/front/components/shared-components/articles-shared-components/articles-steady/articles-steady.component';
import { CategoryHeadlineComponent } from 'src/app/front/components/shared-components/category-headline/category-headline.component';
import { UserDetailsComponent } from 'src/app/front/components/shared-components/edit-details/edit-details.component';
import { BeautifyDatePipe } from 'src/app/front/pipes/beutify-date.pipe';
import { ShortenTextPipe } from 'src/app/front/pipes/shoretenText.pipe';
import { StringifyDatePipe } from 'src/app/front/pipes/stringify-date.pipe';
import { PasswordService } from '../services/password.service';
import { UserDetailsService } from 'src/app/enterprise/data-services/user-details.service';


@NgModule({
  imports: [
    ReactiveFormsModule, 
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    AngularEditorModule 
  ],
  declarations:[
    HomeComponent, 
    LibraryComponent,
    CreateComponent,
    InboxComponent,
    
    AuthComponent,
    LoginFormComponent,
    RegisterFormComponent,
    
    SearchComponent,
    CategoryHeadlineComponent,
    UserDetailsComponent,
    
    ArticleComponent,
    ArticleItemComponent,
    ArticlesMovingComponent,
    ArticlesSteadyComponent,
    
    PersonalComponent,
    EditUserFormComponent,
    FreeTextFormComponent,
    
    MessagesComponent,
    MessageListComponent,
    
    ShortenTextPipe,
    StringifyDatePipe,
    BeautifyDatePipe
],
providers: [
  PasswordService, ImagesService, UserDetailsService
]
})
export class MainModule  { }
