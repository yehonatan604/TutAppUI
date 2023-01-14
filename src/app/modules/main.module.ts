import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { HomeComponent } from '../main/body/home/home.component';

import { LightboxComponent } from '../main/body/shared-components/lightbox/lightbox.component';
import { CreateComponent } from '../main/body/create/create.component';
import { InboxComponent } from '../main/body/inbox/inbox.component';
import { LibraryComponent } from '../main/body/library/library.component';
import { LoginComponent } from '../main/body/login/login.component';
import { PersonalComponent } from '../main/body/personal/personal.component';
import { SearchComponent } from '../main/body/search/search.component';
import { ArticleItemComponent } from '../main/body/shared-components/articles/article-item/article-item.component';
import { ArticlesMovingComponent } from '../main/body/shared-components/articles/articles-moving/articles-moving.component';
import { ArticlesSteadyComponent } from '../main/body/shared-components/articles/articles-steady/articles-steady.component';
import { MessageListComponent } from '../main/body/shared-components/messages/message-list/message-list.component';
import { MessageItemComponent } from '../main/body/shared-components/messages/message-item/message-item.component';
import { MessagesComponent } from '../main/body/shared-components/messages/messages.component';
import { CommonModule } from '@angular/common';
import { ShortenTextPipe } from '../pipes/shoretenText.pipe';
import { NewlinePipe } from '../pipes/newline.pipe';
import { ArticleComponent } from '../main/body/shared-components/articles/article/article.component';
import { PasswordService } from '../services/password.service';
import { StringifyDatePipe } from '../pipes/stringify-date.pipe';
import { LoginFormComponent } from '../main/body/login/login-form/login-form.component';
import { RegisterFormComponent } from '../main/body/login/register-form/register-form.component';
import { CategoryHeadlineComponent } from '../main/body/shared-components/category-headline/category-headline.component';
import { ImagesService } from '../services/images.service';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditDetailsFormComponent } from '../main/body/personal/edit-details-form/edit-details-form.component';
import { EditUserFormComponent } from '../main/body/personal/edit-user-form/edit-user-form.component';
import { FreeTextFormComponent } from '../main/body/personal/free-text-form/free-text-form.component';
import { UserDetailsComponent } from '../main/body/shared-components/user-details/user-details.component';
import { BeautifyDatePipe } from '../pipes/beutify-date.pipe';

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
    
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    
    SearchComponent,
    LightboxComponent,
    CategoryHeadlineComponent,
    UserDetailsComponent,
    
    ArticleComponent,
    ArticleItemComponent,
    ArticlesMovingComponent,
    ArticlesSteadyComponent,
    
    PersonalComponent,
    EditDetailsFormComponent,
    EditUserFormComponent,
    FreeTextFormComponent,
    
    MessagesComponent,
    MessageListComponent,
    MessageItemComponent,
    
    ShortenTextPipe,
    NewlinePipe,
    StringifyDatePipe,
    BeautifyDatePipe
],
providers: [
  PasswordService, ImagesService
]
})
export class MainModule  { }
