import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { EventsComponent } from './pages/events/events/events.component';
import { SpecialEventsComponent } from './pages/events/special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { ListUsersComponent } from './pages/users/list-users/list-users.component';
import { HomeComponent } from './pages/home/home.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddPackageComponent } from './pages/admin/add-package/add-package.component';
import { SinglePackageComponent } from './pages/single-package/single-package.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    ListUsersComponent,
    HomeComponent,
    PackagesComponent,
    NavComponent,
    FooterComponent,
    AddPackageComponent,
    SinglePackageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, EventService, UserService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
