import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSectionComponent } from './left-section/left-section.component';
import { RightSectionComponent } from './right-section/right-section.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SocialDirective } from './social.directive';
import { DirectiveComponent } from './directive/directive.component';
import { ProductDirective } from './product.directive';
import { HttpClientModule } from '@angular/common/http';
import { PasswordComponent } from './password/password.component';
import { LogoutComponent } from './logout/logout.component';
import { Guard1Guard } from './guard1.guard';
import { Guard2Guard } from './guard2.guard';
import { FilterCatComponent } from './filter-cat/filter-cat.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, canActivate:[Guard2Guard] },
  { path: 'cart', component: CartComponent },
  { path: 'password', component: PasswordComponent, canActivate:[Guard1Guard]},
  {path: 'filterCategory/:id1',component:FilterCatComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: '**', component:  PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SectionComponent,
    FooterComponent,
    LeftSectionComponent,
    RightSectionComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    SocialDirective,
    DirectiveComponent,
    ProductDirective,
    PasswordComponent,
    LogoutComponent,
    FilterCatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
