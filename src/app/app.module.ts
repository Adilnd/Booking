import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { FormBookingComponent } from './book-list/form-booking/form-booking.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import {BooksService} from './services/books.service';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: 'auth/signup' , component: SignupComponent},
  {path: 'auth/signin' , component: SigninComponent},
  {path: 'books/list' , component: BookListComponent},
  {path: 'books/viewBook/:id' , component: SingleBookComponent},
  {path: 'books/editBooking' , component: FormBookingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    FormBookingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
