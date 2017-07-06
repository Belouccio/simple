import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '**', redirectTo: "/home"}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
