import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component'
import { RegisterComponent } from './pages/auth/register/register.component'
import { EventsComponent } from './pages/events/events/events.component';
import { SpecialEventsComponent } from './pages/events/special-events/special-events.component';
import { ListUsersComponent } from './pages/users/list-users/list-users.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: ListUsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
